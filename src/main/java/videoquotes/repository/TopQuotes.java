package videoquotes.repository;
import java.util.Objects;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;


@PersistenceCapable
public class TopQuotes {
/*
	@PrimaryKey
	@Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
	private long key;
	public long getKey() {
		return this.key;
	}
	public void setKey(long key) {
		this.key = key;
	}
    private Key key;
	public void setKey(Key key) {
		this.key = key;
	}
	public void setKey(String key) {
		this.key = KeyFactory.createKey(this.getClass().getSimpleName(), key);
	}
	//*/

	public TopQuotes(){

	}

		public TopQuotes(String quoteId,String count,Long lastSync){
		this.quoteId = quoteId;
		this.count = count;
		this.lastSync = lastSync;
	}

	@PrimaryKey
@Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
private String quoteId;

@Persistent
private String count;

@Persistent
private Long lastSync;



	public String getQuoteId() {
		return this.quoteId;
	}
public void setQuoteId(String quoteId) {
		this.quoteId = quoteId;
	}
public String getCount() {
		return this.count;
	}
public void setCount(String count) {
		this.count = count;
	}
public Long getLastSync() {
		return this.lastSync;
	}
public void setLastSync(Long lastSync) {
		this.lastSync = lastSync;
	}

}