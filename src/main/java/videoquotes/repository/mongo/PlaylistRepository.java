package videoquotes.repository.mongo;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.mongodb.repository.Query;
import videoquotes.model.Playlist;

/**
 *
 * @author yoga1290
 */
public interface PlaylistRepository extends BasicRecordRepository<Playlist> {
        
    @Query("{ 'name': {$regex:?0, $options:'i'}, 'creatorId': ?1, 'isDeleted': false }")
    Slice<Playlist> findByName(String name, String creatorId, Pageable pageable);

}
