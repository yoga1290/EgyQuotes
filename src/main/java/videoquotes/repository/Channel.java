package videoquotes.repository;


import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;



@PersistenceCapable
public class Channel {

	public Channel(){

	}
	public Channel(String channelId){
	    this.channelId=channelId;
	    this.quotesCnt=0L;
	    this.lastSync=0L;
	}
	public Channel(String channelId, String name){
	    this.channelId=channelId;
	    this.name = name;
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
private String name;

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

    public String getName() {
	return name;
    }

    public void setName(String name) {
	this.name = name;
    }

    
}