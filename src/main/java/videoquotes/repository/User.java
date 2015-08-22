package videoquotes.repository;
import java.util.Objects;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;

import java.util.Objects;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;


@PersistenceCapable
public class User {

	@PrimaryKey
	@Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private long id;
	
	@Persistent
	private long quotes[];
	
	@Persistent
	private String facebook;
	
	@Persistent
	private String google;
	
	
	
	public String getFacebook() {
		return facebook;
	}
	public void setFacebook(String facebook) {
		this.facebook = facebook;
	}
	public String getGoogle() {
		return google;
	}
	public void setGoogle(String google) {
		this.google = google;
	}
	public void setId(long id) {
		this.id = id;
	}
	public long getId() {
		return this.id;
	}

	public long[] getQuotes() {
		return quotes;
	}
	public void setQuotes(long[] quotes) {
		this.quotes = quotes;
	}
	
	
		
	public User(){

	}
	
	public User(long id){
		this.id = id;
	}
}
		
		