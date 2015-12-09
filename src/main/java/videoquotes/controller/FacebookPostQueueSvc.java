/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package videoquotes.controller;

/**
 *
 * @author yoga1290
 */import javax.servlet.http.HttpServletResponse;
import java.util.Collection;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import videoquotes.repository.FacebookPostQueue;
import videoquotes.repository.FacebookPostQueueRepository;
import videoquotes.util.FacebookUtil;


@Controller
@RequestMapping(value="/facebookpostqueue",produces="application/json")
public class FacebookPostQueueSvc
{
	@Autowired
	private FacebookPostQueueRepository facebookPostQueues;
	@Autowired
	private FacebookUtil facebook;


	
	///*
	@RequestMapping(value="/insert", method=RequestMethod.POST)
	public @ResponseBody FacebookPostQueue insert(
						@RequestParam Long quoteId,
						@RequestParam String access_token)
	{
	    if(facebook.isAdmin(access_token))
	    {
		FacebookPostQueue facebookpostqueue=new FacebookPostQueue();
		facebookpostqueue.setQuoteId(quoteId);
		facebookpostqueue.setCreatedTime(new Date().getTime());
		return facebookPostQueues.save(facebookpostqueue);
	    }
	    return null;
	}

	//*/

}