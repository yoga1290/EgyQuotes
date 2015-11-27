package videoquotes.repository;

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

@SuppressWarnings("unchecked")
public Collection<Channel> findByQuotesCnt(Long quotesCnt){
    Query query = PMF.get().getPersistenceManager().newQuery(Channel.class);
    query.setFilter("quotesCnt == n");
    query.declareParameters("Long n");
    return (List<Channel>)query.execute(quotesCnt);
}

@SuppressWarnings("unchecked")
public Collection<Channel> findByLastSync(Long lastSync){
    Query query = PMF.get().getPersistenceManager().newQuery(Channel.class);
    query.setFilter("lastSync == n");
    query.declareParameters("Long n");
    return (List<Channel>)query.execute(lastSync);
}

@SuppressWarnings("unchecked")
public Collection<Channel> findByTopQuotesCnt(int offset,int limit){
    Query query = PMF.get().getPersistenceManager().newQuery(Channel.class);
	query.setOrdering("quotesCnt desc");
	query.setRange(offset, offset+limit);
    return (List<Channel>)query.execute();
}

@SuppressWarnings("unchecked")
public Collection<Channel> findByNeedSync(int offset,int limit){
    Query query = PMF.get().getPersistenceManager().newQuery(Channel.class);
	query.setOrdering("lastSync asc");
	query.setRange(offset, offset+limit);
    return (List<Channel>)query.execute();
}

}
