package videoquotes.repository.mongo;

import org.springframework.data.mongodb.repository.Query;
import videoquotes.model.User;

/**
 *
 * @author yoga1290
 */
public interface UserRepository extends BasicRecordRepository<User> {

    @Query("{ 'facebookId': ?0 }")
    User findOneByFacebookId(String facebookId);
    
    @Query("{ 'name': {$regex:?0, $options:'i'} }")
    User findOneByName(String name);

    @Query("{ 'email': ?0 }")
    User findOneByEmail(String email);
    
}
