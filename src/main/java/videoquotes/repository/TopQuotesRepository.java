package videoquotes.repository;
import java.util.Collection;
import java.util.List;
import javax.jdo.Query;
import org.springframework.stereotype.Service;

@Service
public class TopQuotesRepository extends JDOCrudRepository<TopQuotes, String>{

	public TopQuotesRepository() {
		super(TopQuotes.class);
	}

	
@SuppressWarnings("unchecked")
public Collection<TopQuotes> findByQuoteId(String quoteId){
	Query query = PMF.get().getPersistenceManager().newQuery(TopQuotes.class);
	query.setFilter("quoteId == n");
	query.declareParameters("String n");
	return (List<TopQuotes>)query.execute(quoteId);
}

@SuppressWarnings("unchecked")
public Collection<TopQuotes> findByCount(String count){
	Query query = PMF.get().getPersistenceManager().newQuery(TopQuotes.class);
	query.setFilter("count == n");
	query.declareParameters("String n");
	return (List<TopQuotes>)query.execute(count);
}

@SuppressWarnings("unchecked")
public Collection<TopQuotes> findByLastSync(Long lastSync){
	Query query = PMF.get().getPersistenceManager().newQuery(TopQuotes.class);
	query.setFilter("lastSync == n");
	query.declareParameters("Long n");
	return (List<TopQuotes>)query.execute(lastSync);
}

}

