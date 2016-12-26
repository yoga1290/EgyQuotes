package videoquotes.api;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import java.security.Principal;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.MediaType;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import videoquotes.api.dto.PlaylistDTO;
import videoquotes.errors.Unauthorized;
import videoquotes.model.Playlist;
import videoquotes.repository.mongo.PlaylistRepository;

/**
 *
 * @author yoga1290
 */
@Controller
@Api(value = "Playlist", description = "Playlists", tags = "Playlists")
@RequestMapping(value = "/playlist", produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
public class PlaylistApi {
    
    @Autowired
    PlaylistRepository playlistRepository;
    
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    @ApiOperation(value = "Search for people by name", notes = "Search for people by name [offset|limit]")
    public @ResponseBody Playlist find(
	    @PathVariable String id) {
		Playlist playlist = playlistRepository.findOne(id);
		if (playlist.isPublic()) {
			return playlist;
		}
		return null;
    }

	@Secured({"ROLE_USER"})
    @RequestMapping(method = RequestMethod.GET)
    @ApiOperation(value = "Search for people by name", notes = "Search for people by name [offset|limit]")
    public @ResponseBody List<Playlist> findByNameExcludingQuoteId(
	    @RequestParam String name,
		@RequestParam String quoteId,
		Principal user,
	    @RequestParam(required = false, defaultValue = "0") int page,
	    @RequestParam(required = false, defaultValue = "50") int size) {
	return playlistRepository.findByNameExcludingQuoteId(name, quoteId, user.getName(), new PageRequest(page, size)).getContent();
    }

	@Secured({"ROLE_USER"})
    @RequestMapping(method = RequestMethod.POST)
    @ApiOperation(value = "Search for people by name", notes = "Search for people by name [offset|limit]")
    public @ResponseBody Playlist save(PlaylistDTO dto) {
		Playlist playlist = new Playlist(dto.getName(), dto.getQuotes());
		playlist = playlistRepository.save(playlist);
		return playlist;
    }

	@Secured({"ROLE_USER"})
    @RequestMapping(method = RequestMethod.PUT)
    @ApiOperation(value = "Search for people by name", notes = "Search for people by name [offset|limit]")
    public @ResponseBody Playlist update(
	    @RequestParam String id,
	    @RequestBody PlaylistDTO dto,
	    Principal user) {
	Playlist playlist = playlistRepository.findOne(id);
	if (user.getName().equals(playlist.getCreatorId())) {
	    playlist.setName(dto.getName());
	    playlist.setQuotes(dto.getQuotes());
	    return playlistRepository.save(playlist);
	}
	throw new Unauthorized();
    }
}
