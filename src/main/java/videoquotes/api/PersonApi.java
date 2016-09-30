package videoquotes.api;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import videoquotes.model.Person;
import videoquotes.repository.mongo.PersonRepository;


@Controller
@Api(value = "People", description = "Query people", tags = "People")
@RequestMapping(value = "/person", produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
public class PersonApi
{
    @Autowired
    PersonRepository personRepository;
        
    
    @RequestMapping(value = "/find", method = RequestMethod.GET)
    @ApiOperation(value = "Search for people by name", notes = "Search for people by name [offset|limit]")
    public @ResponseBody List<Person> findByName(
	    @RequestParam String name,
	    @RequestParam(required = false, defaultValue = "0") int page,
	    @RequestParam(required = false, defaultValue = "50") int size) {
	return personRepository.findByName(name, new PageRequest(page, size)).getContent();
    }
}
