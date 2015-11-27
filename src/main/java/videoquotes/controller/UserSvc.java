package videoquotes.controller;

import videoquotes.*;
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
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.databind.util.JSONPObject;
import com.google.gson.JsonObject;

import videoquotes.repository.FBUser;
import videoquotes.repository.FBUserRepository;
import videoquotes.util.FacebookUtil;


@Controller
public class UserSvc
{
	@Autowired
	private FBUserRepository users;
	
//	@RequestMapping(value="/users", method=RequestMethod.GET)
//	public @ResponseBody Collection<FBUser> getUserList(@RequestParam int offset,@RequestParam int limit){
//		return (List<FBUser>)(users.findAll());
//	}
	
	@RequestMapping(value="/user/{id}", method=RequestMethod.GET)
	public @ResponseBody FBUser getUserList(
								@PathVariable String id,
								@RequestParam String access_token,
								HttpServletResponse response)
								throws Exception
	{
		try{
			FBUser user=users.findByAccessToken(access_token);
			if(!user.getId().equals(id))
				return null;
		}catch(Exception ew){
			response.sendError(403, "FORBIDDEN!! UserId must match with the access token owner" );
			return null;
		}
		
		
		return users.findOne(id);
	}
	
	
	
//	https://www.facebook.com/dialog/oauth?client_id=&redirect_uri=https://videoquotes.appspot.com/FBUser/&scope=email,manage_pages&state=SOME_ARBITRARY_BUT_UNIQUE_STRING
		@RequestMapping(value="/FBUser/", method=RequestMethod.GET)
		public @ResponseBody void insert(@RequestParam String code,@RequestParam String state,HttpServletResponse response) throws IOException//@RequestParam String videoId)
		{
			String access_token=FacebookUtil.getAccessToken(code);
			String facebookId=FacebookUtil.getFacebookId(access_token);
			
			if(!users.exists(facebookId))
				users.save(new FBUser(facebookId));
			//TODO: redirect
			response.sendRedirect(Credential.BASE_URL+state+".html?access_token="+access_token);
//			return access_token;
		}
		
		
		
		
		
		@RequestMapping(value="/FBUser/DataTable",produces="application/json", method=RequestMethod.POST)
		public @ResponseBody dataTableResponse datatable(
				HttpServletResponse									response,
				@RequestParam(value="access_token")					String	access_token,
				
				@RequestParam(value="draw") 							int 		draw,
				@RequestParam(value="start") 						int 		start,
				@RequestParam(value="length") 						int 		length,
				@RequestParam(value="search[value]") 				String 	search,
				//custom; see 
				@RequestParam(value="order")			 				String  	orderDir,
				@RequestParam(value="colName") 						String  	colName
			) throws Exception
			{
			
			FBUser user=null;
			try{
				user=users.findByAccessToken(access_token);
				if(!user.getId().equals(Credential.ADMIN_USER_ID))
					return null;
			}catch(Exception ew){
				response.sendError(404, ew.getLocalizedMessage() );
				return null;
			}
			
			
				try{
					Collection data=users.find(search,colName,orderDir.equals("asc"),start, length);
					int count=users.count();
					return new dataTableResponse(draw,count,count,data);
				}catch(Exception e){
					response.sendError(500, e.getLocalizedMessage()+"");
					return null;
				}
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
