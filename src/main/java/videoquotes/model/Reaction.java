package videoquotes.model;

import java.security.Principal;
import java.util.Arrays;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;


@Document
public class Reaction extends BasicRecord {
    
    private @Getter @Setter String quoteId;
    private @Getter @Setter int reaction;
	
    public Reaction(Principal user, String quoteId, int reaction) {
	    this.quoteId = quoteId;
	    this.reaction = reaction;
	    String id = Arrays.toString(new String[]{user.getName(), quoteId, reaction+""});
	    this.setId(id);
    }
    
    public Reaction(){}

}