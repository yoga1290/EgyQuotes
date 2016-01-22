package videoquotes.controller;

import java.util.Collection;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import java.util.Date;

import videoquotes.errorMessages.AccessExpired;
import videoquotes.errorMessages.AuthorNotFound;
import videoquotes.errorMessages.ChannelNotFound;
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
import videoquotes.controller.requestBody.SearchObj;
import videoquotes.errorMessages.Unauthorized;
import videoquotes.errorMessages.UpdateQuoteFailed;
import videoquotes.errorMessages.UpdateUserFailed;
import videoquotes.repository.FacebookPostQueue;
import videoquotes.repository.FacebookPostQueueRepository;
import videoquotes.util.VideoUtil;
import videoquotes.util.YoutubeUtil;


@Controller
@RequestMapping(value="/Quote",produces="application/json;charset=UTF-8")
public class QuoteSvc
{
	@Autowired
	private QuoteRepository Quotes;
	@Autowired
	private PersonRepository People;
	@Autowired
	private VideoUtil VideoUtil;
	@Autowired
	private ChannelRepository Channels;
	@Autowired
	private FBUserRepository users;
	@Autowired
	private QuoteOwnerRepository QuoteOwners;
        @Autowired
        private YoutubeUtil youtube;
	@Autowired
	private FacebookPostQueueRepository postQueue;

	@RequestMapping(value="/count", method=RequestMethod.GET)
	public @ResponseBody int getCount(){
		return Quotes.count();
	}
	@RequestMapping(value="/list", method=RequestMethod.GET)
	public @ResponseBody Collection<Quote> getQuoteList(@RequestParam int offset,@RequestParam int limit){
                if(limit>200)   return null;
		return Quotes.findAll(offset,limit);
	}
	@RequestMapping( method=RequestMethod.GET)
	public @ResponseBody Quote findOne(@RequestParam Long id)
	{
		return Quotes.findOne(id);
	}
	
	
	
/**
     * @param quote
     * @param response
 * @return
 * @throws Exception 
 */
	@RequestMapping( method=RequestMethod.POST)
	public @ResponseBody String insert(@RequestBody videoquotes.controller.requestBody.Quote quote,
									HttpServletResponse response) 
			throws Exception
	{	
		FBUser user=null;
		try{
			user=users.findByAccessToken(quote.getAccess_token());
		}catch(Exception ew){
		    throw new AccessExpired();
		}
		
//		Check Channel:		
		Channel channel=null;
		String channelId="";
		channelId=youtube.getChannelId(quote.getVideoId());
		if(channelId!="")
		    try{
			channel=Channels.findOne(channelId);
		    }catch(Exception e){ throw new ChannelNotFound();}
		else
		    throw new ChannelNotFound();
		
		
		
		//Check Person:
		Person person=null;
		try{
			person=People.findOne(quote.getPersonId());
		}catch(Exception ew){
		    throw new AuthorNotFound();
		}
		
		//POST to Facebook & save Quote:
		Quote res,nQuote=new Quote(quote.getVideoId(),quote.getPersonId(),quote.getQuote(),quote.getStart(),quote.getEnd());
		String postId="",q="";
		try{
			res=nQuote=Quotes.save(nQuote);
			postQueue.save(new FacebookPostQueue(nQuote.getKey(), new Date().getTime()));
		}catch(Exception ew){
			throw new UpdateQuoteFailed();
		}

		
		VideoUtil.insertQuote(nQuote);
		
		
		//update User:
		try{
			QuoteOwners.save(new QuoteOwner(res.getKey(),user.getId()));
		}catch(Exception ew){
			throw new UpdateUserFailed();
		}
		
		
		return res.getKey()+"";
	}
	@RequestMapping(value="/edit", method=RequestMethod.POST)
	public @ResponseBody Quote edit(@RequestParam Long quoteId,
		@RequestBody videoquotes.controller.requestBody.Quote quote,
									HttpServletResponse response) 
			throws Exception
	{	
		FBUser user=null;
		try{
			user=users.findByAccessToken(quote.getAccess_token());
		}catch(Exception ew){
		    throw new AccessExpired();
		}
		if(  !user.getId().equals(
			QuoteOwners.findByQuoteId(quoteId).iterator().next().getUserId() ) )
		    throw new Unauthorized();
		
//		Check Channel:		
		Channel channel=null;
		String channelId="";
		channelId=youtube.getChannelId(quote.getVideoId());
		if(channelId!="")
		    try{
			channel=Channels.findOne(channelId);
		    }catch(Exception e){ throw new ChannelNotFound();}
		else
		    throw new ChannelNotFound();
		
		
		
		//Check Person:
		Person person=null;
		try{
			person=People.findOne(quote.getPersonId());
		}catch(Exception ew){
		    throw new AuthorNotFound();
		}
		
		//POST to Facebook & save Quote:
		Quote res=new Quote(quote.getVideoId(),quote.getPersonId(),quote.getQuote(),quote.getStart(),quote.getEnd());
		String postId="",q="";
		try{
			res= Quotes.update(res);
//			postQueue.save(new FacebookPostQueue(nQuote.getKey(), new Date().getTime()));
		}catch(Exception ew){
			throw new UpdateQuoteFailed();
		}
		return res;
	}
	
	@RequestMapping(value="/grid",produces="application/json;charset=UTF-8", method=RequestMethod.POST)
	public @ResponseBody List<Quote> grid(
			HttpServletResponse									response,
			@RequestBody SearchObj gridObj) throws Exception
		{
		    return Quotes.findByTags(gridObj.getTags(),gridObj.getPersonIds(),gridObj.getOffset(),gridObj.getLimit());
		}
}
