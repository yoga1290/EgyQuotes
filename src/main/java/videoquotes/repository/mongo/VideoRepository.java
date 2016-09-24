package videoquotes.repository.mongo;

import java.util.Date;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.mongodb.repository.Query;
import videoquotes.model.Video;

/**
 *
 * @author yoga1290
 */

public interface VideoRepository extends BasicRecordRepository<Video> {

    @Query("{ 'channelId': ?0, 'isDeleted': false }")
    Slice<Video> findByChannelId(String channelId, Pageable pageable);
    
    @Query("{ 'channelId': ?0, 'isDeleted': false, 'time': {'$lt' : ?1, '$gt': ?2} }")
    Slice<Video> findByChannelIdWithinTime(String channelId, Date startTime, Date endTime ,Pageable pageable);
    
}
