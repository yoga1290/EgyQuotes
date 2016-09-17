package videoquotes.model;

import javax.persistence.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class QuoteOwner extends BasicRecord {

    private String quoteId;
    private String userId;

	public QuoteOwner(String quoteId,String userId){
		this.quoteId = quoteId;
		this.userId = userId;
	}


	
	public String getQuoteId() {
		return this.quoteId;
	}
public void setQuoteId(String quoteId) {
		this.quoteId = quoteId;
	}
public String getUserId() {
		return this.userId;
	}
public void setUserId(String userId) {
		this.userId = userId;
	}

}
		