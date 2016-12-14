package videoquotes.cron;

import java.util.Date;
import java.util.Iterator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import videoquotes.model.Channel;
import videoquotes.repository.mongo.ChannelRepository;
import videoquotes.repository.mongo.QuoteRepository;

/**
 *
 * @author yoga1290
 */
@Component
public class ChannelAnalytics {
    
//    @Autowired
//    QuoteRepository quoteRepository;
//    
//    @Autowired
//    ChannelRepository channelRepository;
//    
//    @Scheduled(fixedRate=10000) //update 1 every 10mins
//    public void updateQuoteCount() {
//	Iterator<Channel> it = channelRepository.findByLastSyncTime(0, 1).iterator();
//	
//	while(it.hasNext()) {
//	    Channel channel = it.next();
//	    channel.setQuoteCount( quoteRepository.countByChannelId(channel.getId()) );
//	    channel.setLastSyncTime(new Date().getTime());
//	    channelRepository.save(channel);
//	}
//    }
}
