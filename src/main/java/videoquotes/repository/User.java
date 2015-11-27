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
import java.util.Map;


@PersistenceCapable
public class User {

	@PrimaryKey
	@Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private String id;

	@Persistent
	private Map<String,String> accountId;
	
	@Persistent
	private String name;
	
	@Persistent
	private String picture;
	
	@Persistent
	private String quoteId[];
	


	public String getId() {
		return this.id;
	}
	public void setId(String id) {
		this.id = id;
	}

    public Map<String, String> getAccountId() {
	return accountId;
    }

    public String getName() {
	return name;
    }

    public String getPicture() {
	return picture;
    }

    public String[] getQuoteId() {
	return quoteId;
    }
    
    

    public void setAccountId(Map<String, String> accountId) {
	this.accountId = accountId;
    }

    public void setName(String name) {
	this.name = name;
    }

    public void setPicture(String picture) {
	this.picture = picture;
    }

    public void setQuoteId(String[] quoteId) {
	this.quoteId = quoteId;
    }
    
    
    
	
	
		
	public User(){

	}
	
	public User(String id){
		this.id = id;
	}
}
		
		