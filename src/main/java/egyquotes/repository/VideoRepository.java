package egyquotes.repository;
import java.util.Collection;
import java.util.List;
import javax.jdo.Query;
import org.springframework.stereotype.Service;

@Service
public class VideoRepository extends JDOCrudRepository<Video, String>{

	public VideoRepository() {
		super(Video.class);
	}
	
	
@SuppressWarnings("unchecked")
public Collection<Video> findByVideoId(String videoId){
	Query query = PMF.get().getPersistenceManager().newQuery(Video.class);
	query.setFilter("videoId == n");
	query.declareParameters("String n");
	return (List<Video>)query.execute(videoId);
}


}
