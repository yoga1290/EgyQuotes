package videoquotes.repository;

import java.util.Objects;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;


@PersistenceCapable
public class Quote {

	@PrimaryKey
	@Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
	private Long key;
	public Long getKey() {
		return this.key;
	}
	public void setKey(Long key) {
		this.key = key;
	}

	public Quote(){

	}
	
		public Quote(String videoId,String personId,String quote,int start,int end){
		this.videoId = videoId;
		this.personId = personId;
		this.quote = quote;
		this.start = start;
		this.end = end;
	}

	@Persistent
private String videoId;

@Persistent
private String personId;

@Persistent
private String quote;

@Persistent
private int start;

@Persistent
private int end;




	
	public String getVideoId() {
		return this.videoId;
	}
public void setVideoId(String videoId) {
		this.videoId = videoId;
	}
public String getPersonId() {
		return this.personId;
	}
public void setPersonId(String personId) {
		this.personId = personId;
	}
public String getQuote() {
		return this.quote;
	}
public void setQuote(String quote) {
		this.quote = quote;
	}

    public double getStart() {
	return start;
    }

    public double getEnd() {
	return end;
    }

    public void setStart(int start) {
	this.start = start;
    }

    public void setEnd(int end) {
	this.end = end;
    }

}
		