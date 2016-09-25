package videoquotes.repository.mongo;

import java.util.Date;
import java.util.List;
import org.springframework.data.domain.Page;
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
    
    @Query(value = "{'isDeleted': false}", fields = "{ 'creatorId' : 0 }")
    Slice<Quote> findAllByPerson(Pageable pageable);
    
    @Query(value = "{ 'airedTime': {'$gte' : ?0, '$lte': ?1} }", fields = "{ 'person': 0 }")
    Slice<Quote> findWithinTimespan(Date startTime, Date endTime, Pageable pageable);
    
    @Query("{ 'person.id': {'$in': ?0}, 'airedTime': {'$gte' : ?1, '$lte': ?2} }")
    Slice<Quote> findByAuthorsAndTimespan(List<String> name, Date startTime, Date endTime, Pageable pageable);
    
    @Query("{ 'channelId': {'$in': ?0}, 'airedTime': {'$gte' : ?1, '$lte': ?2} }")
    Slice<Quote> findByChannelIdAndTimespan(List<String> channelId, Date startTime, Date endTime, Pageable pageable);
    
    @Query("{ 'person.id': {'$in': ?0}, 'channelId': {'$in': ?1}, 'airedTime': {'$gte' : ?2, '$lte': ?3} }")
    Slice<Quote> findByAuthorAndChannelIdAndTimespan(List<String> name, List<String> channelId, Date startTime, Date endTime, Pageable pageable);
    
}
