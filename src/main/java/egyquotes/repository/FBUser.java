package egyquotes.repository;
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
public class FBUser {

	@PrimaryKey
	@Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private String id;
	
	@Persistent
	private long quotes[];
	
	public long[] getQuotes() {
		return quotes;
	}
	public void setQuotes(long[] quotes) {
		this.quotes = quotes;
	}
	public String getId() {
		return this.id;
	}
	public void setKey(String id) {
		this.id = id;
	}
	
	
		
	public FBUser(){

	}
	
	public FBUser(String id){
		this.id = id;
	}
}
		
		