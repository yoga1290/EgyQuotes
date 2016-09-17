package videoquotes.model.repository;

import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;
import videoquotes.model.Tag;
import videoquotes.model.TagName;

/**
 *
 * @author yoga1290
 */
@Service
public class TagNameRepository extends BasicRecordRepository<TagName> {
    
    public TagNameRepository() {
	super(TagName.class);
    }
    
    
    public List<TagName> searchByTag(String tag, int offset, int limit) {
	return find(new Query(Criteria.where("tag").regex("^(" + tag + ")")), offset, limit);
    }
}
