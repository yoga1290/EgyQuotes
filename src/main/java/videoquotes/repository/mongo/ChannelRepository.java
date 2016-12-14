package videoquotes.repository.mongo;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.mongodb.repository.Query;
import videoquotes.model.Channel;

/**
 *
 * @author yoga1290
 */
public interface ChannelRepository extends BasicRecordRepository<Channel> {
    
    Channel findOneOrderByLastSyncTime();
    
    @Query("{ 'name': {$regex:?0, $options:'i'}, 'isDeleted': false }")
    Slice<Channel> findByName(String name, Pageable pageable);

}
