package videoquotes.repository;
import java.util.Objects;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;


@PersistenceCapable
public class Person {

	@PrimaryKey
	@Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
	private String key;
	public String getKey() {
		return this.key;
	}
	public void setKey(String key) {
		this.key = key;
	}

	public Person(){

	}
	
	public Person(String name){
		this.name = name;
		
		while(name.indexOf(" ")>-1)
			name=name.replace(" ","_");
		while(name.indexOf("أ")>-1)
			name=name.replace("أ","ا");
		while(name.indexOf("إ")>-1)
			name=name.replace("إ","ا");
		this.key=name;
	}

		@Persistent
		private String name;


	
		public String getName() {
			return this.name;
		}
	public void setName(String name) {
			this.name = name;
		}

}
		
		