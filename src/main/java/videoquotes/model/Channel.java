package videoquotes.model;

import java.util.Date;

import javax.persistence.Entity;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author yoga1290
 */
@Document
public class Channel extends BasicRecord {
    
    private @Getter @Setter String name;
    private @Getter @Setter long quoteCount;
	private @Getter @Setter long lastSyncTime;

	private @Getter @Setter String logo;
    
    public Channel(String channelId) {
    	this.setId(channelId);
		lastSyncTime = new Date().getTime();
		quoteCount = 0L;
    }
}
