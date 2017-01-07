package videoquotes.repository.mongo;

import org.springframework.stereotype.Service;
import videoquotes.model.TagName;

/**
 *
 * @author yoga1290
 */
@Service
public interface TagNameRepository extends BasicRecordRepository<TagName> {

//TODO:
//    public List<TagName> searchByTag(String tag, int offset, int limit) {
//	return find(new Query(Criteria.where("tag").regex("^(" + tag + ")")), offset, limit);
//    }
}
