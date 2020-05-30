package videoquotes.repository.jpa;

import org.springframework.context.annotation.Profile;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import videoquotes.model.Quote;

import java.util.Date;
import java.util.List;

/**
 *
 * @author yoga1290
 */
@Profile("jpa")
public interface QuoteRepository extends BasicRecordRepository<Quote> {

//    @Query(value = "{ 'channelId': ?0, 'isDeleted': false }", count = true)
    long countByChannelId(String channelId);
    
//    @Query(value = "{'isDeleted': false}", fields = "{ 'creatorId' : 0 }")
    Slice<Quote> findAllByPerson(Pageable pageable);

//    @Query("{'video.id': ?0, 'isDeleted': false}")
    List<Quote> findAllByVideoId(String videoId, Pageable pageable);
    
//    @Query(value = "{ 'airedTime': {'$gte' : ?0, '$lte': ?1}, 'isDeleted': false }", fields = "{ 'person': 0 }")
    Page<Quote> findWithinTimespan(Date startTime, Date endTime, Pageable pageable);
    
//    @Query("{ 'person.$id': {'$in': ?0}, 'airedTime': {'$gte' : ?1, '$lte': ?2}, 'isDeleted': false }")
    Page<Quote> findByAuthorsAndTimespan(List<String> name, Date startTime, Date endTime, Pageable pageable);
    
//    @Query("{ 'channelId': {'$in': ?0}, 'airedTime': {'$gte' : ?1, '$lte': ?2}, 'isDeleted': false }")
    Page<Quote> findByChannelIdAndTimespan(List<String> channelId, Date startTime, Date endTime, Pageable pageable);
    
//    @Query("{ 'person.$id': {'$in': ?0}, 'channelId': {'$in': ?1}, 'airedTime': {'$gte' : ?2, '$lte': ?3}, 'isDeleted': false }")
    Page<Quote> findByAuthorAndChannelIdAndTimespan(List<String> name, List<String> channelId, Date startTime, Date endTime, Pageable pageable);
    
}
