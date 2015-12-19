package videoquotes.repository;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.EntityNotFoundException;
import com.google.appengine.api.datastore.KeyFactory;
import java.util.Collection;
import java.util.List;

import javax.jdo.Query;

import org.springframework.stereotype.Service;


@Service
public class PersonRepository extends JDOCrudRepository<Person, String>{

	public PersonRepository() {
		super(Person.class);
	}
	
	
@SuppressWarnings("unchecked")
public Collection<Person> findByName(String name){
	Query query = PMF.get().getPersistenceManager().newQuery(Person.class);
	query.setFilter("name >= n");
//	query.setFilter("name < n.'\ufffd'");
	query.declareParameters("String n");
//	query.declareParameters("String n2");
	return (List<Person>)query.execute(name);//,name+"\ufffd");
}

/*
@SuppressWarnings("unchecked")
public Entity findById(String personId) throws EntityNotFoundException{
	com.google.appengine.api.datastore.DatastoreService 
		 		datastore = DatastoreServiceFactory.getDatastoreService();
	return datastore.get(KeyFactory.createKey("Person", personId));
}//*/
@SuppressWarnings("unchecked")
public Collection<Person> findById(String personId){
	Query query = PMF.get().getPersistenceManager().newQuery(Person.class);
	query.setFilter("key == n");
	query.declareParameters("String n");
	return (List<Person>)query.execute(personId);//,name+"\ufffd");
}

}
