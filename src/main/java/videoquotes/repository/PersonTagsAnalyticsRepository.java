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
public class PersonTagsAnalyticsRepository extends JDOCrudRepository<PersonTagsAnalytics, String>{

	public PersonTagsAnalyticsRepository() {
		super(PersonTagsAnalytics.class);
	}
        
@SuppressWarnings("unchecked")
public Collection<PersonTagsAnalytics> findByTagId(String tagId){
    Query query = PMF.get().getPersistenceManager().newQuery(PersonTagsAnalytics.class);
    query.setFilter("tagId == n");
    query.declareParameters("String n");
    return (List<PersonTagsAnalytics>)query.execute(tagId);
}

@SuppressWarnings("unchecked")
public Collection<PersonTagsAnalytics> findByPersonId(String personId){
    Query query = PMF.get().getPersistenceManager().newQuery(PersonTagsAnalytics.class);
    query.setFilter("personId == n");
    query.declareParameters("String n");
    return (List<PersonTagsAnalytics>)query.execute(personId);
}

@SuppressWarnings("unchecked")
public Collection<PersonTagsAnalytics> findByValue(String value){
    Query query = PMF.get().getPersistenceManager().newQuery(PersonTagsAnalytics.class);
    query.setFilter("value == n");
    query.declareParameters("String n");
    return (List<PersonTagsAnalytics>)query.execute(value);
}

@SuppressWarnings("unchecked")
public Collection<PersonTagsAnalytics> findByLastSync(Long lastSync){
    Query query = PMF.get().getPersistenceManager().newQuery(PersonTagsAnalytics.class);
    query.setFilter("lastSync == n");
    query.declareParameters("Long n");
    return (List<PersonTagsAnalytics>)query.execute(lastSync);
}

@SuppressWarnings("unchecked")
public Collection<PersonTagsAnalytics> findByNeedSync(int offset,int limit){
    Query query = PMF.get().getPersistenceManager().newQuery(PersonTagsAnalytics.class);
	query.setOrdering("lastSync asc");
	query.setRange(offset, offset+limit);
    return (List<PersonTagsAnalytics>)query.execute();
}

}

