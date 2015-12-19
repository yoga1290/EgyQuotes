package videoquotes.repository;

import java.util.Objects;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;


@PersistenceCapable
public class Tag {

	public Tag(){

	}

		public Tag(String tag,Long quoteId){
		    this.id = quoteId+"_"+tag;
		this.tag = tag;
		this.quoteId = quoteId;
	}

	@PrimaryKey
@Persistent
private String id;

@Persistent
private String tag;

@Persistent
private Long quoteId;



	public String getId() {
		return this.id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getTag() {
		return this.tag;
	}
	public void setTag(String tag) {
		this.tag = tag;
	}
	public Long getQuoteId() {
		return this.quoteId;
	}
	public void setQuoteId(Long quoteId) {
		this.quoteId = quoteId;
	}

}
