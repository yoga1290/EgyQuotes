package videoquotes.api;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import videoquotes.model.Video;
import videoquotes.model.repository.VideoRepository;


@Controller
@RequestMapping(value = "/api/video", produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
@Api(value = "Video", description = "Video data API", tags = "Video")
public class VideoSvc
{
    @Autowired
    VideoRepository videoRepository;
    
    @RequestMapping(method = RequestMethod.GET)
    @ApiOperation(value = "Returns Video data", notes = "Returns Video data")
    public @ResponseBody Video findById(
	    @RequestParam String id) {
	return videoRepository.findById(id);
    }
}
