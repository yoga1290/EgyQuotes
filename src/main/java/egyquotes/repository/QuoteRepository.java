package egyquotes.repository;

import java.util.Collection;
import java.util.List;
import javax.jdo.Query;
import org.springframework.stereotype.Service;

@Service
public class QuoteRepository extends JDOCrudRepository<Quote, Long>{

	public QuoteRepository() {
		super(Quote.class);
	}
	
	
@SuppressWarnings("unchecked")
public Collection<Quote> findByVideoId(String videoId){
	Query query = PMF.get().getPersistenceManager().newQuery(Quote.class);
	query.setFilter("videoId == n");
	query.declareParameters("String n");
	return (List<Quote>)query.execute(videoId);
}

@SuppressWarnings("unchecked")
public Collection<Quote> findByPersonId(long personId){
	Query query = PMF.get().getPersistenceManager().newQuery(Quote.class);
	query.setFilter("personId == n");
	query.declareParameters("long n");
	return (List<Quote>)query.execute(personId);
}

@SuppressWarnings("unchecked")
public Collection<Quote> findByQuote(String quote){
	Query query = PMF.get().getPersistenceManager().newQuery(Quote.class);
	query.setFilter("quote == n");
	query.declareParameters("String n");
	return (List<Quote>)query.execute(quote);
}

@SuppressWarnings("unchecked")
public Collection<Quote> findByStart(String start){
	Query query = PMF.get().getPersistenceManager().newQuery(Quote.class);
	query.setFilter("start == n");
	query.declareParameters("String n");
	return (List<Quote>)query.execute(start);
}

@SuppressWarnings("unchecked")
public Collection<Quote> findByEnd(String end){
	Query query = PMF.get().getPersistenceManager().newQuery(Quote.class);
	query.setFilter("end == n");
	query.declareParameters("String n");
	return (List<Quote>)query.execute(end);
}

}
