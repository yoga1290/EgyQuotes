package videoquotes.repository;

import java.util.Objects;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;


@PersistenceCapable
public class Channel {
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

	public Channel(){

	}
	public Channel(String channelId){
	    this.channelId=channelId;
	    this.quotesCnt=0L;
	    this.lastSync=0L;
	}

        public Channel(
String channelId,

Long quotesCnt,

Long lastSync
){
            
this.channelId=channelId;

this.quotesCnt=quotesCnt;

this.lastSync=lastSync;

	}

	
@PrimaryKey
@Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
private String channelId;

@Persistent
private Long quotesCnt;

@Persistent
private Long lastSync;


        
    public String getChannelId(){
        return this.channelId;
    }

    public Long getQuotesCnt(){
        return this.quotesCnt;
    }

    public Long getLastSync(){
        return this.lastSync;
    }

        
    public void setChannelId(String channelId){
        this.channelId=channelId;
    }

    public void setQuotesCnt(Long quotesCnt){
        this.quotesCnt=quotesCnt;
    }

    public void setLastSync(Long lastSync){
        this.lastSync=lastSync;
    }

}