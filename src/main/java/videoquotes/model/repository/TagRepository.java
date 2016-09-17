/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package videoquotes.model.repository;

import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;
import videoquotes.model.Tag;

/**
 *
 * @author yoga1290
 */
@Service
public class TagRepository extends BasicRecordRepository<Tag> {
    
    public TagRepository() {
	super(Tag.class);
    }
    
    public List<String> findQuoteIdByTag(List<String> tags, int offset, int limit) {
	List<String> result = new LinkedList<String>();
	Iterator<Tag> it = find(new Query(Criteria.where("tag").in(tags)), offset, limit).iterator();
	while(it.hasNext())
	    result.add(it.next().getQuoteId());
	return result;
    }
    
    public List<String> findQuoteIdByQuoteIdAndTag(List<String> quoteId, List<String> tags, int offset, int limit) {
	List<String> result = new LinkedList<String>();
	Iterator<Tag> it = find(new Query()
		.addCriteria(Criteria.where("tag").in(tags))
		.addCriteria(Criteria.where("quoteId").in(quoteId)), offset, limit).iterator();
	while(it.hasNext())
	    result.add(it.next().getQuoteId());
	return result;
    }
    
    public List<Tag> findByQuoteId(String quoteId, int offset, int limit) {
	return find(new Query(Criteria.where("quoteId").is(quoteId)), offset, limit);
    }
    
    public List<Tag> findByTag(String tag, int offset, int limit) {
	return find(new Query(Criteria.where("tag").is(tag)), offset, limit);
    }
}
