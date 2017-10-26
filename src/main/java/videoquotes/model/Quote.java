package videoquotes.model;

import java.util.Date;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import javax.validation.Valid;
import javax.validation.constraints.*;


@Document
public class Quote extends BasicRecord {
    
    @Getter @Setter
	@Valid
	@DBRef(lazy = true)
    private Video video;

    @Getter @Setter
	@NotEmpty
	@NotNull
    private String channelId;
    
    @Getter @Setter
    @DBRef
	@Valid
    private Person person;

	@NotNull(groups = {POST.class, PUT.class})
	@Size(min = 3, groups = {POST.class, PUT.class})
    private @Getter @Setter String quote;

	@NotNull(groups = {POST.class, PUT.class})
    private @Getter @Setter int start;

	@NotNull(groups = {POST.class, PUT.class})
	private @Getter @Setter int end;

	@NotNull//(groups = {POST.class, PUT.class})
	@NotEmpty//(groups = {POST.class, PUT.class})
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
		