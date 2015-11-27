/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package videoquotes.repository;

/**
 *
 * @author yoga1290
 */
import java.util.Collection;
import java.util.List;
import javax.jdo.Query;
import org.springframework.stereotype.Service;

@Service
public class FacebookPostQueueRepository extends JDOCrudRepository<FacebookPostQueue, Long>{

	public FacebookPostQueueRepository() {
		super(FacebookPostQueue.class);
	}
        
@SuppressWarnings("unchecked")
public Collection<FacebookPostQueue> findById(Long id){
    Query query = PMF.get().getPersistenceManager().newQuery(FacebookPostQueue.class);
    query.setFilter("id == n");
    query.declareParameters("Long n");
    return (List<FacebookPostQueue>)query.execute(id);
}

@SuppressWarnings("unchecked")
public Collection<FacebookPostQueue> findByQuoteId(String quoteId){
    Query query = PMF.get().getPersistenceManager().newQuery(FacebookPostQueue.class);
    query.setFilter("quoteId == n");
    query.declareParameters("String n");
    return (List<FacebookPostQueue>)query.execute(quoteId);
}

@SuppressWarnings("unchecked")
public Collection<FacebookPostQueue> findByCreatedTime(Long createdTime){
    Query query = PMF.get().getPersistenceManager().newQuery(FacebookPostQueue.class);
    query.setFilter("createdTime == n");
    query.declareParameters("Long n");
    return (List<FacebookPostQueue>)query.execute(createdTime);
}

@SuppressWarnings("unchecked")
public Collection<FacebookPostQueue> findByTopId(int offset,int limit){
    Query query = PMF.get().getPersistenceManager().newQuery(FacebookPostQueue.class);
	query.setOrdering("id desc");
	query.setRange(offset, offset+limit);
    return (List<FacebookPostQueue>)query.execute();
}

@SuppressWarnings("unchecked")
public Collection<FacebookPostQueue> findByTimeOrder(int offset,int limit){
    Query query = PMF.get().getPersistenceManager().newQuery(FacebookPostQueue.class);
	query.setOrdering("createdTime asc");
	query.setRange(offset, offset+limit);
    return (List<FacebookPostQueue>)query.execute();
}

}

