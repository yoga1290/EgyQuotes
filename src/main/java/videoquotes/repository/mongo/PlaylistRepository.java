package videoquotes.repository.mongo;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.mongodb.repository.Query;
import videoquotes.model.Playlist;

import java.util.List;

/**
 *
 * @author yoga1290
 */
public interface PlaylistRepository extends BasicRecordRepository<Playlist> {

    @Query("{ 'name': {$regex:?0, $options:'i'}, 'quotes.$id': {$ne: ?1}, 'creatorId': ?2, 'isDeleted': false }")
    Page<Playlist> findByNameExcludingQuoteId(String name, String quoteId, String creatorId, Pageable pageable);

    @Query("{ 'name': {$regex:?0, $options:'i'}, 'creatorId': ?1, 'isDeleted': false }")
    List<Playlist> findByNameAndCreatorId(String name, String creatorId);

    @Query("{ 'creatorId': ?0, 'isDeleted': false }")
    Page<Playlist> findByCreatorId(String creatorId, Pageable pageable);
}
