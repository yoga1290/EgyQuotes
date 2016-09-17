/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package videoquotes.api;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.Authorization;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import videoquotes.model.Channel;
import videoquotes.model.repository.ChannelRepository;
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

    @ApiOperation(value = "Get a list of Channels")
    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public @ResponseBody List<Channel> list(@RequestParam(required = false, defaultValue = "0") int offset,
	    @RequestParam(required = false, defaultValue = "50") int limit) {
	return channelRepository.list(offset, limit);
    }
    
    @ApiOperation(
	  value = "findByChannelId",
	  notes = "findByChannelId")
    @RequestMapping(value = "/findByChannelId", method = RequestMethod.GET)
    public @ResponseBody Channel findByChannelId(@RequestParam String channelId) {
	return channelRepository.findById(channelId);
    }
    
    @ApiOperation(
	  value = "Query Channels by name",
	  notes = "Query Channels by name")
    @RequestMapping(value = "/searchByName", method = RequestMethod.GET)
    public @ResponseBody List<Channel> searchByName(
	    @RequestParam String name,
	    @RequestParam(required = false, defaultValue = "0") int offset,
	    @RequestParam(required = false, defaultValue = "50") int limit) {
	return channelRepository.find(new Query().addCriteria(Criteria.where("name").regex("(.)*(" + name + ")+(.)*")), offset, limit);
    }
    
    @ApiOperation(
	  value = "Insert new Channel (requires ADMIN role)",
	  notes = "Insert new Channel (requires ADMIN role)",
	  authorizations = @Authorization("ROLE_ADMIN"))
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(value = "/insert", method = RequestMethod.POST)
    public @ResponseBody Channel insertChannel(@RequestParam String channelId) {
	Channel channel = new Channel();
	channel.setId(channelId);
	channel.setName(YoutubeUtil.getChannelName(channelId));
	return channelRepository.save(channel);
    }
}
