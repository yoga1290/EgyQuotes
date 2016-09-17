/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package videoquotes.model.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import videoquotes.model.Quote;
import videoquotes.model.QuoteOwner;

/**
 *
 * @author yoga1290
 */
@Service
public class QuoteOwnerRepository extends BasicRecordRepository<QuoteOwner> {
    
    @Autowired
    VideoRepository videoRepository;
    
    public QuoteOwnerRepository() {
	super(QuoteOwner.class);
    }
    
    public void insertOwner(Quote quote, String userId) {
	save(new QuoteOwner(quote.getId(), userId));
    }
}
