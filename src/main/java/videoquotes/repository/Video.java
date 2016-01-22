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


@PersistenceCapable
public class Video {

	@PrimaryKey
	@Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
	private String videoId;
	/*
    private Key key;
	public void setKey(Key key) {
		this.key = key;
	}
	public void setKey(String key) {
		this.key = KeyFactory.createKey(this.getClass().getSimpleName(), key);
	}
	//*/

	public Video(){

	}
	
		public Video(String videoId,Long[] quoteId,int start[],int end[]){
		this.videoId = videoId;
		this.quoteId=quoteId;
		this.start=start;
		this.end=end;
//		this.segments = segments;//Arrays.asList(segments);
	}
	
		@Persistent
		private int start[];
		@Persistent
		private int end[];
		@Persistent
		private Long quoteId[];

	
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



}
		