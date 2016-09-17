package videoquotes.model;
import java.util.Objects;
import javax.persistence.Id;


import org.springframework.data.mongodb.core.mapping.Document;


@Document
public class QuoteAnalytics extends BasicRecord {

private Long likes;
private Long shares;
private Long lastSync;

    public Long getLikes() {
	return likes;
    }

    public Long getShares() {
	return shares;
    }

    public Long getLastSync() {
	return lastSync;
    }

    public void setLikes(Long likes) {
	this.likes = likes;
    }

    public void setShares(Long shares) {
	this.shares = shares;
    }

    public void setLastSync(Long lastSync) {
	this.lastSync = lastSync;
    }



}
