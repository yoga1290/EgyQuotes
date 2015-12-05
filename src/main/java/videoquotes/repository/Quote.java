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
	/*
    private Key key;
	public void setKey(Key key) {
		this.key = key;
	}
	public void setKey(String key) {
		this.key = KeyFactory.createKey(this.getClass().getSimpleName(), key);
	}
	//*/

	public Quote(){

	}
	
		public Quote(String videoId,String personId,String quote,double start,double end){
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
private double start;

@Persistent
private double end;

@Persistent
private long likes;

@Persistent
private long shares;



	
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

    public void setStart(double start) {
	this.start = start;
    }

    public void setEnd(double end) {
	this.end = end;
    }

    public long getLikes() {
	return likes;
    }

    public long getShares() {
	return shares;
    }

    public void setLikes(long likes) {
	this.likes = likes;
    }

    public void setShares(long shares) {
	this.shares = shares;
    }


}
		