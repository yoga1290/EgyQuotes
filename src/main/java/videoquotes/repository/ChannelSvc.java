package videoquotes.repository;

import org.springframework.scheduling.annotation.Async;
import videoquotes.repository.mongo.ChannelRepository;

import java.util.Objects;

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
    @Async //NOT WORKING
    public Channel insert(Quote quote) {
	
	String channelId = youtubeUtil.getChannelId(quote.getVideo().getChannelId());
	
	String channelName = youtubeUtil.getChannelName(channelId);

	String logo = youtubeUtil.getChannelLogo(channelId);
	
	Channel channel = new Channel(channelId);
	channel.setName(channelName);
	channel.setLogo(logo);
	return channelRepository.save(channel);
    }
}
