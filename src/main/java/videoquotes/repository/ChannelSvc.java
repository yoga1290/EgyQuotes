package videoquotes.repository;

import videoquotes.repository.mongo.ChannelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import videoquotes.model.Channel;
import videoquotes.model.Quote;
import videoquotes.util.YoutubeUtil;

/**
 *
 * @author yoga1290
 */
@Service
public class ChannelSvc {
        
    @Autowired
    YoutubeUtil youtubeUtil;
    
    @Autowired
    ChannelRepository channelRepository;
    
    // MUST Save Quote 1st
//    @Async //NOT WORKING
    public Channel insert(Quote quote) {
	
	String channelId = youtubeUtil.getChannelId(quote.getVideo().getChannelId());
	
	String channelName = youtubeUtil.getChannelName(channelId);
	
	Channel channel = new Channel();
	channel.setName(channelName);
	channel.setId(channelId);
	return channelRepository.save(channel);
    }
}
