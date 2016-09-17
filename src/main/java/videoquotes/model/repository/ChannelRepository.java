package videoquotes.model.repository;

import java.util.List;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;
import videoquotes.model.Channel;
import videoquotes.model.Quote;
import videoquotes.util.YoutubeUtil;

/**
 *
 * @author yoga1290
 */
@Service
public class ChannelRepository extends BasicRecordRepository<Channel> {
        
    public ChannelRepository() {
	super(Channel.class);
    }
    
    // MUST Save Quote 1st
//    @Async //NOT WORKING
    public Channel insert(Quote quote) {
	
	String channelId = YoutubeUtil.getChannelId(quote.getVideoId());
	
	String channelName = YoutubeUtil.getChannelName(channelId);
	
	Channel channel = new Channel();
	channel.setName(channelName);
	channel.setId(channelId);
	return save(channel);
    }
    
    public List<Channel> list(int offset, int limit) {
	return find(new Query(), offset, limit);
    }
    
    public List<Channel> findByLastSyncTime(int offset, int limit) {
	return find(
		new Query()
		    .with(
			new Sort(Sort.Direction.ASC, "lastSyncTime")),
		offset,
		limit);
    }
}
