package videoquotes.controller;

import java.util.Collection;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import videoquotes.repository.FBUser;
import videoquotes.repository.FBUserRepository;
import videoquotes.repository.Person;
import videoquotes.repository.PersonRepository;

@Controller
public class PersonSvc
{
	@Autowired
	private PersonRepository Persons;
	@Autowired
	private FBUserRepository users;


	@RequestMapping(value="/people",produces="application/json", method=RequestMethod.GET)
	public @ResponseBody Collection<Person> getPersonList(@RequestParam int offset,@RequestParam int limit){
		return Persons.findAll(offset,limit);
	}
	
	@RequestMapping(value="/person",produces="application/json", method=RequestMethod.GET)
	public @ResponseBody Person findOne(@RequestParam String id)
	{
		return Persons.findOne(id);
	}
	@RequestMapping(value="/person/find",produces="application/json;charset=UTF-8" , method=RequestMethod.GET)
	public @ResponseBody Collection<Person> findByName(@RequestParam String name)
	{
		return Persons.find(name,"name",true,0,100);
	}

	@RequestMapping(value="/person",produces="application/json", method=RequestMethod.POST)
	public @ResponseBody Person set(@RequestParam String name,@RequestParam String access_token,HttpServletResponse response) throws Exception
	{
		FBUser user=null;
		try{
			user=users.findByAccessToken(access_token);
		}catch(Exception ew){
			response.sendError(404, ew.getLocalizedMessage() );
			return null;
		}
		
		Person nPerson=new Person(name);
		return Persons.save(nPerson);
	}

}
	