package videoquotes.model;

import org.springframework.data.mongodb.core.mapping.Document;


@Document
public class Tag extends BasicRecord {
    
    private String tag;
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



    public String getTag() {
	    return this.tag;
    }
    public void setTag(String tag) {
	    this.tag = tag;
    }
    public String getQuoteId() {
	    return this.quoteId;
    }
    public void setQuoteId(String quoteId) {
	    this.quoteId = quoteId;
    }

}
