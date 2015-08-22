package videoquotes.repository;
import java.util.Objects;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;


@PersistenceCapable
public class pageAC {

	@PrimaryKey
	@Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
	private String id;
	public String getId() {
		return this.id;
	}
	public void setId(String id) {
		this.id = id;
	}
	/*
    private Key key;
	public void setKey(Key key) {
		this.key = key;
	}
	public void setKey(String key) {
		this.key = KeyFactory.createKey(this.getClass().getSimpleName(), key);
	}
	//*/

	public pageAC(){

	}
	
	public pageAC(String id,String ac){
		this.id = id;
		this.ac=ac;
	}

		public String getAc() {
		return ac;
	}
	public void setAc(String ac) {
		this.ac = ac;
	}

		@Persistent
		private String ac;
		

}
		
		