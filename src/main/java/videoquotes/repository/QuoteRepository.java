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
import com.google.appengine.api.datastore.KeyFactory;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query.CompositeFilterOperator;
import com.google.appengine.api.datastore.Query.Filter;
import com.google.appengine.api.datastore.Query.FilterOperator;
import com.google.appengine.api.datastore.Query.FilterPredicate;
import com.google.appengine.api.datastore.Query.SortDirection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.Map;

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

@SuppressWarnings("unchecked")
public Collection<Quote> findByPersonId(String personId){
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

@SuppressWarnings("unchecked")
public List<Quote> findByTags(List<String> Tags,List<String> personIds,int offset,int limit){
	
        com.google.appengine.api.datastore.DatastoreService
		datastore = DatastoreServiceFactory.getDatastoreService();
	com.google.appengine.api.datastore.Query
		qQuotes = new com.google.appengine.api.datastore.Query("Quote");
	List<com.google.appengine.api.datastore.Key> quoteIds=new LinkedList<com.google.appengine.api.datastore.Key>();
	if(Tags.size()>0)
	{
	    com.google.appengine.api.datastore.Query
		    qTags = new com.google.appengine.api.datastore.Query("Tag");
	    qTags.setFilter(new FilterPredicate("tag", FilterOperator.IN, Tags));
	    List<Entity>  tags= datastore.prepare(qTags).asList(FetchOptions.Builder.withLimit(100));
	    Iterator<Entity> it=tags.iterator();
	    while(it.hasNext())
		quoteIds.add( KeyFactory.createKey("Quote", new Long( ""+ it.next().getProperty("quoteId")) ));
	}
	
	
	if(personIds.size()>0 && quoteIds.size()>0)
	{
	    Filter tagFilter=new FilterPredicate(Entity.KEY_RESERVED_PROPERTY, FilterOperator.IN, quoteIds);
	    Filter personFilter=new FilterPredicate("personId", FilterOperator.IN, personIds);
	    qQuotes.setFilter(CompositeFilterOperator.and(tagFilter,personFilter));
	}
	else if(personIds.size()>0)
	{
	    Filter personFilter=new FilterPredicate("personId", FilterOperator.IN, personIds);
	    qQuotes.setFilter(personFilter);
	}
	else if(quoteIds.size()>0)
	{
	    Filter personFilter=new FilterPredicate(Entity.KEY_RESERVED_PROPERTY, FilterOperator.IN, quoteIds);
	    qQuotes.setFilter(personFilter);
	}
	
	
	
	return (List) datastore.prepare(qQuotes).asList(FetchOptions.Builder.withOffset(offset).limit(limit));
}

}
