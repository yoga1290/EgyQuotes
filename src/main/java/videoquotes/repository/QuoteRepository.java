package videoquotes.repository;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;

import javax.jdo.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.api.client.util.Key;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.FetchOptions;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query.CompositeFilterOperator;
import com.google.appengine.api.datastore.Query.Filter;
import com.google.appengine.api.datastore.Query.FilterOperator;
import com.google.appengine.api.datastore.Query.FilterPredicate;
import com.google.appengine.api.datastore.Query.SortDirection;

@Service
public class QuoteRepository extends JDOCrudRepository<Quote, Long>{
	
	@Autowired
	private FBUserRepository users;

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
/**
 * @author yoga1290
 */
@SuppressWarnings("unchecked")
public Collection<Quote> find(String access_token,String startWith,String selCol,boolean isAsc,int offset,int limit){
	
	long quoteIds[]=users.findByAccessToken(access_token).getQuotes();
	Filter myQuotesFilter=new FilterPredicate(Key.class.getName(), FilterOperator.IN, Arrays.asList(quoteIds));
	
	 com.google.appengine.api.datastore.DatastoreService 
	 		datastore = DatastoreServiceFactory.getDatastoreService();
	 com.google.appengine.api.datastore.Query 
	 		q = new com.google.appengine.api.datastore.Query(Quote.class.getSimpleName());
	 
	 if(selCol.length()>0)
	 {
		 q=q.addSort(selCol, isAsc ? SortDirection.ASCENDING:SortDirection.DESCENDING);
		 
		 if(startWith.length()>0)
		 {
			 Filter startWithFilter1=new FilterPredicate(selCol, FilterOperator.GREATER_THAN_OR_EQUAL, startWith);
			 Filter startWithFilter2=new FilterPredicate(selCol, FilterOperator.LESS_THAN, startWith+ "\ufffd");
			 
			 Filter startWithFilter= CompositeFilterOperator.and(startWithFilter1,startWithFilter2,myQuotesFilter);		 
			 q.setFilter(startWithFilter);
		 }
		 else
			 q.setFilter(myQuotesFilter);
	}
	 PreparedQuery pq = datastore.prepare(q);
	return (List) pq.asList(FetchOptions.Builder.withOffset(offset).limit(limit));
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
