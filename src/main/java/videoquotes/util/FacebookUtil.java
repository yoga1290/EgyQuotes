package videoquotes.util;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import videoquotes.Credential;

/**
 *
 * @author yoga1290
 */
@Service
public class FacebookUtil {

    @Autowired
    private static URLUtil url;

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
	// see https://developers.facebook.com/docs/marketing-api/authentication
	// see https://developers.facebook.com/docs/facebook-login/manually-build-a-login-flow#confirm
  System.out.println("https://graph.facebook.com/v2.5/oauth/access_token?client_id="+Credential.OAuth.facebook.APP_ID+"&redirect_uri="+Credential.OAuth.facebook.REDIRECT_URL+"&client_secret="+Credential.OAuth.facebook.APP_SECRET+"&code="+code);
	String access_token = URLUtil.readText("https://graph.facebook.com/v2.5/oauth/access_token?client_id="+Credential.OAuth.facebook.APP_ID+"&redirect_uri="+Credential.OAuth.facebook.REDIRECT_URL+"&client_secret="+Credential.OAuth.facebook.APP_SECRET+"&code="+code);
	System.out.println("access_token:" + access_token);
	return new JSONObject(access_token).getString("access_token");
    }

    public static String getFacebookId(String access_token) {
	String facebookId = url.readText("https://graph.facebook.com/me?access_token="+access_token);
	return new JSONObject(facebookId).getString("id");
	// return access_token;
//	return facebookId.substring(facebookId.indexOf("\"id\":\"")+6,facebookId.indexOf("\","));
    }

}
