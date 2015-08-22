package videoquotes.repository;


import videoquotes.repository.*;
import java.util.Collection;
import java.util.List;
import javax.jdo.Query;
import org.springframework.stereotype.Service;

@Service
public class TagRepository extends JDOCrudRepository<Tag, Long>{

	public TagRepository() {
		super(Tag.class);
	}

	
@SuppressWarnings("unchecked")
public Collection<Tag> findById(long id){
	Query query = PMF.get().getPersistenceManager().newQuery(Tag.class);
	query.setFilter("id == n");
	query.declareParameters("String n");
	return (List<Tag>)query.execute(id);
}

@SuppressWarnings("unchecked")
public Collection<Tag> findByQuoteId(String quoteId){
	Query query = PMF.get().getPersistenceManager().newQuery(Tag.class);
	query.setFilter("quoteId == n");
	query.declareParameters("String n");
	return (List<Tag>)query.execute(quoteId);
}

}

