package videoquotes.util;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

/**
 *
 * @author yoga1290
 */
@Service
public class FacebookUtil {
    
    @Value("${videoquotes.oauth.facebook.appId}")
    String APP_ID;
    
    @Value("${videoquotes.oauth.facebook.pageId}")
    String PAGE_ID;
    
    @Value("${videoquotes.oauth.facebook.redirectUri}")
    String REDIRECT_URL;
    
    @Value("${videoquotes.oauth.facebook.appSecret}")
    String APP_SECRET;
    
    @Value("${videoquotes.oauth.facebook.appAccessToken}")
    String APP_ACCESS_TOKEN;

    @Autowired
    private static URLUtil url;

    public int getPostShareCount(String postId)
    {
    	String txt=url.readText("https://graph.facebook.com/" + PAGE_ID + "_"+postId+"?access_token="+ APP_ACCESS_TOKEN);
    	int st=txt.indexOf("\"shares\":");
    	if(st>-1)
    	{
	    	txt=txt.substring(st+9,txt.length());
		    return Integer.parseInt(txt);
    	}
    	return 0;
    }

    public int getPostLikesCount(String postId)
    {
    	String txt=URLUtil.readText("https://graph.facebook.com/" + PAGE_ID + "_"+postId+"/likes?summary=true&access_token=" + APP_ACCESS_TOKEN);
    	int st=txt.indexOf("\"total_count\":");
    	if(st>-1)
    	{
	    	txt=txt.substring(st+14,txt.length());
		txt=txt.substring(0,txt.indexOf("}"));
		return Integer.parseInt(txt);
    	}
    	return 0;
    }

    public String getAccessToken(String code){
	// see https://developers.facebook.com/docs/marketing-api/authentication
	// see https://developers.facebook.com/docs/facebook-login/manually-build-a-login-flow#confirm
	String url = "https://graph.facebook.com/oauth/access_token?client_id=" + APP_ID + "&redirect_uri="+ REDIRECT_URL + "&client_secret=" + APP_SECRET + "&code="+code;
	System.out.println("\n\n\n\n\n\n\n\n\nURL: "+ url+"\n\n\n\n\n\n\n\n");
	String access_token = URLUtil.readText(url);
	System.out.println("\n\n\n\n\n\n\n\n\n\nextracting access_token:" + access_token+"\n\n");
	access_token = access_token.split("=")[1].split("&")[0];
	return access_token;
    }

    public static String getFacebookId(String access_token) {
	System.out.println("FacebookUtil.getFacebookId\n\n\n\n\n\n\n");
	String facebookId = url.readText("https://graph.facebook.com/me?access_token="+access_token);
	return new JSONObject(facebookId).getString("id");
    }

}
