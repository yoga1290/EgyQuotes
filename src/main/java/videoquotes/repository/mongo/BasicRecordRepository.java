package videoquotes.repository.mongo;

import java.util.Optional;

import org.springframework.context.annotation.Profile;
import videoquotes.model.*;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.NoRepositoryBean;

/**
 *
 * @author yoga1290
 */
 @NoRepositoryBean
public interface BasicRecordRepository<T extends BasicRecord>
		extends MongoRepository<T, String> {
    
    @Query("{ 'id': ?0, 'isDeleted': false }")
    Optional<T> findById(String id);
    
    @Query("{ 'id': ?0, 'isDeleted': false }")
    T findOne(String id);
}
