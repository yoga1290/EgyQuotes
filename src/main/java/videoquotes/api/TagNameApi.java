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
import videoquotes.model.Tag;
import videoquotes.model.TagName;
import videoquotes.repository.mongo.TagNameRepository;
import videoquotes.repository.mongo.TagRepository;


@Controller
@RequestMapping(value = "/tagName", produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
@Api(value = "Tag names", description = "TagName API", tags = "TagName")
public class TagNameApi
{
    @Autowired
    TagNameRepository tagNameRepository;
    
    @Autowired
    TagRepository tagRepository;
    
    @RequestMapping(value = "/searchByTag", method = RequestMethod.GET)
    @ApiOperation(value = "Tag names search", notes = "Returns a list of Tag names starting with the given string [offset|limit]")
    public @ResponseBody List<Tag> searchByTag(
	    @RequestParam String tag,
	    @RequestParam(required = false, defaultValue = "0") int page,
	    @RequestParam(required = false, defaultValue = "10") int size) {
	return tagRepository.findByTag(tag, new PageRequest(page, size)).getContent();
    }
}
