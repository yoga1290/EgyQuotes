package videoquotes.repository;
import java.util.Objects;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;


@PersistenceCapable
public class QuoteAnalytics {

	public QuoteAnalytics(){

	}

        public QuoteAnalytics(
Long quoteId,

Long likes,

Long shares,

Long lastSync
){
            
this.quoteId=quoteId;

this.likes=likes;

this.shares=shares;

this.lastSync=lastSync;

	}

	
@PrimaryKey
@Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
private Long quoteId;

@Persistent
private Long likes;

@Persistent
private Long shares;

@Persistent
private Long lastSync;


        
    public Long getQuoteId(){
        return this.quoteId;
    }

    public Long getLikes(){
        return this.likes;
    }

    public Long getShares(){
        return this.shares;
    }

    public Long getLastSync(){
        return this.lastSync;
    }

        
    public void setQuoteId(Long quoteId){
        this.quoteId=quoteId;
    }

    public void setLikes(long likes){
        this.likes=likes;
    }

    public void setShares(long shares){
        this.shares=shares;
    }

    public void setLastSync(long lastSync){
        this.lastSync=lastSync;
    }

}
