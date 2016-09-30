package videoquotes.api;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.Authorization;
import io.swagger.annotations.AuthorizationScope;
import java.security.Principal;
import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.MediaType;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import videoquotes.api.dto.QuoteDTO;
import videoquotes.api.dto.SearchDTO;
import videoquotes.model.Person;
import videoquotes.model.Quote;
import videoquotes.repository.mongo.ChannelRepository;
import videoquotes.repository.mongo.PersonRepository;
import videoquotes.repository.mongo.QuoteRepository;
import videoquotes.repository.mongo.VideoRepository;
import videoquotes.repository.VideoSvc;


@Controller
@Api(value = "Quotes", description = "Quotes", tags = "Quotes")
@RequestMapping(value = "/Quote", produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
public class QuoteApi
{
    @Autowired
    QuoteRepository quoteRepository;
    @Autowired
    ChannelRepository channelRepository;
    @Autowired
    VideoRepository videoRepository;
    
    @Autowired
    VideoSvc videoSvc;
    
    @Autowired
    PersonRepository personRepository;
    
    @RequestMapping(value = "/list", method = RequestMethod.GET)
    @ApiOperation(value = "List Quotes [page|size]", notes = "List Quotes [page|size]")
    public @ResponseBody List<Quote> list(
	    @RequestParam(required = false, defaultValue = "0") int page,
	    @RequestParam(required = false, defaultValue = "1") int size) {
	return quoteRepository.findAllByPerson(new PageRequest(page, size)).getContent();
    }
    
    @RequestMapping(value = "", method = RequestMethod.GET)
    @ApiOperation(value = "find Quote by id", notes = "find Quote by id")
    public @ResponseBody Quote findOne(
	    @RequestParam String id) {
	return quoteRepository.findOne(id);
    }
    
    @RequestMapping(value = "/count", method = RequestMethod.GET)
    @ApiOperation(value = "Returns total number of Quotes", notes = "Returns total number of Quotes")
    public @ResponseBody long count() {
	return quoteRepository.count();
    }
    
     @Secured("ROLE_USER")
//    @PreAuthorize("hasRole('USER')")
//    @Authorization(value = "user_auth", scopes = @AuthorizationScope(scope = "read", description = "reads"))
    @ApiOperation(value = "Insert new Quote (USER role required)", notes = "Insert new Quote (USER role required)", authorizations = @Authorization("ROLE_USER"))
    @RequestMapping(value = "/insert", method = RequestMethod.POST)
    public @ResponseBody Quote insert(@RequestBody QuoteDTO q, Principal user) {
	Quote quote = new Quote();
	
	Person person = personRepository.findOne(q.getPersonId());
	if (person == null) {
	    person = personRepository.save(new Person(q.getPersonId()));
	}
	
	
	//TODO:
	String userId = user.getName();
	quote.setCreatorId(userId);
	quote.setPerson(person);
	quote.setStart(q.getStart());
	quote.setEnd(q.getEnd());
	quote.setQuote(q.getQuote());
	
	quoteRepository.save(quote);

	videoSvc.updateOrInsertVideoRecord(quote, q.getVideoId());
	
	return quote;
    }
    
    @RequestMapping(value="/search", method=RequestMethod.POST)
    @ApiOperation(value = "Query Quotes for the grid view", notes = "Customized query for the grid view")
    public @ResponseBody List<Quote> search(
	    @RequestBody SearchDTO query) throws Exception
    {
	int page = query.getPage();
	int size = query.getSize();
	//TODO: search by tags
	if (!query.getPersonIds().isEmpty()
		&& !query.getChannelIds().isEmpty()) {
	    System.out.println("1");
	    return quoteRepository
		    .findByAuthorAndChannelIdAndTimespan(
			query.getPersonIds(),
			query.channelIds,
			new Date( query.getStart()),
			new Date( query.getEnd()),
			new PageRequest(page, size)
		    )
		.getContent();
	} else if (!query.getPersonIds().isEmpty()) {
	    System.out.println("2");
	    return quoteRepository
		    .findByAuthorsAndTimespan(
			query.getPersonIds(),
			new Date( query.getStart()),
			new Date( query.getEnd()),
			new PageRequest(page, size)
		    )
		.getContent();
	} else if (!query.getChannelIds().isEmpty()) {
	    System.out.println("3");
	    return quoteRepository
		    .findByAuthorsAndTimespan(
			query.getChannelIds(),
			new Date( query.getStart()),
			new Date( query.getEnd()),
			new PageRequest(page, size)
		    )
		.getContent();
	} else {
	    System.out.println("4");
	    return quoteRepository
		    .findWithinTimespan(
			new Date( query.getStart()),
			new Date( query.getEnd()),
			new PageRequest(page, size)
		    )
		.getContent();
	}
	
    }
    
	
//    @RequestMapping(value = "/trNgGrid", method = RequestMethod.POST)
//    @ApiOperation(value = "Query Quotes for the trNgGrid plugin", notes = "Customized query for the trNgGrid plugin")
//    public @ResponseBody String query(
//            @RequestBody trNgGridDTO dto,
//            @RequestParam(required = false) boolean isASC,
//            @RequestParam(required = false) boolean isGlobal) throws Exception
//    {
//        Criteria criteria=null;
//        return quoteRepository.trNgGrid(
//                dto,
//                criteria,
//                isASC,
//                isGlobal).toString();
//    }
    
//    @PreAuthorize("hasRole('ROLE_ADMIN')")
//    @RequestMapping(value = "/updateQuoteCount", method = RequestMethod.GET)
//    @ApiOperation(value = "Update Channel analytics (ADMIN role required)")
//    public @ResponseBody Channel updateQuoteCount() {
//	Iterator<Channel> it = channelRepository.findAllOrderByLastsynctimeDesc(new Date().getTime(), new PageRequest(0, 1)).iterator();
//	Channel channel = null;
//	while(it.hasNext()) {
//	    channel = it.next();
//	    channel.setQuoteCount( quoteRepository.countByChannelid(channel.getId()) );
//	    channel.setLastSyncTime(new Date().getTime());
//	    channelRepository.save(channel);
//	}
//	return channel;
//    }
    
}
