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
public class YoutubeUtil {
    
    @Autowired
    private static URLUtil url;

    public static String getChannelId(String videoId)
    {
    	String txt=url.readText("https://www.googleapis.com/youtube/v3/videos?part=snippet%2Cid&id="+videoId+"&key="+Credential.OAuth.google.API_KEY);
    	int st=txt.indexOf("\"channelId\":");
    	if(st>-1)
    	{
	    	txt=txt.substring(st+12,txt.length());
                txt=txt.substring(txt.indexOf("\"")+1,txt.indexOf("\","));
                return txt;
    	}
    	return "";
    }
    
    public static String getChannelLogo(String channelId)
    {
    	String txt=url.readText("https://www.googleapis.com/youtube/v3/channels?part=snippet&id="+channelId+"&key="+Credential.OAuth.google.API_KEY);
    	int st=txt.indexOf("\"url\":");
    	if(st>-1)
    	{
	    	txt=txt.substring(st+8,txt.length());
                txt=txt.substring(0,txt.indexOf("\""));
                return txt;
    	}
    	return "";
    }
    
//    public static String isChannelTrusted(String videoId)
//    {
//	
//    }
    
}