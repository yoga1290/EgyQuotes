package videoquotes.repository;

import java.util.Collection;
import java.util.List;
import javax.jdo.Query;
import org.springframework.stereotype.Service;

@Service
public class QuoteOwnerRepository extends JDOCrudRepository<QuoteOwner, Long>{

	public QuoteOwnerRepository() {
		super(QuoteOwner.class);
	}
	
	
@SuppressWarnings("unchecked")
public Collection<QuoteOwner> findByQuoteId(Long quoteId){
	Query query = PMF.get().getPersistenceManager().newQuery(QuoteOwner.class);
	query.setFilter("quoteId == n");
	query.declareParameters("Long n");
	return (List<QuoteOwner>)query.execute(quoteId);
}

@SuppressWarnings("unchecked")
public Collection<QuoteOwner> findByUserId(String userId){
	Query query = PMF.get().getPersistenceManager().newQuery(QuoteOwner.class);
	query.setFilter("userId == n");
	query.declareParameters("String n");
	return (List<QuoteOwner>)query.execute(userId);
}

}
