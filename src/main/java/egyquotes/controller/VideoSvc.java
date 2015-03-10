package egyquotes.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import egyquotes.repository.Video;
import egyquotes.repository.VideoRepository;


@Controller
public class VideoSvc
{
	@Autowired
	private VideoRepository Videos;
	
	@RequestMapping(value="/video",produces="application/json", method=RequestMethod.GET)
	public @ResponseBody Video get(@RequestParam String id){
		return Videos.findOne(id);
	}

}
