package videoquotes.repository.mongo;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.mongodb.repository.Query;
import videoquotes.model.Tag;

/**
 *
 * @author yoga1290
 */
public interface TagRepository extends BasicRecordRepository<Tag> {

//    Slice<String> findQuoteIdByTag(List<String> tags, int offset, int limit) {
//	List<String> result = new LinkedList<String>();
//	Iterator<Tag> it = find(new Query(Criteria.where("tag").in(tags)), offset, limit).iterator();
//	while(it.hasNext())
//	    result.add(it.next().getQuoteId());
//	return result;
//    }
//    
//    Slice<String> findQuoteIdByQuoteIdAndTag(List<String> quoteId, List<String> tags, int offset, int limit) {
//	List<String> result = new LinkedList<String>();
//	Iterator<Tag> it = find(new Query()
//		.addCriteria(Criteria.where("tag").in(tags))
//		.addCriteria(Criteria.where("quoteId").in(quoteId)), offset, limit).iterator();
//	while(it.hasNext())
//	    result.add(it.next().getQuoteId());
//	return result;
//    }
    @Query("{ 'quoteId': {$regex:?0, $options:'i'} }")
    Slice<Tag> findByQuoteId(String quoteId, Pageable pageable);
    
    @Query("{ 'tag': {$regex:?0, $options:'i'} }")
    Slice<Tag> findByTag(String tag, Pageable pageable);
}
