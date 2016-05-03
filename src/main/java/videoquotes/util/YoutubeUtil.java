/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package videoquotes.util;

import videoquotes.util.*;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.text.SimpleDateFormat;
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
    
    public static String getChannelName(String channelId)
    {
    	String txt=url.readText("https://www.googleapis.com/youtube/v3/channels?part=snippet&id="+channelId+"&key="+Credential.OAuth.google.API_KEY);
    	int st=txt.indexOf("\"title\":");
    	if(st>-1)
    	{
	    	txt=txt.substring(st+10,txt.length());
                txt=txt.substring(0,txt.indexOf("\""));
                return txt;
    	}
    	return "";
    }
    
    public static long getPublishedTime(String videoId)
    {
    	String txt=url.readText("https://www.googleapis.com/youtube/v3/videos?part=snippet&id="+videoId+"&key="+Credential.OAuth.google.API_KEY);
	String tag = "\"publishedAt\": \"";
    	int st=txt.indexOf(tag);
    	if(st>-1)
    	{
	    	txt=txt.substring(st+tag.length(),txt.length());
                txt=txt.substring(0,txt.indexOf("\""));
		// e.g: 2013-09-26T15:48:11.000Z
		// see http://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html#rfc822timezone
		try {
		 return new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSZ").parse(txt).getTime();
		}catch(Exception e){}
                return -1;
    	}
    	return -1;
    }
    
//    public static String isChannelTrusted(String videoId)
//    {
//	
//    }
    
}