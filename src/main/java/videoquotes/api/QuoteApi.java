package videoquotes.api;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.Authorization;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import videoquotes.api.dto.QuoteDTO;
import videoquotes.api.dto.SearchDTO;
import videoquotes.api.dto.trNgGridDTO;
import videoquotes.model.Channel;
import videoquotes.model.Quote;
import videoquotes.model.QuoteOwner;
import videoquotes.model.repository.ChannelRepository;
import videoquotes.model.repository.PersonRepository;
import videoquotes.model.repository.QuoteOwnerRepository;
import videoquotes.model.repository.QuoteRepository;
import videoquotes.model.repository.VideoRepository;


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
    PersonRepository personRepository;
    @Autowired
    QuoteOwnerRepository quoteOwnerRepository;
    
    @RequestMapping(value = "/list", method = RequestMethod.GET)
    @ApiOperation(value = "List Quotes [offset|limit]", notes = "List Quotes [offset|limit]")
    public @ResponseBody List<Quote> list(
	    @RequestParam(required = false, defaultValue = "0") int offset,
	    @RequestParam(required = false, defaultValue = "50") int limit) {
	return quoteRepository.find(new Query(), offset, limit);
    }
    
    @RequestMapping(method = RequestMethod.GET)
    @ApiOperation(value = "find Quote by id", notes = "find Quote by id")
    public @ResponseBody Quote findOne(
	    @RequestParam String id) {
	return quoteRepository.findById(id);
    }
    
    @RequestMapping(value = "/count", method = RequestMethod.GET)
    @ApiOperation(value = "Returns total number of Quotes", notes = "Returns total number of Quotes")
    public @ResponseBody long count() {
	return quoteRepository.count(new Query());
    }
    
    @PreAuthorize("hasRole('ROLE_USER')")
    @ApiOperation(value = "Insert new Quote (USER role required)", notes = "Insert new Quote (USER role required)", authorizations = @Authorization("ROLE_USER"))
    @RequestMapping(value = "/insert", method = RequestMethod.POST)
    public @ResponseBody Quote insert(@RequestBody QuoteDTO q) {
	Quote quote = new Quote();
	String personId = personRepository.findByIdOrInsertNew(q.getPersonId()).getId();
	String userId = SecurityContextHolder.getContext().getAuthentication().getName();
	quote.setPersonId(personId);
	quote.setStart(q.getStart());
	quote.setEnd(q.getEnd());
	quote.setVideoId(q.getVideoId());
	quote.setQuote(q.getQuote());
	
	quote.setCreatorId(userId); //TODO: if the user wants to?
	quoteRepository.save(quote);
	
	channelRepository.insert(quote);
	videoRepository.updateOrInsertVideoRecord(quote);
	quoteOwnerRepository.save(new QuoteOwner(quote.getId(), userId));
	return quote;
    }
    
    @RequestMapping(value="/grid", method=RequestMethod.POST)
    @ApiOperation(value = "Query Quotes for the grid view", notes = "Customized query for the grid view")
    public @ResponseBody List<Quote> grid(
	    @RequestBody SearchDTO query) throws Exception
    {
	return quoteRepository.search(query);
    }
	
    @RequestMapping(value = "/trNgGrid", method = RequestMethod.POST)
    @ApiOperation(value = "Query Quotes for the trNgGrid plugin", notes = "Customized query for the trNgGrid plugin")
    public @ResponseBody String query(
            @RequestBody trNgGridDTO dto,
            @RequestParam(required = false) boolean isASC,
            @RequestParam(required = false) boolean isGlobal) throws Exception
    {
        Criteria criteria=null;
        return quoteRepository.trNgGrid(
                dto,
                criteria,
                isASC,
                isGlobal).toString();
    }
    
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(value = "/updateQuoteCount", method = RequestMethod.GET)
    @ApiOperation(value = "Update Channel analytics (ADMIN role required)")
    public @ResponseBody Channel updateQuoteCount() {
	Iterator<Channel> it = channelRepository.findByLastSyncTime(0, 1).iterator();
	Channel channel = null;
	while(it.hasNext()) {
	    channel = it.next();
	    channel.setQuoteCount( quoteRepository.countByChannelId(channel.getId()) );
	    channel.setLastSyncTime(new Date().getTime());
	    channelRepository.save(channel);
	}
	return channel;
    }
    
}
