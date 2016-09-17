package videoquotes.model.repository;

import java.util.List;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;
import videoquotes.model.Reaction;

/**
 *
 * @author yoga1290
 */
@Service
public class ReactionRepository extends BasicRecordRepository<Reaction> {
    
    public ReactionRepository() {
	super(Reaction.class);
    }
    
    public List<Reaction> findByQuoteId(String quoteId, int offset, int limit) {
	return find(new Query(Criteria.where("quoteId").is(quoteId)), offset, limit);
    }
    
    public List<Reaction> findByReaction(int reaction, int offset, int limit) {
	return find(new Query(Criteria.where("reaction").is(reaction)), offset, limit);
    }
    
    public List<Reaction> findByQuoteIdAndReaction(String quoteId,int reaction, int offset, int limit) {
	return find(new Query(Criteria.where("quoteId").is(quoteId))
		    .addCriteria(Criteria.where("reaction").is(reaction)), offset, limit);
    }
    
    public long countByQuoteId(String quoteId) {
	return count(new Query(Criteria.where("quoteId").is(quoteId)));
    }
    
    public long countByReaction(int reaction) {
	return count(new Query(Criteria.where("reaction").is(reaction)));
    }
    
    public long countByQuoteIdAndReaction(String quoteId,int reaction) {
	return count(new Query(Criteria.where("quoteId").is(quoteId))
		    .addCriteria(Criteria.where("reaction").is(reaction)));
    }
}
