package videoquotes.repository;


import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.FetchOptions;
import com.google.appengine.api.datastore.KeyFactory;
import videoquotes.repository.*;
import java.util.Collection;
import java.util.List;
import javax.jdo.Query;
import org.springframework.stereotype.Service;

@Service
public class TagNameRepository extends JDOCrudRepository<TagName, Long>{

	public TagNameRepository() {
		super(TagName.class);
	}

	
@SuppressWarnings("unchecked")
public List searchByTag(String tag,int offset,int limit){
	com.google.appengine.api.datastore.DatastoreService
		datastore = DatastoreServiceFactory.getDatastoreService();
	
	
	com.google.appengine.api.datastore.Query.Filter 
		startWithFilter1=new com.google.appengine.api.datastore.Query.FilterPredicate(Entity.KEY_RESERVED_PROPERTY, com.google.appengine.api.datastore.Query.FilterOperator.GREATER_THAN_OR_EQUAL, KeyFactory.createKey("TagName", tag));
	com.google.appengine.api.datastore.Query.Filter 
		startWithFilter2=new com.google.appengine.api.datastore.Query.FilterPredicate(Entity.KEY_RESERVED_PROPERTY, com.google.appengine.api.datastore.Query.FilterOperator.LESS_THAN, KeyFactory.createKey("TagName", tag+ "\ufffd"));
	
	com.google.appengine.api.datastore.Query
		qTagName = new com.google.appengine.api.datastore.Query("TagName").setKeysOnly();
	
	qTagName.setFilter(com.google.appengine.api.datastore.Query.CompositeFilterOperator.and(startWithFilter1,startWithFilter2));
	
	return (List) datastore.prepare(qTagName).asList(FetchOptions.Builder.withOffset(offset).limit(limit));
}

}

