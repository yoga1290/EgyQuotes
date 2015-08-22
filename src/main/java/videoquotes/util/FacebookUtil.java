/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package videoquotes.util;

import videoquotes.util.*;
import java.io.InputStream;
import java.net.HttpURLConnection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import videoquotes.Credential;

/**
 *
 * @author yoga1290
 */
@Component
public class FacebookUtil {
    
    @Autowired
    private static URLUtil url;

    public static String getPostShareCount(String postId)
    {
    	String txt=url.readText("https://graph.facebook.com/"+Credential.OAuth.facebook.PAGE_ID+"_"+postId+"?access_token="+Credential.OAuth.facebook.APP_ACCESS_TOKEN);
    	int st=txt.indexOf("\"shares\":");
    	if(st>-1)
    	{
	    	txt=txt.substring(st+9,st+100);
		    txt=txt.substring(txt.indexOf("\"count\": ")+9,txt.indexOf("\n"));
		    return txt;
    	}
    	return "0";
    }
    
}
