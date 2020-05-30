/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package videoquotes.model;

import javax.persistence.Entity;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author yoga1290
 */
@Document
public class FacebookPost extends BasicRecord {
    
    private @Getter @Setter
	String quoteId;

	private @Getter @Setter
	long lastSync;

	private @Getter @Setter
	long likes;

	private @Getter @Setter
	long shares;
    
}
