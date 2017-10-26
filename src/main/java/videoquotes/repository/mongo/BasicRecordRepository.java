package videoquotes.repository.mongo;

import org.springframework.context.annotation.Profile;
import videoquotes.model.*;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

/**
 *
 * @author yoga1290
 */
public interface BasicRecordRepository<T extends BasicRecord> extends MongoRepository<T, String> {
    
    @Query("{ 'id': ?0, 'isDeleted': false }")
    T findById(String id);
    
    @Query("{ 'id': ?0, 'isDeleted': false }")
    @Override
    T findOne(String id);
}
