package videoquotes.api;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.Authorization;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.MediaType;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import videoquotes.model.Channel;
import videoquotes.repository.mongo.ChannelRepository;
import videoquotes.util.YoutubeUtil;

/**
 *
 * @author yoga1290
 */

@Controller
@Api(value = "Channel", description = "Channel API", tags = "Channel")
@RequestMapping(value="/channel",produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
public class ChannelApi {
    
    @Autowired
    ChannelRepository channelRepository;
    
    @Autowired
    YoutubeUtil youtubeUtil;

    @ApiOperation(value = "Get a list of Channels")
    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public @ResponseBody List<Channel> list(@RequestParam(required = false, defaultValue = "0") int page,
	    @RequestParam(required = false, defaultValue = "50") int size) {
	return channelRepository.findAll(new PageRequest(page, size)).getContent();
    }
    
    @ApiOperation(
	  value = "findByChannelId",
	  notes = "findByChannelId")
    @RequestMapping(value = "/findByChannelId", method = RequestMethod.GET)
    public @ResponseBody Channel findByChannelId(@RequestParam String channelId) {
	return channelRepository.findOne(channelId);
    }
    
    @ApiOperation(
	  value = "Query Channels by name",
	  notes = "Query Channels by name")
    @RequestMapping(value = "/searchByName", method = RequestMethod.GET)
    public @ResponseBody List<Channel> searchByName(
	    @RequestParam String name,
	    @RequestParam(required = false, defaultValue = "0") int page,
	    @RequestParam(required = false, defaultValue = "10") int size) {
	return channelRepository.findByName(name, new PageRequest(page, size)).getContent();
    }
    
    @ApiOperation(
	  value = "Insert new Channel (requires ADMIN role)",
	  notes = "Insert new Channel (requires ADMIN role)",
	  authorizations = @Authorization("ROLE_ADMIN"))
    @Secured("ROLE_ADMIN")
    @RequestMapping(value = "/insert", method = RequestMethod.POST)
    public @ResponseBody Channel insertChannel(@RequestParam String channelId) {
	Channel channel = new Channel();
	channel.setId(channelId);
	channel.setName(youtubeUtil.getChannelName(channelId));
	return channelRepository.save(channel);
    }
}
