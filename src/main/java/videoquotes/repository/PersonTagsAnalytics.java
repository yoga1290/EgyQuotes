/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package videoquotes.repository;

/**
 *
 * @author yoga1290
 */import java.util.Objects;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;


@PersistenceCapable
public class PersonTagsAnalytics {

	public PersonTagsAnalytics(){

	}

        public PersonTagsAnalytics(
String tag,

String person,

int value,

Long lastSync
){
            
this.tag=tag;

this.person=person;

this.value=value;

this.lastSync=lastSync;
this.id=person+"_"+tag;

	}

	
@Persistent
private String person;

@Persistent
private int value;

@Persistent
private Long lastSync;
@Persistent
private String tag;
@PrimaryKey
@Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
private String id;



    public int getValue(){
        return this.value;
    }

    public Long getLastSync(){
        return this.lastSync;
    }


    public void setValue(int value){
        this.value=value;
    }

    public void setLastSync(Long lastSync){
        this.lastSync=lastSync;
    }

    public String getTag() {
	return tag;
    }

    public String getId() {
	return id;
    }

    public void setTag(String tag) {
	this.tag = tag;
    }

    public void setId(String id) {
	this.id = id;
    }

    public String getPerson() {
	return person;
    }

    public void setPerson(String person) {
	this.person = person;
    }
    

}
