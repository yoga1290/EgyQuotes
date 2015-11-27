/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package videoquotes.util;

import com.google.appengine.api.datastore.EntityNotFoundException;
import java.util.Arrays;
import java.util.Date;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestParam;
import videoquotes.errorMessages.AuthorNotFound;
import videoquotes.errorMessages.FacebookSharingFailed;
import videoquotes.errorMessages.UpdateQuoteFailed;
import videoquotes.errorMessages.UpdateUserFailed;
import videoquotes.errorMessages.UpdateVideoFailed;
import videoquotes.errorMessages.VideoIntervalIntersect;
import videoquotes.repository.Channel;
import videoquotes.repository.ChannelRepository;
import videoquotes.repository.FBUser;
import videoquotes.repository.FBUserRepository;
import videoquotes.repository.Person;
import videoquotes.repository.PersonRepository;
import videoquotes.repository.Quote;
import videoquotes.repository.QuoteAnalytics;
import videoquotes.repository.QuoteAnalyticsRepository;
import videoquotes.repository.QuoteOwner;
import videoquotes.repository.QuoteOwnerRepository;
import videoquotes.repository.QuoteRepository;
import videoquotes.repository.Video;
import videoquotes.repository.VideoRepository;

/**
 *
 * @author yoga1290
 */
public class QuoteSvc {
    
    @Autowired
    private FBUserRepository users;
    @Autowired
    private QuoteRepository Quotes;
    @Autowired
    private PersonRepository People;
    @Autowired
    private VideoRepository Videos;
    @Autowired
    private ChannelRepository Channels;
    @Autowired
    private QuoteOwnerRepository QuoteOwners;
    @Autowired
    private YoutubeUtil youtube;
    @Autowired
    private FacebookUtil facebook;
    
    
    
    
    
    
    public void repost(Quote quote) {
	
//		Check Channel:
		
		Channel channel=null;
		String channelId="";
		channelId=youtube.getChannelId(quote.getVideoId());
		//Check Person:
		String quotes[];
		String nQuotes[];
		Person person=new PersonRepository().findOne(quote.getPersonId());
			//new Person(quote.getPersonId());
//		try{
//////		    person=People.save(new Person(quote.getPersonId()));
//			person=new Person( (String)
//				    People.findById(quote.getPersonId()).getProperty("name")
//				);
//		}catch(EntityNotFoundException ew){
//		    throw new RuntimeException(ew.getMessage()+"<<< >"+quote.getPersonId());
//////		    throw new RuntimeException(quote.getPersonId());
//////			throw new AuthorNotFound();
//		}
		
		//POST to Facebook & save Quote:
		Quote res,nQuote=new Quote(quote.getVideoId(),quote.getPersonId(),quote.getQuote(),quote.getStart(),quote.getEnd());
		String postId="";
		try{
		    postId=new FacebookUtil().postQuote(quote,quote.getPersonId(),person.getName(),channelId);
		    if(postId.indexOf(":")>-1)
			throw new FacebookSharingFailed();
		}catch(Exception ew){
			throw new FacebookSharingFailed();
		}
		

		
		
		//update Video:
		//TODO: uncommet lines below
		int s=new Double(quote.getStart()).intValue(),e=new Double(quote.getEnd()).intValue();
		try{
			Video video=new VideoRepository().findOne(quote.getVideoId());
			int segStart[]=video.getStart();
			int segEnd[]=video.getEnd();
			String quoteId[]=video.getQuoteId();
			if(segStart!=null)
			{
				for(int i=0;i<quoteId.length;i++)
					if(quoteId[i].equals(quote.getKey()))
					   quoteId[i]=postId;
			}
			video.setStart(segStart);
			video.setEnd(segEnd);
			video.setQuoteId(quoteId);
			video=new VideoRepository().update(video);
		}catch(Exception we){
		    throw new UpdateVideoFailed();
		}
		
		
		//update User:
		try{
			QuoteOwner owner=new QuoteOwnerRepository().findByQuoteId(quote.getKey()).iterator().next();
//			owner.setQuoteId(res.getKey());
			new QuoteOwnerRepository().save(new QuoteOwner(postId, owner.getUserId()));
		}catch(Exception ew){
			throw new UpdateUserFailed();
		}
		
//		try{
			QuoteAnalytics analytics=new QuoteAnalytics(postId, 0L,0L,new Date().getTime());
			new QuoteAnalyticsRepository().save(analytics);
			new QuoteAnalyticsRepository().delete(
				new QuoteAnalyticsRepository().findOne(quote.getKey())
			);
			nQuote.setKey(postId);
			res=nQuote=new QuoteRepository().save(nQuote);
			
			new QuoteRepository().delete(quote);
		
    }
}
