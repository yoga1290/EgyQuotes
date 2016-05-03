package videoquotes.controller;

import videoquotes.*;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import videoquotes.repository.pageAC;
import videoquotes.repository.pageACRepository;
import videoquotes.util.URLUtil;


@Controller
@RequestMapping(value="/pageac",method=RequestMethod.GET)
public class PageAccessTokenGeneratorSvc
{
	@Autowired
	private pageACRepository pageACRepo;
	@Autowired
	private URLUtil url;
	
	@RequestMapping(value="/callback/")
	public @ResponseBody String pageac(@RequestParam String code )
	{
		//TODO
		String access_token=url.readText("https://graph.facebook.com/oauth/access_token?client_id="+Credential.facebook.APP_ID+"&redirect_uri="+Credential.BASE_URL+"/pageac/callback/&client_secret="+Credential.facebook.APP_SECRET+"&code="+code);
		access_token=access_token.substring(access_token.indexOf("access_token=")+13,access_token.length());
		

		access_token=url.readText("https://graph.facebook.com/oauth/access_token?grant_type=fb_exchange_token&fb_exchange_token="+access_token
				+"&client_secret="+Credential.facebook.APP_SECRET+"&client_id="+Credential.facebook.APP_ID);
		access_token=access_token.substring(access_token.indexOf("access_token=")+13,access_token.length());
		
		String pageAccessToken=url.readText("https://graph.facebook.com/me/accounts?access_token="+access_token);
		pageAccessToken=pageAccessToken.substring(pageAccessToken.indexOf("access_token\":\"")+15);
		pageAccessToken=pageAccessToken.substring(0,pageAccessToken.indexOf("\""));
		
		pageACRepo.save(new pageAC(Credential.facebook.PAGE_ID, pageAccessToken));
		return "";//access_token+"\n<br>\n"+pageAccessToken;
	}
	
	@RequestMapping(value="/")
	public @ResponseBody void pageACRefresh(HttpServletResponse response) throws Exception//@RequestParam String videoId)
	{
		response.sendRedirect("https://www.facebook.com/dialog/oauth?client_id="+Credential.facebook.APP_ID+"&redirect_uri="+Credential.BASE_URL+"/pageac/callback/&scope=manage_pages,publish_actions,publish_pages&state=SOME_ARBITRARY_BUT_UNIQUE_STRING");
	}
}
