package videoquotes.repository.mongo;

import java.util.List;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Service;
import videoquotes.model.Reaction;

/**
 *
 * @author yoga1290
 */

public interface ReactionRepository extends BasicRecordRepository<Reaction> {

    @Query("{ 'quoteId': ?0, 'isDeleted': false }")
    Slice<Reaction> findByQuoteId(String quoteId, Pageable pageable);
    
    @Query("{ 'reaction': ?0, 'isDeleted': false }")
    Slice<Reaction> findByReaction(int reaction, Pageable pageable);
    
    @Query("{ 'quoteId': ?0, 'reaction': ?1, 'isDeleted': false }")
    Slice<Reaction> findByQuoteIdAndReaction(String quoteId, int reaction, Pageable pageable);
    
    @Query(value = "{ 'quoteId': ?0, 'isDeleted': false }", count = true)
    long countByQuoteId(String quoteId);
    
    @Query(value = "{ 'reaction': ?0, 'isDeleted': false }", count = true)
    long countByReaction(int reaction);
    
    @Query(value = "{ 'quoteId': ?0, 'reaction': ?1, 'isDeleted': false }", count = true)
    long countByQuoteIdAndReaction(String quoteId, int reaction);
}
