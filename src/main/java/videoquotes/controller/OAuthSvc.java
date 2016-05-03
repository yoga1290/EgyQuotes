package videoquotes.controller;

import videoquotes.repository.FBUser;
import videoquotes.*;
import videoquotes.repository.*;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import videoquotes.repository.UserRepository;
import videoquotes.util.*;

@Controller
public class OAuthSvc
{
	@Autowired
	private FBUserRepository users;

	@Autowired
	private UserRepository googleUsers;
        
        @Autowired
	private URLUtil util;



	//	https://www.facebook.com/dialog/oauth?client_id=&redirect_uri=&state=/index
	@RequestMapping(value=Credential.OAuth.facebook.REDIRECT_URI, method=RequestMethod.GET)
	public @ResponseBody void facebook(@RequestParam String code,@RequestParam String state,HttpServletResponse response) throws IOException//@RequestParam String videoId)
	{
	    String access_token=FacebookUtil.getAccessToken(code);
	    String facebookId=FacebookUtil.getFacebookId(access_token);

	    if(!users.exists(facebookId))
		    users.save(new FBUser(facebookId));
	    
	    response.sendRedirect(Credential.BASE_URL+state+".html#access_token="+access_token);
	}

	// https://accounts.google.com/o/oauth2/auth?redirect_uri=/&response_type=code&client_id=&approval_prompt=auto&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&access_type=offline
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
}
