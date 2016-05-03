/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package videoquotes.util;

import java.util.Arrays;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import videoquotes.errorMessages.UpdateVideoFailed;
import videoquotes.errorMessages.VideoIntervalIntersect;
import videoquotes.repository.ChannelRepository;
import videoquotes.repository.FBUserRepository;
import videoquotes.repository.PersonRepository;
import videoquotes.repository.Quote;
import videoquotes.repository.QuoteOwnerRepository;
import videoquotes.repository.QuoteRepository;
import videoquotes.repository.Video;
import videoquotes.repository.VideoRepository;
import videoquotes.repository.pageACRepository;

/**
 *
 * @author yoga1290
 */
@Component
public class VideoUtil {
    
    @Autowired
    private QuoteRepository Quotes;
    @Autowired
    private VideoRepository Videos;
    
    public void insertQuote(Quote quote, String channelId)
    {
	int s=new Double(quote.getStart()).intValue(),e=new Double(quote.getEnd()).intValue();
	try{
	    Video video=Videos.findOne(quote.getVideoId());
	    int segStart[]=video.getStart();
	    int segEnd[]=video.getEnd();
	    Long quoteId[]=video.getQuoteId();
	    if(segStart==null)
	    {
		    segStart=new int[]{s};
		    segEnd=new int[]{e};
		    quoteId=new Long[]{(quote.getKey())};
	    }
	    else
	    {
		    for(int i=0;i<segStart.length;i++)
			    if(
				    (s<=segStart[i] && segStart[i]<=e)
				    ||
				    (s<=segEnd[i] && segEnd[i]<=e)
				    ||
				    (segStart[i]<=s && s<=segEnd[i])
				    ||
				    (segStart[i]<=e && e<=segEnd[i])
				    ) {
				    Quotes.delete(quote);
				    throw new VideoIntervalIntersect();
			    }

		    segStart=Arrays.copyOf(segStart, segStart.length+1);
		    segStart[segStart.length-1]=s;
		    segEnd=Arrays.copyOf(segEnd, segEnd.length+1);
		    segEnd[segEnd.length-1]=e;
		    quoteId=Arrays.copyOf(quoteId, quoteId.length+1);
		    quoteId[quoteId.length-1]=(quote.getKey());

	    }
	    video.setStart(segStart);
	    video.setEnd(segEnd);
	    video.setQuoteId(quoteId);
	    video=Videos.update(video);
	}catch(Exception we){
	    try
	    {
		    int segStart[]=new int[]{s};
		    int segEnd[]=new int[]{e};
		    Long quoteId[]=new Long[]{(quote.getKey())};
		    long time = YoutubeUtil.getPublishedTime(quote.getVideoId());
		    Videos.save(new Video(	quote.getVideoId(), time, channelId,quoteId,segStart,segEnd) );
	    }catch(Exception eww){
		    throw new UpdateVideoFailed();
	    }
	}
    }
    
}
