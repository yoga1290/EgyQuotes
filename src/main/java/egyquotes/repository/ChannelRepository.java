package egyquotes.repository;

import java.util.Collection;
import java.util.List;
import javax.jdo.Query;
import org.springframework.stereotype.Service;

@Service
public class ChannelRepository extends JDOCrudRepository<Channel, String>{

	public ChannelRepository() {
		super(Channel.class);
	}
	
	
@SuppressWarnings("unchecked")
public Collection<Channel> findByChannelId(String channelId){
	Query query = PMF.get().getPersistenceManager().newQuery(Channel.class);
	query.setFilter("channelId == n");
	query.declareParameters("String n");
	return (List<Channel>)query.execute(channelId);
}

}
