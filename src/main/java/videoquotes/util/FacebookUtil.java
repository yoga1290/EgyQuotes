/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package videoquotes.util;

import videoquotes.util.*;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URLEncoder;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import videoquotes.Credential;
import videoquotes.errorMessages.FacebookSharingFailed;
import videoquotes.repository.Quote;
import videoquotes.repository.pageACRepository;

/**
 *
 * @author yoga1290
 */
//@Component
@Service
public class FacebookUtil {
    
    @Autowired
    private static URLUtil url;
    @Autowired
    private pageACRepository pageACRepo;

    public static int getPostShareCount(String postId)
    {
    	String txt=url.readText("https://graph.facebook.com/"+Credential.OAuth.facebook.PAGE_ID+"_"+postId+"?access_token="+Credential.OAuth.facebook.APP_ACCESS_TOKEN);
    	int st=txt.indexOf("\"shares\":");
    	if(st>-1)
    	{
	    	txt=txt.substring(st+9,txt.length());
		    txt=txt.substring(txt.indexOf("\"count\": ")+9,txt.indexOf("\n"));
		    return Integer.parseInt(txt);
    	}
    	return 0;
    }
    
    public static int getPostLikesCount(String postId)
    {
    	String txt=URLUtil.readText("https://graph.facebook.com/"+Credential.OAuth.facebook.PAGE_ID+"_"+postId+"/likes?summary=true&access_token="+Credential.OAuth.facebook.APP_ACCESS_TOKEN);
    	int st=txt.indexOf("\"total_count\":");
    	if(st>-1)
    	{
	    	txt=txt.substring(st+14,txt.length());
		txt=txt.substring(0,txt.indexOf("}"));
		return Integer.parseInt(txt);
    	}
    	return 0;
    }
    
    public static String getAccessToken(String code){
	String access_token=url.readText("https://graph.facebook.com/oauth/access_token?client_id="+Credential.facebook.APP_ID+"&redirect_uri="+Credential.OAuth.facebook.REDIRECT_URL+"&client_secret="+Credential.facebook.APP_SECRET+"&code="+code);
	return access_token.substring(access_token.indexOf('=')+1);
    }
    
    public static String getFacebookId(String access_token){
	String facebookId=url.readText("https://graph.facebook.com/me?access_token="+access_token);
	return facebookId.substring(facebookId.indexOf("\"id\":\"")+6,facebookId.indexOf("\","));
    }
    
    public String postQuote(Quote quote,String personId,String personName,String channelId)
    {
	String q="";
	String access_token="";
	String postId="";
	
	try{
	    access_token=new pageACRepository().findOne(Credential.facebook.PAGE_ID).getAc();
	    q="message="+URLEncoder.encode("\u201D"+quote.getQuote()+"\u201C"+"\n\n "+"\u2015"+" #"+quote.getPersonId(), "UTF-8")
		+"&name="+URLEncoder.encode(personName+":", "UTF-8")
		+"&description="+URLEncoder.encode("\u201D"+quote.getQuote()+"\u201C", "UTF-8")
		+"&link="+URLEncoder.encode(Credential.BASE_URL+"/#/quote/"+quote.getKey(), "UTF-8")
		+"&picture="+URLEncoder.encode(YoutubeUtil.getChannelLogo(channelId), "UTF-8")
		+"&access_token="+access_token
		;
	}catch(Exception e){
	    throw new FacebookSharingFailed();
	}
	
	
	try{
	    postId=URLUtil.sendPost("https://graph.facebook.com/"+Credential.facebook.PAGE_ID+"/feed?access_token="+access_token,q);
	    return postId.substring(postId.indexOf('_')+1,postId.lastIndexOf('"'));
	}catch(Exception e){
	    throw new FacebookSharingFailed();
	}
    }
    
}
