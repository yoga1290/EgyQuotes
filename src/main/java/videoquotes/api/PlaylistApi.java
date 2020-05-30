package videoquotes.api;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import java.security.Principal;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.annotations.ApiIgnore;
import videoquotes.errors.Unauthorized;
import videoquotes.model.BasicRecord;
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

	///*
    @GetMapping("/{id}")
    @ApiOperation("Search for people by name")
    public @ResponseBody Playlist find(
	    @PathVariable String id,
		@ApiIgnore Principal user) {

		Playlist playlist = playlistRepository.findOne(id);
		if (playlist.isPublic()) {
			return playlist;
		}
		return null;
    }
    //*/

	@GetMapping("/query")
	@Secured({"ROLE_USER"})
    @ApiOperation("Search for playlist by name")
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
    public @ResponseBody Page<Playlist> findByNameExcludingQuoteId(
	    @RequestParam String name,
		@RequestParam(required = false) String quoteId,
		@ApiIgnore Principal user,
		@ApiIgnore Pageable pageable) {
	return playlistRepository.findByNameExcludingQuoteId(name, quoteId, user.getName(), pageable);
    }

	@PostMapping
	@Secured({"ROLE_USER"})
    @ApiOperation("Create new playlist")
    public @ResponseBody Playlist save(@ApiIgnore Principal user, @RequestBody Playlist playlist) {

		playlist.validate(BasicRecord.POST.class);

		List<Playlist> oPlaylist = playlistRepository.findByNameAndCreatorId(playlist.getName(), user.getName());
		if (oPlaylist.size() > 0) {
			Playlist pl = oPlaylist.get(0);
			pl.getQuotes().addAll(playlist.getQuotes());
			playlistRepository.save(pl);
			return pl;
		} else {
			playlistRepository.save(playlist);
			return playlist;
		}
    }

	@PutMapping
	@Secured({"ROLE_USER"})
    @ApiOperation("Search for people by name")
    public @ResponseBody Playlist update(
	    @RequestParam String id,
	    @RequestBody Playlist dto,
		@ApiIgnore Principal user) {

		dto.validate(BasicRecord.PUT.class);
	Playlist playlist = playlistRepository.findOne(id);
		if (user.getName().equals(playlist.getCreatorId())) {
			playlist.setName(dto.getName());
			playlist.setQuotes(dto.getQuotes());
			return playlistRepository.save(playlist);
		}
		throw new Unauthorized();
    }

	@DeleteMapping
	@Secured({"ROLE_USER"})
	@ApiOperation("Search for playlist by name")
	public void deletePlaylist(
			@ApiIgnore Principal user,
			@RequestParam String id) {
		Playlist playlist = playlistRepository.findOne(id);
		if (user.getName().equals(playlist.getCreatorId())) {
			playlistRepository.delete(playlist);
		} else {
			throw new Unauthorized();
		}
	}

	@GetMapping
	@Secured({"ROLE_USER"})
	@ApiOperation("List Playlists for a given user")
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
	Page<Playlist> list(
			@ApiIgnore Principal user,
			@ApiIgnore Pageable pageable) {
		return playlistRepository.findByCreatorId(user.getName(), pageable);
	}
}
