package videoquotes.model;
import java.util.Objects;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class pageAC {

	@Id
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

		
		private String ac;
		

}
		
		