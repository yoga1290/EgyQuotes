package videoquotes.repository.mongo;

import java.util.Date;
import java.util.List;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.mongodb.repository.Query;
import videoquotes.model.Quote;

/**
 *
 * @author yoga1290
 */

public interface QuoteRepository extends BasicRecordRepository<Quote> {

    @Query(value = "{ 'channelId': ?0, 'isDeleted': false }", count = true)
    long countByChannelId(String channelId);
    
    @Query("{ 'person.id': {'$in': ?0}, 'channelId': {'$in': ?1}, 'airedTime': {'$lt' : ?2, '$gt': ?3} }")
    Slice<Quote> findByAuthorAndChannelIdAndTimespan(List<String> name, List<String> channelId, Date startTime, Date endTime, Pageable pageable);
    
}
