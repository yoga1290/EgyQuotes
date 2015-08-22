package videoquotes.repository;

import java.util.Objects;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;


@PersistenceCapable
public class QuoteOwner {


	public QuoteOwner(){

	}
	
		public QuoteOwner(String quoteId,String userId){
		this.quoteId = quoteId;
		this.userId = userId;
	}

	@PrimaryKey
@Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
private String quoteId;

@Persistent
private String userId;


	
	public String getQuoteId() {
		return this.quoteId;
	}
public void setQuoteId(String quoteId) {
		this.quoteId = quoteId;
	}
public String getUserId() {
		return this.userId;
	}
public void setUserId(String userId) {
		this.userId = userId;
	}

}
		