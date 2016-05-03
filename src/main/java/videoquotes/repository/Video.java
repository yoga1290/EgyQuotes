package videoquotes.repository;

import java.awt.List;
import java.util.Arrays;
import java.util.Collection;
import java.util.Objects;

import javax.jdo.annotations.Column;
import javax.jdo.annotations.Element;
import javax.jdo.annotations.Embedded;
import javax.jdo.annotations.EmbeddedOnly;
import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;
import java.util.logging.Logger;
import javax.jdo.annotations.NullValue;


@PersistenceCapable
public class Video {

	@PrimaryKey
	@Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
	private String videoId;
	@Persistent
	private int start[];
	@Persistent
	private int end[];
	@Persistent
	private Long quoteId[];
	@Persistent
	private String channelId;
	@Persistent
	private long time;

	public Video(){

	}
	
	public Video(String videoId,String channelId,Long[] quoteId,int start[],int end[]){
		this.videoId = videoId;
		this.channelId = channelId;
		this.quoteId=quoteId;
		this.start=start;
		this.end=end;
//		this.segments = segments;//Arrays.asList(segments);
	}
	public Video(String videoId,long time,String channelId,Long[] quoteId,int start[],int end[]){
		this.videoId = videoId;
		this.channelId = channelId;
		this.quoteId=quoteId;
		this.start=start;
		this.end=end;
		this.time = time;
//		this.segments = segments;//Arrays.asList(segments);
	}

	
	public int[] getStart() {
			return start;
		}

		public void setStart(int[] start) {
			this.start = start;
		}

		public int[] getEnd() {
			return end;
		}

		public void setEnd(int[] end) {
			this.end = end;
		}

		public Long[] getQuoteId() {
			return quoteId;
		}

		public void setQuoteId(Long[] quoteId) {
			this.quoteId = quoteId;
		}

	public String getVideoId() {
		return this.videoId;
	}
public void setVideoId(String videoId) {
		this.videoId = videoId;
	}

    public String getChannelId() {
	return channelId;
    }

    public void setChannelId(String channelId) {
	this.channelId = channelId;
    }

    public long getTime() {
	return time;
    }

    public void setTime(long time) {
	this.time = time;
    }
    
}
		