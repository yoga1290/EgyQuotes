package videoquotes.model;

import org.springframework.data.annotation.Id;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;


@Document
public class TagName extends BasicRecord {

//	@Id
	private @Getter @Setter String tag;
	
	public TagName() {
	}
	
	public TagName(String tag) {
	    while(tag.indexOf(" ")>-1)
	    tag=tag.replace(" ","_");
	    while(tag.indexOf("أ")>-1)
		    tag=tag.replace("أ","ا");
	    while(tag.indexOf("إ")>-1)
		    tag=tag.replace("إ","ا");
	    super.setId(tag);
	    this.tag = tag;
	}
}
