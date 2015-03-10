package egyquotes.repository;

import java.util.Objects;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;


@PersistenceCapable
public class Channel {

	@PrimaryKey
	@Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
	private String channelId;

	
	public Channel(){

	}
	public Channel(String channelId){
		this.channelId=channelId;
	}
	
		public Channel(String channelId,String[] videos){
		this.channelId = channelId;
		this.videos = videos;
	}



@Persistent
private String[] videos;


	
	public String getChannelId() {
		return this.channelId;
	}
public void setChannelId(String channelId) {
		this.channelId = channelId;
	}
public String[] getVideos() {
		return this.videos;
	}
public void setVideos(String[] videos) {
		this.videos = videos;
	}

}
		