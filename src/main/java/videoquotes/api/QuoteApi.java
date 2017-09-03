package videoquotes.api;

import com.fasterxml.jackson.annotation.JsonFormat;
import io.swagger.annotations.*;

import java.security.Principal;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.MediaType;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.annotations.ApiIgnore;
import videoquotes.api.dto.QuoteDTO;
import videoquotes.api.dto.SearchDTO;
import videoquotes.model.Person;
import videoquotes.model.Quote;
import videoquotes.repository.mongo.ChannelRepository;
import videoquotes.repository.mongo.PersonRepository;
import videoquotes.repository.mongo.QuoteRepository;
import videoquotes.repository.mongo.VideoRepository;
import videoquotes.repository.VideoSvc;

import static com.fasterxml.jackson.databind.jsonFormatVisitors.JsonValueFormat.DATE_TIME;


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
    
    @GetMapping("/query")
    @ApiOperation(value = "Query Quotes for the grid view", notes = "Customized query for the grid view")
	// https://stackoverflow.com/a/35427093
	@ApiImplicitParams({
			@ApiImplicitParam(name = "page", dataType = "integer", paramType = "query",
					value = "Results page you want to retrieve (0..N)"),
			@ApiImplicitParam(name = "size", dataType = "integer", paramType = "query",
					value = "Number of records per page."),
			@ApiImplicitParam(name = "sort", allowMultiple = true, dataType = "string", paramType = "query",
					value = "Sorting criteria in the format: property(,asc|desc). " +
							"Default sort order is ascending. " +
							"Multiple sort criteria are supported.")
	})
    public @ResponseBody
	Page<Quote> search(
		@ApiParam("tags")
		@RequestParam(required = false, defaultValue = "", name = "t") List<String> tag,
		@ApiParam("personId(s)")
		@RequestParam(required = false, defaultValue = "", name = "p") List<String> personId,
		@ApiParam("ChannelId(s)")
		@RequestParam(required = false, defaultValue = "", name = "c") List<String> channelId,

//		http://wiki.fasterxml.com/JacksonFAQDateHandling#Date_Deserialization
//		@JsonFormat(shape=JsonFormat.Shape.NUMBER, pattern="s")
//		@RequestParam(required = false, defaultValue = "0") Date start,
		@ApiParam("Start date (unix time)")
		@RequestParam(required = false, defaultValue = "0") Long startdate,
		@ApiParam("End date (unix time)")
		@RequestParam(required = false, defaultValue = Long.MAX_VALUE+"") Long enddate,

		@ApiIgnore
		Pageable pageable) throws Exception
    {

		Date start = new Date(startdate);
		Date end = new Date(enddate);
	//TODO: search by tags
	if (!personId.isEmpty()
		&& !channelId.isEmpty()) {
	    return quoteRepository
		    .findByAuthorAndChannelIdAndTimespan(
		    personId,
			channelId,
			start,
			end,
			pageable
		    );
	} else if (!personId.isEmpty()) {
	    return quoteRepository
		    .findByAuthorsAndTimespan(
					personId,
					start,
			end,
			pageable
		    );
	} else if (!channelId.isEmpty()) {
	    return quoteRepository
		    .findByAuthorsAndTimespan(
			channelId,
			start,
			end,
			pageable
		    );
	} else {
	    return quoteRepository
		    .findWithinTimespan(
			start,
			end,
			pageable
		    );
	}
	
    }


	@RequestMapping(value="/search", method=RequestMethod.POST)
	@ApiOperation(value = "Query Quotes for the grid view", notes = "Customized query for the grid view")
	public @ResponseBody List<Quote> osearch(
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
