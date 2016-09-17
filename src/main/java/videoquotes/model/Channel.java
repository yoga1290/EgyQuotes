package videoquotes.model;

import java.util.Date;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 *
 * @author yoga1290
 */
@Document
public class Channel extends BasicRecord {
    
    private @Getter @Setter String name;
    private @Getter @Setter long quoteCount;
    private @Getter @Setter long lastSyncTime;
    
    public Channel() {
	lastSyncTime = new Date().getTime();
	quoteCount = 0L;
    }
}
