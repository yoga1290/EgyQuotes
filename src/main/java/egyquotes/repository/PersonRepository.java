package egyquotes.repository;
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

}
