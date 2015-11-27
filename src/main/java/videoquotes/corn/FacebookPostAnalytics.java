/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package videoquotes.corn;

import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.FetchOptions;
import com.google.appengine.api.datastore.KeyFactory;
import com.google.appengine.api.datastore.PreparedQuery;
import java.util.Collection;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Queue;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import videoquotes.errorMessages.FacebookSharingFailed;
import videoquotes.repository.Channel;
import videoquotes.repository.ChannelRepository;
import videoquotes.repository.FBUser;
import videoquotes.repository.FBUserRepository;
import videoquotes.repository.FacebookPost;
import videoquotes.repository.FacebookPostQueue;
import videoquotes.repository.FacebookPostQueueRepository;
import videoquotes.repository.FacebookPostRepository;
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
import videoquotes.util.FacebookUtil;
import videoquotes.util.QuoteSvc;
import videoquotes.util.YoutubeUtil;

/**
 *
 * @author yoga1290
 */
@Controller
public class FacebookPostAnalytics {

    @Autowired
    private FacebookPostRepository posts;

    @RequestMapping(value = "/corn/updatePostAnalytics")
    private void updateQuoteAnalytics(){
	Collection<FacebookPost> queuedQuotes= posts.findByNeedSync(0, 1);
	Iterator<FacebookPost> queuedQuotesIt= queuedQuotes.iterator();
	while(queuedQuotesIt.hasNext())
	{
	    FacebookPost post=queuedQuotesIt.next();	    
	    post.setLikes(new Long( FacebookUtil.getPostLikesCount(post.getQuoteId())));
	    post.setShares(new Long( FacebookUtil.getPostShareCount(post.getQuoteId())));
	    post.setLastSync(new Date().getTime());
	    posts.update(post);
	}
    }
}
