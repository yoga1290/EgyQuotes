package videoquotes.controller;

import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;













import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.databind.util.JSONPObject;
import com.google.api.client.json.Json;
import com.google.api.client.json.JsonObjectParser;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.InetAddress;
import java.net.Socket;
import java.net.URLDecoder;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import videoquotes.Credential;
import videoquotes.util.FacebookUtil;
import videoquotes.util.URLUtil;
import videoquotes.util.YoutubeUtil;



// Tell Spring that this class is a Controller that should 
// handle certain HTTP requests for the DispatcherServlet
@Controller
public class YTSvc
{
	@Autowired
	private URLUtil url;

	//TODO: for debug only
	/*
	@RequestMapping(value="/ytch", method=RequestMethod.GET)
	public @ResponseBody String getChannelLogo(@RequestParam String id) throws Exception
	{
            return YoutubeUtil.getChannelLogo(id);
	}//*/

	
	
	/*
	get the video url by running this on localhost:8080 & exec this script:
	
	var isVisited={};
	$.ajax({
		url:'/Quote/list?offset=0&limit=100',
		type:'GET',
		success:function(response){


		    var loop=function(i){

			if(i>=response.length) return;
	
			if(isVisited[response[i].properties.videoId]===true)
			{
			    loop(i+1);
			    return;
			}
			else
			   isVisited[response[i].properties.videoId]=true; 
			    $.ajax({
				url:'http://localhost:8080/youtube?videoId='+response[i].properties.videoId,
				type:'GET',
				success:function(response2){
				    console.log(i);
				    loop(i+1);
				}
			    });
		    };
		    loop(0);
		}
	});
	*/
	@RequestMapping(value="/youtube", method=RequestMethod.GET)
	public @ResponseBody String getUserList(@RequestParam String videoId, HttpServletRequest request,HttpServletResponse response) throws Exception
	{
            String txt="";
            try{
		HttpURLConnection con = (HttpURLConnection) new URL("https://m.youtube.com/watch?v="+videoId).openConnection();
                con.setRequestProperty("User-Agent","Mozilla/5.0 (iPhone; CPU iPhone OS 8_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12A4345d Safari/600.1.4");

		InputStream in=con.getInputStream();
                String t;
		int o=0;
    		byte b[]=new byte[200];
		while((o=in.read(b, 0, b.length))>0)
		    txt+=new String(b,0,o);
//                while((t = br.readLine()) != null) txt+=t;
//                br.close();
		in.close();
                con.disconnect();
		
		
		txt=txt.substring(txt.indexOf("url_encoded_fmt_stream_map"));
		txt=txt.substring(txt.indexOf("url=http")+4);
		
		txt=txt.substring(0,txt.indexOf("url=")+4);
		txt=txt.substring(0,txt.indexOf("\\\\"));
//		txt=URLDecoder.decode(txt, "UTF-8");
		
		
//		url.readText(Credential.BASE_URL+"/videodl/insert?videoId="+videoId+"&url="+txt);
		
//		response.setContentType("application/mp4");
//		response.setHeader( "Content-Disposition", "attachment;filename=\""+videoId+".mp4\"");
		txt=URLDecoder.decode(txt, "UTF-8");
//		response.sendRedirect(txt);
//		response.setHeader("Access-Control-Allow-Origin", "*");
            }catch(Exception e){
                return e.getLocalizedMessage()+">"+txt;
            }
                return txt;
	}
	
		
	
}
