/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package videoquotes.repository;

/**
 *
 * @author yoga1290
 */
import java.util.Objects;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;


@PersistenceCapable
public class FacebookPostQueue {


	public FacebookPostQueue(){

	}

        public FacebookPostQueue(

Long quoteId,

Long createdTime
){

this.quoteId=quoteId;

this.createdTime=createdTime;

	}

	
@Persistent
private Long quoteId;

@Persistent
private Long createdTime;

@PrimaryKey
@Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
private Long id;


        
    public Long getId(){
        return this.id;
    }

    public long getQuoteId(){
        return this.quoteId;
    }

    public Long getCreatedTime(){
        return this.createdTime;
    }

        
    public void setId(Long id){
        this.id=id;
    }

    public void setQuoteId(long quoteId){
        this.quoteId=quoteId;
    }

    public void setCreatedTime(Long createdTime){
        this.createdTime=createdTime;
    }

}
