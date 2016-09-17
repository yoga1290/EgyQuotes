package videoquotes.api;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.Authorization;
import java.security.Principal;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import videoquotes.errors.Unauthorized;
import videoquotes.model.Reaction;
import videoquotes.model.repository.ReactionRepository;
import org.springframework.security.access.annotation.Secured;

/**
 *
 * @author yoga1290
 */

@Controller
@Api(value = "Reaction", description = "Reaction API", tags = "Reactions")
//@RequestMapping(produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
public class ReactionApi {

    @Autowired
    ReactionRepository reactionRepository;

    @RequestMapping(value = "/reaction/findByQuoteId", method = RequestMethod.GET)
    @ApiOperation(value = "Returns a list of Reactions for a given QuoteId", notes = "Returns a list of Reactions for a given QuoteId [offset|limit]")
    public @ResponseBody List<Reaction> findByQuoteId(@RequestParam String quoteId,
	    @RequestParam(required = false, defaultValue = "0") int offset,
	    @RequestParam(required = false, defaultValue = "50") int limit) {
	return reactionRepository.findByQuoteId(quoteId, offset, limit);
    }

    @RequestMapping(value = "/reaction/countByQuoteId", method = RequestMethod.GET)
    @ApiOperation(value = "Returns Reactions count for a given QuoteId", notes = "Returns Reactions count for a given QuoteId")
    public @ResponseBody long countByQuoteId(@RequestParam String quoteId) {
	return reactionRepository.countByQuoteId(quoteId);
    }

    @RequestMapping(value = "/reaction/countByQuoteIdAndReaction", method = RequestMethod.GET)
    @ApiOperation(value = "Returns Reactions count for a given QuoteId and Reaction type", notes = "Returns Reactions count for a given QuoteId and Reaction type")
    public @ResponseBody long countByQuoteIdAndReaction(@RequestParam String quoteId, @RequestParam int reaction) {
	return reactionRepository.countByQuoteIdAndReaction(quoteId, reaction);
    }


    // @PreAuthorize("hasRole('USER')")
    @Secured("ROLE_USER")
    @RequestMapping(value = "/reaction", method = RequestMethod.POST)
    @ApiOperation(value = "Insert new Reaction for a given QuoteId (USER role required)", notes = "Insert new Reaction for a given QuoteId", authorizations = @Authorization("ROLE_USER"))
    public @ResponseBody Reaction insert(Principal user, @RequestParam String quoteId,
	    @RequestParam int reaction) {
	if (user == null) {
	    throw new Unauthorized();
	}
	else {
	    return reactionRepository.save(new Reaction(user, quoteId, reaction));
	}
    }
}
