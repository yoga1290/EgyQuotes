package egyquotes.controller;

import java.io.IOException;
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
import javax.servlet.http.HttpServletResponse;

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

import com.fasterxml.jackson.databind.util.JSONPObject;
import com.google.gson.JsonObject;

import egyquotes.repository.FBUser;
import egyquotes.repository.FBUserRepository;


@Controller
public class UserSvc
{
	@Autowired
	private FBUserRepository users;
	
	@RequestMapping(value="/users", method=RequestMethod.GET)
	public @ResponseBody Collection<FBUser> getUserList(@RequestParam int offset,@RequestParam int limit){
		return (List<FBUser>)(users.findAll());
	}
	@RequestMapping(value="/user/echo", method=RequestMethod.POST)
	public @ResponseBody FBUser getUserList(@RequestBody FBUser u){
		return u;
	}
//	https://www.facebook.com/dialog/oauth?client_id=1048399691842414&redirect_uri=https://egyquotes.appspot.com/FBUser/&scope=email,manage_pages&state=SOME_ARBITRARY_BUT_UNIQUE_STRING
		@RequestMapping(value="/FBUser/", method=RequestMethod.GET)
		public @ResponseBody void insert(@RequestParam String code,@RequestParam String state,HttpServletResponse response) throws IOException//@RequestParam String videoId)
		{
			String access_token=readText("https://graph.facebook.com/oauth/access_token?client_id=1048399691842414&redirect_uri=https://egyquotes.appspot.com/FBUser/&client_secret=***&code="+code);
			access_token=access_token.substring(access_token.indexOf('=')+1);
			String facebookId=readText("https://graph.facebook.com/me?access_token="+access_token);
			facebookId=facebookId.substring(facebookId.indexOf("\"id\":\"")+6,facebookId.indexOf("\","));
			
			if(!users.exists(facebookId))
				users.save(new FBUser(facebookId));
			//TODO: redirect
			response.sendRedirect("https://egyquotes.appspot.com/"+state+".html?access_token="+access_token);
//			return access_token;
		}
		private String readText(String uri)
		{
			String res="";
			try{
				URL url = new URL(uri);
				HttpURLConnection connection = (HttpURLConnection) url.openConnection();
				InputStream in=connection.getInputStream();
				byte buff[]=new byte[200];
				int ch;
				while((ch=in.read(buff))!=-1)
						res+=new String(buff,0,ch);
				in.close();
				
				return res;
			}catch(Exception e){return  e.getLocalizedMessage();}
		}
}
