package videoquotes.repository.mongo;

import java.util.List;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Service;
import videoquotes.model.Person;
import videoquotes.model.Quote;
import videoquotes.model.Video;
import videoquotes.util.YoutubeUtil;

/**
 *
 * @author yoga1290
 */

public interface PersonRepository extends BasicRecordRepository<Person> {
    
    @Query("{ 'name':{$regex:?0, $options:'i'}}")
    Slice<Person> findByName(String name, Pageable pageable);

}

