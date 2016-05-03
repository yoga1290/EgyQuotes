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
import videoquotes.Credential;
import videoquotes.errorMessages.ChannelNotFound;
import videoquotes.errorMessages.Unauthorized;

import videoquotes.repository.Channel;
import videoquotes.repository.ChannelRepository;
import videoquotes.repository.FBUser;
import videoquotes.repository.FBUserRepository;
import videoquotes.util.YoutubeUtil;


@Controller
@RequestMapping("/channel")
public class ChannelSvc
{
	@Autowired
	private ChannelRepository channels;
	@Autowired
	private FBUserRepository users;
	
	@RequestMapping(value="/insert", method=RequestMethod.GET)
	public @ResponseBody Channel insert(@RequestParam String id,@RequestParam String access_token,HttpServletResponse response) throws Exception
	{
		FBUser user=null;
		try{
			user=users.findByAccessToken(access_token);
			if(!user.getId().equals(Credential.ADMIN_USER_ID))
				throw new Unauthorized();
			else
			    return channels.save(new Channel(id, YoutubeUtil.getChannelName(id)));
		}catch(Exception ew){
			throw new Unauthorized();
		}
	}
	
	@RequestMapping(value="/list",produces="application/json", method=RequestMethod.GET)
	public @ResponseBody Collection<Channel> list(@RequestParam int offset,@RequestParam int limit,HttpServletResponse response) throws Exception
	{
		return channels.findAll(offset, limit);
	}
	
	@RequestMapping(value="/isTrusted", method=RequestMethod.GET)
	public @ResponseBody boolean isTrusted(@RequestParam String channelId){
	    try{
		    Channel chl=channels.findOne(channelId);
		    if(chl!=null)
			return true;
	    }catch(Exception e){
		throw new ChannelNotFound();
	    }
	    return false;
	}
	
	@RequestMapping(value="/find", method=RequestMethod.GET)
	public @ResponseBody Collection<Channel> findByName(@RequestParam String name)
	{
	    return channels.find(name,"name",true,0,100);
	}
		
}
