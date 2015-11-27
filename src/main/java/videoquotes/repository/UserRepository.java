package videoquotes.repository;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Collection;
import java.util.List;

import javax.jdo.Query;

import org.springframework.stereotype.Service;

import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.FetchOptions;
import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.PreparedQuery;
import videoquotes.util.FacebookUtil;

@Service
public class UserRepository extends JDOCrudRepository<User, String>{

	public UserRepository() {
		super(User.class);
	}
	
	
	@SuppressWarnings("unchecked")
	public Collection<User> findById(String id){
		Query query = PMF.get().getPersistenceManager().newQuery(User.class);
		query.setFilter("id == n");
		query.declareParameters("String n");
		return (List<User>)query.execute(id);
	}
}
