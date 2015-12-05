/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package videoquotes.repository;
import java.util.Collection;
import java.util.List;
import javax.jdo.Query;
import org.springframework.stereotype.Service;

@Service
public class FacebookPostRepository extends JDOCrudRepository<FacebookPost, String>{

	public FacebookPostRepository() {
		super(FacebookPost.class);
	}
        
@SuppressWarnings("unchecked")
public Collection<FacebookPost> findByFbid(String fbid){
    Query query = PMF.get().getPersistenceManager().newQuery(FacebookPost.class);
    query.setFilter("fbid == n");
    query.declareParameters("String n");
    return (List<FacebookPost>)query.execute(fbid);
}

@SuppressWarnings("unchecked")
public Collection<FacebookPost> findByQuoteId(String quoteId){
    Query query = PMF.get().getPersistenceManager().newQuery(FacebookPost.class);
    query.setFilter("quoteId == n");
    query.declareParameters("String n");
    return (List<FacebookPost>)query.execute(quoteId);
}

@SuppressWarnings("unchecked")
public Collection<FacebookPost> findByLastSync(Long lastSync){
    Query query = PMF.get().getPersistenceManager().newQuery(FacebookPost.class);
    query.setFilter("lastSync == n");
    query.declareParameters("Long n");
    return (List<FacebookPost>)query.execute(lastSync);
}

@SuppressWarnings("unchecked")
public Collection<FacebookPost> findByLikes(Long likes){
    Query query = PMF.get().getPersistenceManager().newQuery(FacebookPost.class);
    query.setFilter("likes == n");
    query.declareParameters("Long n");
    return (List<FacebookPost>)query.execute(likes);
}

@SuppressWarnings("unchecked")
public Collection<FacebookPost> findByShares(Long shares){
    Query query = PMF.get().getPersistenceManager().newQuery(FacebookPost.class);
    query.setFilter("shares == n");
    query.declareParameters("Long n");
    return (List<FacebookPost>)query.execute(shares);
}

@SuppressWarnings("unchecked")
public Collection<FacebookPost> findByNeedSync(int offset,int limit){
    Query query = PMF.get().getPersistenceManager().newQuery(FacebookPost.class);
	query.setOrdering("lastSync asc");
	query.setRange(offset, offset+limit);
    return (List<FacebookPost>)query.execute();
}

@SuppressWarnings("unchecked")
public Collection<FacebookPost> findByTopLikes(int offset,int limit){
    Query query = PMF.get().getPersistenceManager().newQuery(FacebookPost.class);
	query.setOrdering("likes desc");
	query.setRange(offset, offset+limit);
    return (List<FacebookPost>)query.execute();
}

@SuppressWarnings("unchecked")
public Collection<FacebookPost> findByTopShares(int offset,int limit){
    Query query = PMF.get().getPersistenceManager().newQuery(FacebookPost.class);
	query.setOrdering("shares desc");
	query.setRange(offset, offset+limit);
    return (List<FacebookPost>)query.execute();
}

}

