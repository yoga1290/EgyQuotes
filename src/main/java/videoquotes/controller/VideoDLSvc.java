/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package videoquotes.controller;
import java.io.IOException;
import java.net.URLDecoder;
import javax.servlet.http.HttpServletResponse;
import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import videoquotes.repository.VideoDL;
import videoquotes.repository.VideoDLRepository;


@Controller
@RequestMapping(value="/videodl",produces="application/json")
public class VideoDLSvc
{
	@Autowired
	private VideoDLRepository videoDLs;

	@RequestMapping(value="/video", method=RequestMethod.GET)
	public void findOne(@RequestParam String id,HttpServletResponse response) throws IOException
	{
		response.sendRedirect(URLDecoder.decode(videoDLs.findOne(id).getUrl(),"UTF-8"));
	}

	@RequestMapping(value="/insert", method=RequestMethod.GET)
	public @ResponseBody VideoDL insert(
					//@RequestBody VideoDL ovideoDL)
			@RequestParam String videoId,
			@RequestParam String url)
	{
		VideoDL videodl=new VideoDL();

		videodl.setVideoId(videoId);
				videodl.setUrl( url );
		return videoDLs.save(videodl);
	}



}