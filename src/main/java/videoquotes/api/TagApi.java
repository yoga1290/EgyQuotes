package videoquotes.api;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.Authorization;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import videoquotes.model.Tag;
import videoquotes.model.TagName;
import videoquotes.repository.mongo.TagNameRepository;
import videoquotes.repository.mongo.TagRepository;


@Controller
//@RequestMapping(produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
@Api(value = "Tag", description = "Tags API", tags = "Tag")
public class TagApi
{
    @Autowired
    TagRepository tagRepository;
    @Autowired
    TagNameRepository tagNameRepository;
    
    @RequestMapping(value = "/tag/findByQuoteId", method = RequestMethod.GET)
    @ApiOperation(value = "Returns Tags for a given QuoteId", notes = "Returns Tags for a given QuoteId [page|size]")
    public @ResponseBody List<Tag> findByQuoteId(
	    @RequestParam String quoteId,
	    @RequestParam(required = false, defaultValue = "0") int page,
	    @RequestParam(required = false, defaultValue = "10") int size) {
	return tagRepository.findByQuoteId(quoteId, new PageRequest(page, size)).getContent();
    }
    
    @PreAuthorize("hasRole('ROLE_USER')")
    @RequestMapping(value = "/tag/insert", method = RequestMethod.POST)
    @ApiOperation(value = "Insert Tag for a given QuoteId (USER)", notes = "Insert Tag for a given QuoteId", authorizations = @Authorization("ROLE_USER"))
    public @ResponseBody Tag insert(
	    @RequestParam String tag,
	    @RequestParam String quoteId) {
	
	Tag nTag = new Tag(tag, quoteId);
//	tagNameRepository.save(new TagName(tag));
	tagRepository.save(nTag);
	return nTag;
    }
    
    
    @RequestMapping(value = "/tag/find", method = RequestMethod.GET)
    @ApiOperation(value = "Search Tags", notes = "Search Tags [page|size]")
    public @ResponseBody List<Tag> findByTag(
	    @RequestParam String tag,
	    @RequestParam(required = false, defaultValue = "0") int page,
	    @RequestParam(required = false, defaultValue = "10") int size) {
	return tagRepository.findByTag(tag, new PageRequest(page, size)).getContent();
    }
}
