/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package videoquotes.corn;

import java.util.Collection;
import java.util.Iterator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import videoquotes.errorMessages.FacebookSharingFailed;
import videoquotes.repository.Channel;
import videoquotes.repository.FacebookPost;
import videoquotes.repository.FacebookPostQueue;
import videoquotes.repository.FacebookPostQueueRepository;
import videoquotes.repository.FacebookPostRepository;
import videoquotes.repository.Person;
import videoquotes.repository.PersonRepository;
import videoquotes.repository.Quote;
import videoquotes.repository.QuoteRepository;
import videoquotes.util.FacebookUtil;
import videoquotes.util.YoutubeUtil;

/**
 *
 * @author yoga1290
 */
@Controller
public class FacebookPostQueueHandler {
    @Autowired
    private QuoteRepository Quotes;
    @Autowired
    private FacebookPostQueueRepository postQueue;
    @Autowired
    private YoutubeUtil youtube;
    @Autowired
    private FacebookUtil facebook;
    @Autowired
    private PersonRepository People;
    @Autowired
    private FacebookPostRepository posts;
    @RequestMapping(value = "/cron/fbqueue")
    private void facebookPostQueue() {
	Collection<FacebookPostQueue> queuedQuotes= postQueue.findByTimeOrder(0, 1);
	Iterator<FacebookPostQueue> queuedQuotesIt= queuedQuotes.iterator();
	while(queuedQuotesIt.hasNext())
	{
	    FacebookPostQueue cur=queuedQuotesIt.next();
	    Quote quoteToBePosted=Quotes.findOne(cur.getQuoteId());
	    
	    Channel channel=null;
		String channelId="";
		channelId=youtube.getChannelId(quoteToBePosted.getVideoId());
		//Check Person:
		String quotes[];
		String nQuotes[];
		Person person=People.findOne(quoteToBePosted.getPersonId());
		
		//POST to Facebook & save Quote:
		String fbid=
			facebook.postQuote(quoteToBePosted,quoteToBePosted.getPersonId(),person.getName(),channelId);
		    if(fbid.indexOf(":")>-1)
			throw new FacebookSharingFailed();
		    
		    posts.save(new FacebookPost(fbid,quoteToBePosted.getKey()));
		    postQueue.delete(cur);
	}
    }
}
