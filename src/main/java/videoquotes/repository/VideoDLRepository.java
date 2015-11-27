/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package videoquotes.repository;
import videoquotes.repository.*;
import java.util.Collection;
import java.util.List;
import javax.jdo.Query;
import org.springframework.stereotype.Service;

@Service
public class VideoDLRepository extends JDOCrudRepository<VideoDL, String>{

	public VideoDLRepository() {
		super(VideoDL.class);
	}

	
@SuppressWarnings("unchecked")
public Collection<VideoDL> findByVideoId(String videoId){
	Query query = PMF.get().getPersistenceManager().newQuery(VideoDL.class);
	query.setFilter("videoId == n");
	query.declareParameters("String n");
	return (List<VideoDL>)query.execute(videoId);
}

@SuppressWarnings("unchecked")
public Collection<VideoDL> findByYoutube(String youtube){
	Query query = PMF.get().getPersistenceManager().newQuery(VideoDL.class);
	query.setFilter("youtube == n");
	query.declareParameters("String n");
	return (List<VideoDL>)query.execute(youtube);
}


}

