package videoquotes.repository;
import java.util.Collection;
import java.util.List;

import javax.jdo.Query;

import org.springframework.stereotype.Service;


@Service
public class pageACRepository extends JDOCrudRepository<pageAC, String>{

	public pageACRepository() {
		super(pageAC.class);
	}
	
	

}
