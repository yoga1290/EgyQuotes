package videoquotes.api;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import videoquotes.model.TagName;
import videoquotes.model.repository.TagNameRepository;


@Controller
@RequestMapping(value = "/tagName", produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
@Api(value = "Tag names", description = "TagName API", tags = "TagName")
public class TagNameApi
{
    @Autowired
    TagNameRepository tagNameRepository;
    
    @RequestMapping(value = "/searchByTag", method = RequestMethod.GET)
    @ApiOperation(value = "Tag names search", notes = "Returns a list of Tag names starting with the given string [offset|limit]")
    public @ResponseBody List<TagName> searchByTag(
	    @RequestParam String tag,
	    @RequestParam(required = false, defaultValue = "0") int offset,
	    @RequestParam(required = false, defaultValue = "50") int limit) {
	return tagNameRepository.searchByTag(tag, offset, limit);
    }
}
