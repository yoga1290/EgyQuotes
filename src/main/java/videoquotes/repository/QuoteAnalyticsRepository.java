package videoquotes.repository;
import com.google.appengine.api.datastore.Entity;
import java.util.Collection;
import java.util.List;
import javax.jdo.Query;
import org.springframework.stereotype.Service;


@Service
public class QuoteAnalyticsRepository extends JDOCrudRepository<QuoteAnalytics, Long>{

	public QuoteAnalyticsRepository() {
		super(QuoteAnalytics.class);
	}
        
@SuppressWarnings("unchecked")
public Collection<QuoteAnalytics> findByQuoteId(String quoteId){
    Query query = PMF.get().getPersistenceManager().newQuery(QuoteAnalytics.class);
    query.setFilter("quoteId == n");
    query.declareParameters("String n");
    return (List<QuoteAnalytics>)query.execute(quoteId);
}

@SuppressWarnings("unchecked")
public Collection<QuoteAnalytics> findByLikes(Long likes){
    Query query = PMF.get().getPersistenceManager().newQuery(QuoteAnalytics.class);
    query.setFilter("likes == n");
    query.declareParameters("Long n");
    return (List<QuoteAnalytics>)query.execute(likes);
}

@SuppressWarnings("unchecked")
public Collection<QuoteAnalytics> findByShares(Long shares){
    Query query = PMF.get().getPersistenceManager().newQuery(QuoteAnalytics.class);
    query.setFilter("shares == n");
    query.declareParameters("Long n");
    return (List<QuoteAnalytics>)query.execute(shares);
}

@SuppressWarnings("unchecked")
public Collection<QuoteAnalytics> findByLastSync(Long lastSync){
    Query query = PMF.get().getPersistenceManager().newQuery(QuoteAnalytics.class);
    query.setFilter("lastSync == n");
    query.declareParameters("Long n");
    return (List<QuoteAnalytics>)query.execute(lastSync);
}

@SuppressWarnings("unchecked")
public Collection<QuoteAnalytics> findByTopLikes(int offset,int limit){
    Query query = PMF.get().getPersistenceManager().newQuery(QuoteAnalytics.class);
	query.setOrdering("likes desc");
	query.setRange(offset, offset+limit);
    return (List<QuoteAnalytics>)query.execute();
}

@SuppressWarnings("unchecked")
public Collection<QuoteAnalytics> findByTopShares(int offset,int limit){
    Query query = PMF.get().getPersistenceManager().newQuery(QuoteAnalytics.class);
	query.setOrdering("shares desc");
	query.setRange(offset, offset+limit);
    return (List<QuoteAnalytics>)query.execute();
}

@SuppressWarnings("unchecked")
public Collection<QuoteAnalytics> findByNeedSync(int offset,int limit){
    Query query = PMF.get().getPersistenceManager().newQuery(QuoteAnalytics.class);
	query.setOrdering("lastSync asc");
	query.setRange(offset, offset+limit);
    return (List<QuoteAnalytics>) query.execute();
}

}