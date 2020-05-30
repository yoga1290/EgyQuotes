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
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.annotations.ApiIgnore;
import videoquotes.model.BasicRecord;
import videoquotes.model.Person;
import videoquotes.model.Quote;
import videoquotes.repository.mongo.ChannelRepository;
import videoquotes.repository.mongo.PersonRepository;
import videoquotes.repository.mongo.QuoteRepository;
import videoquotes.repository.mongo.VideoRepository;
import videoquotes.repository.VideoSvc;

import javax.validation.Valid;

import static com.fasterxml.jackson.databind.jsonFormatVisitors.JsonValueFormat.DATE_TIME;


@Controller
@Api(value = "Quotes", description = "Quotes", tags = "Quotes")
@RequestMapping(value = "/Quote", produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
public class QuoteApi {
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
    
    @GetMapping("/list")
    @ApiOperation(value = "List Quotes [page|size]", notes = "List Quotes [page|size]")
    public @ResponseBody List<Quote> list(
	    @RequestParam(required = false, defaultValue = "0") int page,
	    @RequestParam(required = false, defaultValue = "1") int size) {
	return quoteRepository.findAllByPerson(PageRequest.of(page, size)).getContent();
    }

	@DeleteMapping
	@Secured("ROLE_USER")
	@ApiOperation("Delete Quote")
	public @ResponseBody Quote delete(@RequestParam String id, @ApiIgnore Principal user) {
		Quote quote = quoteRepository.findById(id).orElse(new Quote());
		if ( quote.getCreatorId().equals(user.getName()) ) {
			quote.setDeleted(true);
			quote = quoteRepository.save(quote);
			return quote;
		}
		return null;
	}
    
    @GetMapping
    @ApiOperation(value = "find Quote by id", notes = "find Quote by id")
    public @ResponseBody Quote findOne(
	    @RequestParam String id) {
	return quoteRepository.findOne(id);
    }
    
    @GetMapping("/count")
    @ApiOperation(value = "Returns total number of Quotes", notes = "Returns total number of Quotes")
    public @ResponseBody long count() {
	return quoteRepository.count();
    }

	@PostMapping
	@Secured("ROLE_USER")
	@ApiImplicitParam(name = "Authorization", dataType = "string", paramType = "header",
			value = "Access Token", example = "Bearer {{access_token}}")
    @ApiOperation(value = "Insert new Quote (USER role required)", notes = "Insert new Quote (USER role required)")
    public @ResponseBody Quote insert(@RequestBody Quote q, @ApiIgnore Principal user) {
	Quote quote = q;//new Quote();

	quote.validate(BasicRecord.POST.class);
	
	Person person = null;
	if (q.getPerson().getId() != null ) {
		person = personRepository.findOne(q.getPerson().getId());
	}
	if (person == null) {
	    person = personRepository.save(new Person(q.getPerson().getName()));
	}

	//TODO:
	String userId = user.getName();
	quote.setCreatorId(userId);
	quote.setPerson(person);
//	quote.setStart(q.getStart());
//	quote.setEnd(q.getEnd());
//	quote.setQuote(q.getQuote());
	
	quoteRepository.save(quote);

	videoSvc.updateOrInsertVideoRecord(quote, q.getVideo().getId());
	
	return quote;
    }
    
    @GetMapping("/query")
    @ApiOperation(value = "Query Quotes for the grid view", notes = "Customized query for the grid view")
	// https://stackoverflow.com/a/35427093
	@ApiImplicitParams({
			@ApiImplicitParam(name = "Authorization", dataType = "string", paramType = "header",
					value = "Bearer "),

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
    
}
