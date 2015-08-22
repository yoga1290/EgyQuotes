package videoquotes.controller;

import videoquotes.*;
import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Serializable;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.Arrays;
import java.util.Collection;
import java.util.Comparator;
import java.util.LinkedList;
import java.util.List;

import javax.jdo.annotations.Persistent;
import javax.net.ssl.HttpsURLConnection;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import com.google.api.client.http.HttpResponse;

import videoquotes.controller.dataTableResponse;
import videoquotes.repository.Channel;
import videoquotes.repository.ChannelRepository;
import videoquotes.repository.FBUser;
import videoquotes.repository.FBUserRepository;
import videoquotes.repository.Person;
import videoquotes.repository.PersonRepository;
import videoquotes.repository.Quote;
import videoquotes.repository.QuoteOwner;
import videoquotes.repository.QuoteOwnerRepository;
import videoquotes.repository.QuoteRepository;
import videoquotes.repository.Video;
import videoquotes.repository.VideoRepository;
import videoquotes.repository.pageAC;
import videoquotes.repository.pageACRepository;
import videoquotes.util.YoutubeUtil;


@Controller
public class QuoteSvc
{
	@Autowired
	private QuoteRepository Quotes;
	@Autowired
	private PersonRepository People;
	@Autowired
	private VideoRepository Videos;
	@Autowired
	private ChannelRepository Channels;
	@Autowired
	private FBUserRepository users;
	@Autowired
	private pageACRepository pageACRepo;
	@Autowired
	private QuoteOwnerRepository QuoteOwners;
	
        @Autowired
        private YoutubeUtil youtube;
        
        
	@RequestMapping(value="/videoquotes.json",produces="application/json;charset=UTF-8", method=RequestMethod.GET)
	public @ResponseBody Collection<Quote> getQuoteList(HttpServletResponse response){
		response.setContentType("application/force-download");
		return Quotes.findAll(0,1000);
	}
	@RequestMapping(value="/videoquotes.csv", method=RequestMethod.GET)
	public @ResponseBody String csv(HttpServletResponse response){
		response.setContentType("text/plain");
//		response.setContentType("application/force-download");
		Collection<Quote> quotes=Quotes.findAll(0,100);
		String txt="Quote, Author, source, facebook \n";
		Quote ar[]=new Quote[quotes.size()];
		ar=quotes.toArray(ar);

		for (int i = 0; i < ar.length; i++)
			txt+=""+ar[i].getQuote()+","+ar[i].getPersonId()+",http://youtu.be/"+ar[i].getVideoId()+"?t="+ar[i].getStart()+"s,https://www.facebook.com/EgyQuotes/posts/"+ar[i].getKey()+"\n";
			
		
		return txt;
	}

	@RequestMapping(value="/Quotes", method=RequestMethod.GET)
	public @ResponseBody Collection<Quote> getQuoteList(@RequestParam int offset,@RequestParam int limit){
		return Quotes.findAll(offset,limit);
	}
	
	@RequestMapping(value="/Quote",produces="application/json;charset=UTF-8", method=RequestMethod.GET)
	public @ResponseBody Quote findOne(@RequestParam long id)
	{
		return Quotes.findOne(id);
	}
	
	
	
/**
 * 
 * @param oQuote
 * @param access_token
 * @return
 * @throws Exception 
 */
	@RequestMapping(value="/Quote", method=RequestMethod.POST)
	public @ResponseBody String insert(
									@RequestParam String videoId,
									@RequestParam String personId,
									@RequestParam String quote,
									@RequestParam String start,
									@RequestParam String end,
									@RequestParam String access_token,
									HttpServletResponse response) 
			throws Exception
	{		
		
		FBUser user=null;
		try{
			user=users.findByAccessToken(access_token);
		}catch(Exception ew){
	//		response.sendError(404, "User not found");
			try{
				response.sendError(404, ew.getLocalizedMessage()+"; User not found");
			}catch(Exception eww){}
			return ew.getLocalizedMessage()+" ac="+access_token;
		}
		
//		Check Channel:
		
		Channel channel=null;
		String channelId="";
		try{
//			channelId=readText("http://jojo90.net84.net/YT.php?videoId="+videoId).split("\n")[0];
                        channelId=youtube.getChannelId(videoId);
                        if(channelId!="")
        			channel=Channels.findOne(channelId);
                        else
                            throw new Exception();
		}catch(Exception ew){
		//	response.sendError(404, "Untrusted Channel");
			try{
				response.sendError(404, "Untrusted Channel "+channelId);
				return "ChannelId:"+channelId;
			}catch(Exception eww){}
			return ew.getLocalizedMessage();
		}
		//Update Channel:
		///////////////////
//		try
//		{
//			String videos[]=channel.getVideos();
//			String nVideo[]=Arrays.copyOf(videos, videos.length+1);
//			nVideo[nVideo.length-1]=videoId;
//			Channels.update(channel);
//		}catch(Exception ew){
//			try{
//				response.sendError(404, "cant update Channel:"+channelId);
//			}catch(Exception eww){}
//			return ew.getLocalizedMessage();
//		}
		///////////////
		
		
		
		//Check Person:
		long quotes[],nQuotes[];
		Person person=null;
		try{
			person=People.findOne(personId);
		}catch(Exception ew){
//			
			try{
				response.sendError(404, ew.getLocalizedMessage()+"; Author not found");
			}catch(Exception eww){}
			return ew.getLocalizedMessage()+"; Author not found";
		}
		
		//POST to Facebook & save Quote:
		Quote res,nQuote=new Quote(videoId,personId,quote,start,end);
		String postId="",q="";
		try{
			q="access_token="+pageACRepo.findOne(Credential.facebook.PAGE_ID).getAc()
				+"&message="+URLEncoder.encode("\u201D"+quote+"\u201C"+"\n\n "+"\u2015"+" #"+personId, "UTF-8")
				+"&name="+URLEncoder.encode(person.getName()+":", "UTF-8")
				+"&description="+URLEncoder.encode("\u201D"+quote+"\u201C", "UTF-8")
				+"&link="+URLEncoder.encode("https://videoquotes.appspot.com/#s="+new Double(start).intValue()+"v="+videoId, "UTF-8")
				;
			postId="https://graph.facebook.com/"+Credential.facebook.PAGE_ID+"/feed";
			postId=sendPost(postId,q);
			postId=postId.substring(postId.indexOf('_')+1,postId.lastIndexOf('"'));
			nQuote.setKey(new Long(postId));

			// response.sendError(404, postId+"> cant post >"+q.substring(q.indexOf('&')) );
			// return null;
		}catch(Exception ew){
			try{
				response.sendError(404, ew.getLocalizedMessage()+"; cant post ");
			}catch(Exception eww){}
		}
		try{
			res=Quotes.save(nQuote);
		}catch(Exception ew){
			try{
				response.sendError(404, ew.getLocalizedMessage()+"; cant save quote");
			}catch(Exception eww){}
			return ew.getLocalizedMessage()+"; cant save quote";
		}	
				
//			response.getWriter().println("Person found..");
		/////////////////
//		try{
//			quotes=person.getQuotes();
//			nQuotes=Arrays.copyOf(quotes, quotes.length+1);
//			nQuotes[nQuotes.length-1]=res.getKey();
//		}catch(Exception ew){
//			try{
//				nQuotes=new long[]{res.getKey()};
//			}catch(Exception e){
//				try{
//					response.sendError(404, e.getLocalizedMessage()+";cant update person "+res.getKey());
//				}catch(Exception eww){}				
//			}
//			return ew.getLocalizedMessage();
//		}
//		
//		try{
//			//TODO:
//			person.setQuotes(nQuotes);
//			person=People.update(person);
//		}catch(Exception e){
//			try{
//				response.sendError(404, e.getLocalizedMessage()+";cant update entity");
//			}catch(Exception eww){}
//		}
		///////////////////

		
		
		//update Video:
		
		int s=new Double(start).intValue(),e=new Double(end).intValue();
		try{
//			Video.Segment nSegments[];
			Video video=Videos.findOne(videoId);
			
			
//			Video.Segment segments[]=video.getSegments();
			int segStart[]=video.getStart();
			int segEnd[]=video.getEnd();
			long quoteId[]=video.getQuoteId();
			if(segStart==null)
			{
				segStart=new int[]{s};
				segEnd=new int[]{e};
				quoteId=new long[]{new Long(postId)};
//				nSegments=new Video.Segment[]{new Video.Segment(	new Long(postId),s,e)};
			}
			else
			{
				for(int i=0;i<segStart.length;i++)
					if(
						(s<=segStart[i] && segStart[i]<=e)
						||
						(s<=segEnd[i] && segEnd[i]<=e)
						||
						(segStart[i]<=s && s<=segEnd[i])
						||
						(segStart[i]<=e && e<=segEnd[i])
						)
					{
						response.sendError(404, "Interval intersect!");
						return "Interval intersect!";
					}
				
				segStart=Arrays.copyOf(segStart, segStart.length+1);
				segStart[segStart.length-1]=s;
				segEnd=Arrays.copyOf(segEnd, segEnd.length+1);
				segEnd[segEnd.length-1]=e;
				quoteId=Arrays.copyOf(quoteId, quoteId.length+1);
				quoteId[quoteId.length-1]=new Long(postId);
				
			}
			video.setStart(segStart);
			video.setEnd(segEnd);
			video.setQuoteId(quoteId);
//			video.setSegments(nSegments);
			video=Videos.update(video);
		}catch(Exception we){
			try
			{
				int segStart[]=new int[]{s};
				int segEnd[]=new int[]{e};
				long quoteId[]=new long[]{new Long(postId)};
				Videos.save(new Video(	videoId,quoteId,segStart,segEnd) );
//				Videos.save(new Video(	videoId,new Video.Segment[]{new Video.Segment(	new Long(postId),
//						new Double(start).intValue(),new Double(end).intValue())})
//				);
//				return "Video saved!! OK?";
			}catch(Exception eww){
				try{
					response.sendError(404, eww.getLocalizedMessage()+";cant save video");
					return eww.getLocalizedMessage()+";cant update video";
				}catch(Exception ewww){}
			}
			
			
		}
		
		
		//update User:
		try{
			quotes=user.getQuotes();
			if(quotes==null)
				nQuotes=new long[]{new Long(postId)};
			else
			{
				nQuotes=Arrays.copyOf(quotes, quotes.length+1);
				nQuotes[nQuotes.length-1]=new Long(postId);
			}
			user.setQuotes(nQuotes);
			user=users.update(user);
			
			QuoteOwners.save(new QuoteOwner(postId,user.getId()));
		}catch(Exception ew){
			try{
				response.sendError(404, ew.getLocalizedMessage()+"; cant update user");
			}catch(Exception eww){}
			return ew.getLocalizedMessage();
		}
		
		
		return res.getKey()+"";
	}

	
	
	//https://www.facebook.com/dialog/oauth?client_id=1048399691842414&redirect_uri=https://videoquotes.appspot.com/fb/&scope=email&state=SOME_ARBITRARY_BUT_UNIQUE_STRING
	@RequestMapping(value="/fb/", method=RequestMethod.GET)
	public @ResponseBody String testfb(@RequestParam String code)//@RequestParam String videoId)
	{
		return readText("https://graph.facebook.com/oauth/access_token?client_id="+Credential.facebook.APP_ID+"&redirect_uri=https://videoquotes.appspot.com/fb/&client_secret="+Credential.facebook.APP_SECRET+"&code="+code);
	}
	
	
	
	//check expire date @ https://graph.facebook.com/1547808782170138?access_token=
	
	//https://www.facebook.com/dialog/oauth?client_id=&redirect_uri=https://videoquotes.appspot.com/pageac/callback/&scope=manage_pages&state=SOME_ARBITRARY_BUT_UNIQUE_STRING
	@RequestMapping(value="/pageac/callback/", method=RequestMethod.GET)
	public @ResponseBody String pageac(@RequestParam String code )//@RequestParam String videoId)
	{
		
		String access_token=readText("https://graph.facebook.com/oauth/access_token?client_id="+Credential.facebook.APP_ID+"&redirect_uri=https://videoquotes.appspot.com/pageac/callback/&client_secret="+Credential.facebook.APP_SECRET+"&code="+code);
		access_token=access_token.substring(access_token.indexOf("access_token=")+13,access_token.length());
		

		access_token=readText("https://graph.facebook.com/oauth/access_token?grant_type=fb_exchange_token&fb_exchange_token="+access_token
				+"&client_secret="+Credential.facebook.APP_SECRET+"&client_id="+Credential.facebook.APP_ID);
		access_token=access_token.substring(access_token.indexOf("access_token=")+13,access_token.length());
		
		String pageAccessToken=readText("https://graph.facebook.com/me/accounts?access_token="+access_token);
		pageAccessToken=pageAccessToken.substring(pageAccessToken.indexOf("access_token\":\"")+15);
		pageAccessToken=pageAccessToken.substring(0,pageAccessToken.indexOf("\""));
		
		
		
		
		pageACRepo.save(new pageAC(Credential.facebook.PAGE_ID, pageAccessToken));
		return access_token+"\n<br>\n"+pageAccessToken;
	}
	
	@RequestMapping(value="/pageac/", method=RequestMethod.GET)
	public @ResponseBody void pageACRefresh(HttpServletResponse response) throws Exception//@RequestParam String videoId)
	{
		response.sendRedirect("https://www.facebook.com/dialog/oauth?client_id="+Credential.facebook.APP_ID+"&redirect_uri=https://videoquotes.appspot.com/pageac/callback/&scope=manage_pages,publish_actions&state=SOME_ARBITRARY_BUT_UNIQUE_STRING");
	}
	
	
	@RequestMapping(value="/Quote/DataTable",produces="application/json;charset=UTF-8", method=RequestMethod.POST)
	public @ResponseBody dataTableResponse datatable(
			HttpServletResponse									response,
			
			@RequestParam(value="draw") 							int 		draw,
			@RequestParam(value="start") 						int 		start,
			@RequestParam(value="length") 						int 		length,
			@RequestParam(value="search[value]") 				String 	search,
			//custom; see https://datatables.net/examples/server_side/custom_vars.html
			@RequestParam(value="order")			 				String  	orderDir,
			@RequestParam(value="colName") 						String  	colName
		) throws Exception
		{
			try{
				Collection data=Quotes.find(search,colName,orderDir.equals("asc"),start, length);
				int count=Quotes.count();
				return new dataTableResponse(draw,count,count,data);
			}catch(Exception e){
				response.sendError(500, e.getLocalizedMessage()+"");
				return null;
			}
		}
	@RequestMapping(value="/Quote/DataTable/me",produces="application/json", method=RequestMethod.POST)
	public @ResponseBody dataTableResponse myQuotes(
			HttpServletResponse									response,
			
			@RequestParam(value="access_token")					String 	access_token,
			@RequestParam(value="draw") 							int 		draw,
			@RequestParam(value="start") 						int 		start,
			@RequestParam(value="length") 						int 		length,
			@RequestParam(value="search[value]") 				String 	search,
			//custom; see https://datatables.net/examples/server_side/custom_vars.html
			@RequestParam(value="order")			 				String  	orderDir,
			@RequestParam(value="colName") 						String  	colName
		) throws Exception
		{
			try{
				Collection data=Quotes.find(access_token,search,colName,orderDir.equals("asc"),start, length);
				int count=Quotes.count();
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

	private String sendPost(String url,String data) throws Exception {
		 
		URL obj = new URL(url);
		HttpURLConnection con = (HttpURLConnection) obj.openConnection();
 
		//add reuqest header
		con.setRequestMethod("POST");
 
 
		// Send post request
		con.setDoOutput(true);
		DataOutputStream wr = new DataOutputStream(con.getOutputStream());
		wr.writeBytes(data);
		wr.flush();
		wr.close();
 
		int responseCode = con.getResponseCode();
 
		BufferedReader in = new BufferedReader(
		        new InputStreamReader(con.getInputStream()));
		String inputLine;
		StringBuffer response = new StringBuffer();
 
		while ((inputLine = in.readLine()) != null) {
			response.append(inputLine);
		}
		in.close();
		return response.toString();
	}
}
