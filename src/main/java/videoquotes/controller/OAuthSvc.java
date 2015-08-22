package videoquotes.controller;

import videoquotes.*;
import videoquotes.repository.*;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.net.HttpURLConnection;
import java.net.Socket;
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

import videoquotes.repository.User;
import videoquotes.repository.UserRepository;
import videoquotes.util.*;

@Controller
public class OAuthSvc
{
	@Autowired
	private FBUserRepository facebookUsers;

	@Autowired
	private GUserRepository googleUsers;
        
        @Autowired
	private URLUtil util;



	//	https://www.facebook.com/dialog/oauth?client_id=1048399691842414&redirect_uri=https://videoquotes.appspot.com/OAuth/facebook/&scope=email,manage_pages&state=/index
	@RequestMapping(value=Credential.OAuth.facebook.REDIRECT_URI, method=RequestMethod.GET)
	public @ResponseBody void facebook(@RequestParam String code,@RequestParam String state,HttpServletResponse response) throws IOException//@RequestParam String videoId)
	{
		String access_token=util.readText("https://graph.facebook.com/oauth/access_token?client_id="+Credential.facebook.APP_ID+"&redirect_uri="+Credential.OAuth.facebook.REDIRECT_URL+"&client_secret="+Credential.OAuth.facebook.APP_SECRET+"&code="+code);
		access_token=access_token.substring(access_token.indexOf('=')+1);
		String facebookId=util.readText("https://graph.facebook.com/me?access_token="+access_token);
		facebookId=facebookId.substring(facebookId.indexOf("\"id\":\"")+6,facebookId.indexOf("\","));
		
		if(!facebookUsers.exists(facebookId))
			facebookUsers.save(new FBUser(facebookId));
		//TODO: redirect
		response.sendRedirect(Credential.BASE_URL+state+".html?access_token="+access_token);
	}

	// https://accounts.google.com/o/oauth2/auth?redirect_uri=https://beta.videoquotes.appspot.com/OAuth/google/&response_type=code&client_id=730812089934-7dprqgn1ggh6gkvhp7n63d1qktbmo89b.apps.googleusercontent.com&approval_prompt=auto&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&access_type=offline
	@RequestMapping(value=Credential.OAuth.google.REDIRECT_URI, method=RequestMethod.GET)
	public @ResponseBody String google(@RequestParam String code)
	{
		String res="";
		try {
			
            URL url = new URL("https://accounts.google.com/o/oauth2/token");
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setDoOutput(true);
            connection.setRequestMethod("POST");

            OutputStreamWriter writer = new OutputStreamWriter(connection.getOutputStream());
            writer.write(
            					"code="+code+"&client_id="+Credential.OAuth.google.CLIENT_ID+"&state=&client_secret="+Credential.OAuth.google.CLIENT_SECRET+"&redirect_uri="+Credential.OAuth.google.REDIRECT_URL+"&grant_type=authorization_code"
            				);
            writer.close();
    
            if (connection.getResponseCode() == HttpURLConnection.HTTP_OK) 
            {
                InputStream in=connection.getInputStream();
                int ch;
                while((ch=in.read())!=-1)
                		res+=(char)ch;
            } else {
            		InputStream in=connection.getInputStream();
	                int ch;
	                while((ch=in.read())!=-1)
	                		res+=(char)ch;
            }
            
            
            String access_token=res.substring(res.indexOf("\"access_token\" : \"")+18);
            access_token=res.substring(0,res.indexOf("\""));

			String refresh_token=res.substring(res.indexOf("\"refresh_token\" : \"")+18);
            refresh_token=res.substring(0,res.indexOf("\""));


            res="";
            url = new URL("https://www.googleapis.com/oauth2/v2/userinfo?access_token="+access_token);
	        connection = (HttpURLConnection) url.openConnection();
	        connection.setDoOutput(true);
	        connection.setRequestMethod("GET");
	        
	        InputStream in=connection.getInputStream();
	        byte buff[]=new byte[in.available()];
            int ch;
            while((ch=in.read(buff))!=-1)
            		res+=new String(buff,0,ch);

        } catch (Exception e) {
            res="Error:"+res+"<br>"+e.getMessage();
        }




		return res;
	}

	
	
//	@RequestMapping(value="/users", method=RequestMethod.GET)
//	public @ResponseBody Collection<FBUser> getUserList(@RequestParam int offset,@RequestParam int limit){
//		return (List<FBUser>)(users.findAll());
//	}
//	
//	@RequestMapping(value="/user/{id}", method=RequestMethod.GET)
//	public @ResponseBody User getUserList(
//								@PathVariable long id,
//								@RequestParam String access_token,
//								HttpServletResponse response)
//								throws Exception
//	{
//		try{
//			User user=users.findByFacebookAccessToken(access_token);
//			if(!user.getId().equals(id))
//				return null;
//		}catch(Exception ew){
//			response.sendError(403, "FORBIDDEN!! UserId must match with the access token owner" );
//			return null;
//		}
//		
//		
//		return users.findOne(id);
//	}
//	
//	
//	
////	https://www.facebook.com/dialog/oauth?client_id=1048399691842414&redirect_uri=https://videoquotes.appspot.com/OAuth/facebook/&scope=email,manage_pages&state=SOME_ARBITRARY_BUT_UNIQUE_STRING
//		@RequestMapping(value="/OAuth/facebook/", method=RequestMethod.GET)
//		public @ResponseBody void insert(@RequestParam String code,@RequestParam String state,HttpServletResponse response) throws IOException//@RequestParam String videoId)
//		{
//			String access_token=readText("https://graph.facebook.com/oauth/access_token?client_id=1048399691842414&redirect_uri=https://videoquotes.appspot.com/OAuth/facebook/&client_secret=49dddc949088ee58f23bc174c9baa20b&code="+code);
//			access_token=access_token.substring(access_token.indexOf('=')+1);
//			String facebookId=readText("https://graph.facebook.com/me?access_token="+access_token);
//			facebookId=facebookId.substring(facebookId.indexOf("\"id\":\"")+6,facebookId.indexOf("\","));
//			
//			//TODO: 
////			if(!users.exists(facebookId))
////				users.save(new User(facebookId));
//			//TODO: redirect
//			response.sendRedirect("https://videoquotes.appspot.com/"+state+".html?access_token="+access_token);
////			return access_token;
//		}
//		
//		
//		
//		
//		
//		@RequestMapping(value="/User/DataTable",produces="application/json", method=RequestMethod.POST)
//		public @ResponseBody dataTableResponse datatable(
//				HttpServletResponse									response,
//				@RequestParam(value="access_token")					String	access_token,
//				
//				@RequestParam(value="draw") 							int 		draw,
//				@RequestParam(value="start") 						int 		start,
//				@RequestParam(value="length") 						int 		length,
//				@RequestParam(value="search[value]") 				String 	search,
//				//custom; see 
//				@RequestParam(value="order")			 				String  	orderDir,
//				@RequestParam(value="colName") 						String  	colName
//			) throws Exception
//			{
//			
//			User user=null;
//			try{
//				user=users.findByFacebookAccessToken(access_token);
//				if(!user.getFacebook().equals(Credential.ADMIN_USER_ID))
//					return null;
//			}catch(Exception ew){
//				response.sendError(404, ew.getLocalizedMessage() );
//				return null;
//			}
//			
//			
//				try{
//					Collection data=users.find(search,colName,orderDir.equals("asc"),start, length);
//					int count=users.count();
//					return new dataTableResponse(draw,count,count,data);
//				}catch(Exception e){
//					response.sendError(500, e.getLocalizedMessage()+"");
//					return null;
//				}
//			}
}
