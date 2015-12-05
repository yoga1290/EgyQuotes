/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package videoquotes.corn;

import java.util.Collection;
import java.util.Date;
import java.util.Iterator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import videoquotes.repository.FacebookPost;
import videoquotes.repository.FacebookPostRepository;
import videoquotes.util.FacebookUtil;

/**
 *
 * @author yoga1290
 */
@Controller
public class FacebookPostAnalytics {

    @Autowired
    private FacebookPostRepository posts;

    @RequestMapping(value = "/cron/updatePostAnalytics")
    private void updateQuoteAnalytics(){
	Collection<FacebookPost> queuedQuotes= posts.findByNeedSync(0, 1);
	Iterator<FacebookPost> queuedQuotesIt= queuedQuotes.iterator();
	while(queuedQuotesIt.hasNext())
	{
	    FacebookPost post=queuedQuotesIt.next();	    
	    post.setLikes(new Long( FacebookUtil.getPostLikesCount(post.getFbid())));
	    post.setShares(new Long( FacebookUtil.getPostShareCount(post.getFbid())));
	    post.setLastSync(new Date().getTime());
	    posts.update(post);
	}
    }
}
