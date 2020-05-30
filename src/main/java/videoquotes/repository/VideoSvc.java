package videoquotes.repository;

import videoquotes.repository.mongo.VideoRepository;
import videoquotes.repository.mongo.QuoteRepository;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
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
public class VideoSvc {
    
    @Autowired
    QuoteRepository quoteRepository;
    
    @Autowired
    VideoRepository videoRepository;
    
    @Autowired
    YoutubeUtil youtubeUtil;
    
    // MUST Save Quote 1st
    @Async
    public void updateOrInsertVideoRecord(Quote quote, String videoId) {
	Video video;
	String channelId = youtubeUtil.getChannelId(videoId);
	//TODO: 
	long publishedTime = youtubeUtil.getPublishedTime(videoId);
	
	try {
	    video = videoRepository.findOne(videoId);
	    video.getQuotes().add(quote.getId());
	    
	    List<Integer> start = video.getStart();
	    start.add(quote.getStart());
	    video.setStart(start);

	    List<Integer> end = video.getEnd();
	    end.add(quote.getEnd());
	    video.setStart(end);
	}catch(Exception e) {
	    video = new Video();
	    video.setId(videoId);
	    
	    
	    
	    video.setQuotes(new LinkedList<String>());
	    video.getQuotes().add(quote.getId());
	    
	    List<Integer> start = new LinkedList<Integer>();
	    start.add(quote.getStart());
	    video.setStart(start);

	    List<Integer> end = new LinkedList<Integer>();
	    end.add(quote.getEnd());
	    video.setStart(end);
	    
	}
	video.setChannelId(channelId);
	video.setTime(new Date(publishedTime));
	video.setPreviewImage(youtubeUtil.getVideoPreview(videoId+""));
	videoRepository.save(video);
	
	quote.setAiredTime(new Date(publishedTime));
	quote.setChannelId(channelId);
	quote.setVideo(video);
	quoteRepository.save(quote);
    }
}
