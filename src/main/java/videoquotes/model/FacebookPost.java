/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package videoquotes.model;

/**
 *
 * @author yoga1290
 */
public class FacebookPost extends BasicRecord {
    
    private String quoteId;
    private long lastSync;
    private long likes;
    private long shares;
    
    
    
    
    
    
    
    
    /// ===================

    public String getQuoteId() {
	return quoteId;
    }

    public long getLastSync() {
	return lastSync;
    }

    public long getLikes() {
	return likes;
    }

    public long getShares() {
	return shares;
    }

    public void setQuoteId(String quoteId) {
	this.quoteId = quoteId;
    }

    public void setLastSync(long lastSync) {
	this.lastSync = lastSync;
    }

    public void setLikes(long likes) {
	this.likes = likes;
    }

    public void setShares(long shares) {
	this.shares = shares;
    }
    
    
    
    
}
