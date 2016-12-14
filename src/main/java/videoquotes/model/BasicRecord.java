package videoquotes.model;

import java.util.Date;
import org.springframework.data.annotation.Id;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.context.SecurityContextHolder;

/**
 *
 * @author yoga1290
 */
public class BasicRecord {
    @Id
    private @Getter @Setter String id;
    private @Getter @Setter Date creationTime;
    private @Getter @Setter String creatorId;
    private @Getter @Setter boolean isDeleted;
    
    public BasicRecord() {
	this.creationTime = new Date();
	
	try {
	    if (SecurityContextHolder.getContext().getAuthentication() != null) {
		this.creatorId = SecurityContextHolder.getContext().getAuthentication().getName();
	    }
	} catch(Exception e){}
    }
}
