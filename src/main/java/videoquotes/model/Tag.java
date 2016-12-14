package videoquotes.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;


@Document
public class Tag extends BasicRecord {
    
    @Getter @Setter
    private String tag;
    
    @Getter @Setter
    private String quoteId;

    public Tag(String tag,String quoteId) {
	while(tag.indexOf(" ")>-1)
	    tag=tag.replace(" ","_");
	while(tag.indexOf("أ")>-1)
		tag=tag.replace("أ","ا");
	while(tag.indexOf("إ")>-1)
		tag=tag.replace("إ","ا");
	setId(quoteId + "_" + tag);
	this.tag = tag;
	this.quoteId = quoteId;
    }

}
