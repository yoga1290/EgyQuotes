package videoquotes.model.repository;

import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;
import videoquotes.model.User;

/**
 *
 * @author yoga1290
 */
@Service
public class UserRepository extends BasicRecordRepository<User> {
    
    public UserRepository() {
	super(User.class);
    }
    
    public User findByFacebookId(String facebookId) {
	return findOne(new Query(Criteria.where("facebookId").is(facebookId)));
    }
    
    public User findByName(String name) {
	return findOne(new Query(Criteria.where("name").is(name)));
    }
    
}
