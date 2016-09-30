package videoquotes.util;

import java.text.SimpleDateFormat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

/**
 *
 * @author yoga1290
 */
@Service
public class YoutubeUtil {
    
    @Value("${videoquotes.oauth.google.apiKey}")
    String API_KEY;
    
    @Autowired
    private static URLUtil url;

    public String getChannelId(String videoId)
    {
    	String txt=url.readText("https://www.googleapis.com/youtube/v3/videos?part=snippet%2Cid&id="+videoId+"&key="+ API_KEY);
    	int st=txt.indexOf("\"channelId\":");
    	if(st>-1)
    	{
	    	txt=txt.substring(st+12,txt.length());
                txt=txt.substring(txt.indexOf("\"")+1,txt.indexOf("\","));
                return txt;
    	}
    	return "";
    }
    
    public String getChannelLogo(String channelId)
    {
    	String txt=url.readText("https://www.googleapis.com/youtube/v3/channels?part=snippet&id="+channelId+"&key="+ API_KEY);
    	int st=txt.indexOf("\"url\":");
    	if(st>-1)
    	{
	    	txt=txt.substring(st+8,txt.length());
                txt=txt.substring(0,txt.indexOf("\""));
                return txt;
    	}
    	return "";
    }
    
    public String getChannelName(String channelId)
    {
    	String txt=url.readText("https://www.googleapis.com/youtube/v3/channels?part=snippet&id="+channelId+"&key="+ API_KEY);
    	int st=txt.indexOf("\"title\":");
    	if(st>-1)
    	{
	    	txt=txt.substring(st+10,txt.length());
                txt=txt.substring(0,txt.indexOf("\""));
                return txt;
    	}
    	return "";
    }
    
    public long getPublishedTime(String videoId)
    {
	System.out.println("\n\n\n\n\n\n " + videoId + "\n\n\n\n\n");
	///*
	//https://www.googleapis.com/youtube/v3/videos?part=snippet&id=videoId&key=AIzaSyAiom5s4YGZ7C00vCm1YWFvBmwbSFQ67Cs
    	String txt=url.readText("https://www.googleapis.com/youtube/v3/videos?part=snippet&id="+videoId+"&key="+ API_KEY);
	String tag = "\"publishedAt\": \"";
    	int st=txt.indexOf(tag);
    	if(st>-1)
    	{
	    	txt=txt.substring(st+tag.length(),txt.length());
                txt=txt.substring(0,txt.indexOf("\""));
		// e.g: 2013-09-26T15:48:11.000Z
		// see http://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html#rfc822timezone
		try {
		 return new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'").parse(txt).getTime();
		}catch(Exception e) {
		    e.printStackTrace();
		}
                return -1;
    	}
	//*/
    	return 0;
    }
    
//    public static String isChannelTrusted(String videoId)
//    {
//	
//    }
    
}