
package videoquotes.repository;
import java.util.Objects;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;


@PersistenceCapable
public class FacebookPost {

	public FacebookPost(){

	}

        public FacebookPost(
String fbid,

String quoteId
){
            
this.fbid=fbid;

this.quoteId=quoteId;

this.lastSync=0L;

this.likes=0L;

this.shares=0L;

	}

	
@Persistent
private String quoteId;

@Persistent
private Long lastSync;

@Persistent
private Long likes;

@Persistent
private Long shares;

@PrimaryKey
@Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
private String fbid;


        
    public String getFbid(){
        return this.fbid;
    }

    public String getQuoteId(){
        return this.quoteId;
    }

    public Long getLastSync(){
        return this.lastSync;
    }

    public Long getLikes(){
        return this.likes;
    }

    public Long getShares(){
        return this.shares;
    }

        
    public void setFbid(String fbid){
        this.fbid=fbid;
    }

    public void setQuoteId(String quoteId){
        this.quoteId=quoteId;
    }

    public void setLastSync(Long lastSync){
        this.lastSync=lastSync;
    }

    public void setLikes(Long likes){
        this.likes=likes;
    }

    public void setShares(Long shares){
        this.shares=shares;
    }

}
