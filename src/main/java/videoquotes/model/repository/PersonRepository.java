/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package videoquotes.model.repository;

import java.util.List;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;
import videoquotes.model.Person;
import videoquotes.model.Quote;
import videoquotes.model.Video;
import videoquotes.util.YoutubeUtil;

/**
 *
 * @author yoga1290
 */
@Service
public class PersonRepository extends BasicRecordRepository<Person> {
    
    public PersonRepository() {
	super(Person.class);
    }
    
    public List<Person> findByName(String name, int offset, int limit) {
	return find(new Query(Criteria.where("name").regex(name)), offset, limit);
    }
    
    public Person findByIdOrInsertNew(String name) {
	List<Person> result = find(new Query(Criteria.where("name").regex(name)), 0, 1);
	if (result.size() > 0) {
	    return result.get(0);
	} else {
	    return save(new Person(name));
	}
    }
    
}
