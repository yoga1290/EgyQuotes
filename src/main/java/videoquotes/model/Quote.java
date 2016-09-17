package videoquotes.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;


@Document
public class Quote extends BasicRecord {
    
    private @Getter @Setter String videoId;
    private @Getter @Setter String channelId;
    private @Getter @Setter String personId;
    private @Getter @Setter String quote;
    private @Getter @Setter int start;
    private @Getter @Setter int end;
    private @Getter @Setter long airedTime;

	
    public Quote(String videoId,String personId,String quote,int start,int end){
	    this.videoId = videoId;
	    this.personId = personId;
	    this.quote = quote;
	    this.start = start;
	    this.end = end;
    }
    
    public Quote(){}

}
		