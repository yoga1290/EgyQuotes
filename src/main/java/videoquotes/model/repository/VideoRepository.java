package videoquotes.model.repository;

import java.util.LinkedList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import videoquotes.model.Quote;
import videoquotes.model.Video;
import videoquotes.util.YoutubeUtil;

/**
 *
 * @author yoga1290
 */
@Service
public class VideoRepository extends BasicRecordRepository<Video> {
    
    @Autowired
    QuoteRepository quoteRepository;
    
    public VideoRepository() {
	super(Video.class);
    }
    
    public List<Video> findByChannelIds(List<String> channelId, int offset, int limit) {
	return find(new Query().addCriteria(Criteria.where("channelId").in(channelId)), offset, limit);
    }
    
    public List<Video> findByChannelIdsWithinTime(List<String> channelId, long start, long end, int offset, int limit) {
	return find(new Query().addCriteria(
		Criteria.where("channelId").in(channelId))
//		.addCriteria(Criteria.where("start").gte(start))
//		.addCriteria(Criteria.where("end").lte(end))
		,offset, limit);
    }
    
    // MUST Save Quote 1st
    @Async
    public void updateOrInsertVideoRecord(Quote quote) {
	Video video;
	String channelId = YoutubeUtil.getChannelId(quote.getVideoId());
	//TODO: 
	long publishedTime = YoutubeUtil.getPublishedTime(quote.getVideoId());
	
	try {
	    video = findById(quote.getVideoId());
	    video.getQuotes().add(quote.getId());
	    
	    List<Integer> start = video.getStart();
	    start.add(quote.getStart());
	    video.setStart(start);

	    List<Integer> end = video.getEnd();
	    end.add(quote.getEnd());
	    video.setStart(end);
	}catch(Exception e) {
	    video = new Video();
	    video.setId(quote.getVideoId());
	    
	    video.setChannelId(channelId);
	    
	    video.setQuotes(new LinkedList<String>());
	    video.getQuotes().add(quote.getId());
	    
	    List<Integer> start = new LinkedList<Integer>();
	    start.add(quote.getStart());
	    video.setStart(start);

	    List<Integer> end = new LinkedList<Integer>();
	    end.add(quote.getEnd());
	    video.setStart(end);
	    
	    video.setTime(publishedTime);
	}
	quote.setAiredTime(publishedTime);
	quote.setChannelId(channelId);
	quoteRepository.save(quote);
	save(video);
    }
}
