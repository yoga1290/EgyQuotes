/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package videoquotes.repository;
import java.util.Objects;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;


@PersistenceCapable
public class VideoDL {

	public VideoDL(){

	}

		public VideoDL(String videoId,String url){
		this.videoId = videoId;
		this.url = url;
	}

	@PrimaryKey
@Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
private String videoId;

@Persistent
private String url;



	public String getVideoId() {
		return this.videoId;
	}
public void setVideoId(String videoId) {
		this.videoId = videoId;
	}
public String getUrl() {
		return this.url;
	}
public void setUrl(String url) {
		this.url = url;
	}

}