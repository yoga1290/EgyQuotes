package videoquotes.repository.mongo;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.mongodb.repository.Query;
import videoquotes.model.Person;

/**
 *
 * @author yoga1290
 */

public interface PersonRepository extends BasicRecordRepository<Person> {
    
    @Query("{ 'name':{$regex:?0, $options:'i'}}")
    Slice<Person> findByName(String name, Pageable pageable);

}

