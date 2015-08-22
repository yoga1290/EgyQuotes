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
	private long key;
	public long getKey() {
		return this.key;
	}
	public void setKey(long key) {
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
	
		public Quote(String videoId,String personId,String quote,String start,String end){
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
private String start;

@Persistent
private String end;



	
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
public String getStart() {
		return this.start;
	}
public void setStart(String start) {
		this.start = start;
	}
public String getEnd() {
		return this.end;
	}
public void setEnd(String end) {
		this.end = end;
	}

}
		