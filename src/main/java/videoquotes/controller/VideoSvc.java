package videoquotes.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import videoquotes.repository.Video;
import videoquotes.repository.VideoRepository;
import javax.servlet.http.HttpServletResponse;
import org.springframework.web.bind.annotation.PathVariable;
import java.io.IOException;
import java.io.*;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;


@Controller
public class VideoSvc
{
	@Autowired
	private VideoRepository Videos;
	
	@RequestMapping(value="/video",produces="application/json", method=RequestMethod.GET)
	public @ResponseBody Video get(@RequestParam String id){
		return Videos.findOne(id);
	}

	@RequestMapping(value="/video/strm/{id}", method=RequestMethod.GET)
	public @ResponseBody String get(@PathVariable String id,HttpServletResponse response) throws Exception
	{
		String d=readText("https://youtube.com/watch?v="+id);
		// d=d.substring(d.indexOf("url_encoded_fmt_stream_map"),d.length());
		// d=d.substring(d.indexOf("url=http")+4,d.length());
		// d=d.substring(0,d.indexOf("\\\\"));
		// d=java.net.URLDecoder.decode(d, "UTF-8");
		return d;
	}


	private String readText(String uri)
	{
		String res="";
		try{
			URL url = new URL(uri);
			HttpURLConnection connection = (HttpURLConnection) url.openConnection();
			connection.setRequestProperty("User-Agent","Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.3 (KHTML, like Gecko) Version/8.0 Mobile/12A4345d Safari/600.1.4");
			InputStream in=connection.getInputStream();
			byte buff[]=new byte[200];
			int ch;
			while((ch=in.read(buff))!=-1)
					res+=new String(buff,0,ch);
			in.close();
			connection.disconnect();
			
			return res;
		}catch(Exception e){return  e.getLocalizedMessage();}
	}

}
