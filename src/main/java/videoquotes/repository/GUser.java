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
public class GUser {

	@PrimaryKey
	@Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private String id;

    @Persistent
	private String refreshToken;
	public String getRefreshToken() {
		return this.refreshToken;
	}
	public void setRefreshToken(String refreshToken) {
		this.refreshToken = refreshToken;
	}

	@Persistent
	private String facebookId;
	public String getFacebookId() {
		return this.facebookId;
	}
	public void setFacebookId(String facebookId) {
		this.facebookId = facebookId;
	}


	public String getId() {
		return this.id;
	}
	public void setId(String id) {
		this.id = id;
	}
	
	
		
	public GUser(){

	}
	
	public GUser(String id){
		this.id = id;
	}
}
		
		