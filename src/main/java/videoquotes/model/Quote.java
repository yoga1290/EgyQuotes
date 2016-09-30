package videoquotes.model;

import java.util.Date;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;


@Document
public class Quote extends BasicRecord {
    
    @Getter @Setter
    @DBRef(lazy = true)
    private Video video;
    
    @Getter @Setter
    private String channelId;
    
    @Getter @Setter
    @DBRef(lazy = true)
    private Person person;
    
    
    private @Getter @Setter String quote;
    private @Getter @Setter int start;
    private @Getter @Setter int end;
    
    private @Getter @Setter Date airedTime;
    
    

	
    public Quote(Video video, Person person, String quote, int start, int end) {
	    this.video = video;
	    this.person = person;
	    this.quote = quote;
	    this.start = start;
	    this.end = end;
    }
    
    public Quote() {}

}
		