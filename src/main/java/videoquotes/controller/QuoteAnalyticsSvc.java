package videoquotes.controller;
import com.google.appengine.api.datastore.Entity;
import videoquotes.repository.*;
import java.util.Collection;
import java.util.List;
import javax.servlet.http.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.io.*;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import videoquotes.Credential;
import videoquotes.util.URLUtil;
@Controller
@RequestMapping(value="/quoteanalytics",produces="application/json")
public class QuoteAnalyticsSvc
{
	@Autowired
	private QuoteAnalyticsRepository QuoteAnalyticss;

	@RequestMapping(value="/list", method=RequestMethod.GET)
	public @ResponseBody Collection<QuoteAnalytics> list(@RequestParam int offset,@RequestParam int limit){
		return QuoteAnalyticss.findAll(offset,limit);
	}

	@RequestMapping(value="/", method=RequestMethod.GET)
	public @ResponseBody QuoteAnalytics findOne(@RequestParam 
Long
 id)
	{
		return QuoteAnalyticss.findOne(id);
	}

	@RequestMapping(value="/insert", method=RequestMethod.POST)
	public @ResponseBody QuoteAnalytics insert(
@RequestParam Long quoteId,
@RequestParam Long likes,
@RequestParam Long shares,
@RequestParam Long lastSync
)
	{
	    QuoteAnalytics quoteanalytics=new QuoteAnalytics();
	    quoteanalytics.setQuoteId(quoteId);
	    quoteanalytics.setLikes(likes);
	    quoteanalytics.setShares(shares);
	    quoteanalytics.setLastSync(lastSync);
		return QuoteAnalyticss.save(quoteanalytics);
	}

	@RequestMapping(value="/update/{id}", method=RequestMethod.POST)
	public @ResponseBody QuoteAnalytics update(
					
@PathVariable(value="id") Long quoteId,

@RequestParam Long likes,

@RequestParam Long shares,

@RequestParam Long lastSync
)
	{
		QuoteAnalytics quoteanalytics=QuoteAnalyticss.findOne(quoteId);

		
	quoteanalytics.setLikes(likes);

	quoteanalytics.setShares(shares);

	quoteanalytics.setLastSync(lastSync);

		return QuoteAnalyticss.update(quoteanalytics);
	}

	
@RequestMapping(value="/findByQuoteId",produces="application/json;charset=UTF-8" , method=RequestMethod.GET)
	public @ResponseBody Collection<QuoteAnalytics> findByQuoteId(@RequestParam String quoteid)
	{
		return QuoteAnalyticss.findByQuoteId(quoteid);
	}

@RequestMapping(value="/findByLikes",produces="application/json;charset=UTF-8" , method=RequestMethod.GET)
	public @ResponseBody Collection<QuoteAnalytics> findByLikes(@RequestParam long likes)
	{
		return QuoteAnalyticss.findByLikes(likes);
	}

@RequestMapping(value="/findByShares",produces="application/json;charset=UTF-8" , method=RequestMethod.GET)
	public @ResponseBody Collection<QuoteAnalytics> findByShares(@RequestParam long shares)
	{
		return QuoteAnalyticss.findByShares(shares);
	}

@RequestMapping(value="/findByLastSync",produces="application/json;charset=UTF-8" , method=RequestMethod.GET)
	public @ResponseBody Collection<QuoteAnalytics> findByLastSync(@RequestParam long lastsync)
	{
		return QuoteAnalyticss.findByLastSync(lastsync);
	}

@RequestMapping(value="/findByTopLikes",produces="application/json;charset=UTF-8" , method=RequestMethod.GET)
	public @ResponseBody Collection<QuoteAnalytics> findByTopLikes(@RequestParam int offset,@RequestParam int limit)
	{
		return QuoteAnalyticss.findByTopLikes(offset,limit);
	}

@RequestMapping(value="/findByTopShares",produces="application/json;charset=UTF-8" , method=RequestMethod.GET)
	public @ResponseBody Collection<QuoteAnalytics> findByTopShares(@RequestParam int offset,@RequestParam int limit)
	{
		return QuoteAnalyticss.findByTopShares(offset,limit);
	}

@RequestMapping(value="/findByNeedSync",produces="application/json;charset=UTF-8" , method=RequestMethod.GET)
	public @ResponseBody Collection<QuoteAnalytics> findByTopLastSync(@RequestParam int offset,@RequestParam int limit)
	{
		return QuoteAnalyticss.findByNeedSync(offset,limit);
	}


	@RequestMapping(value="/DataTable",produces="application/json", method=RequestMethod.POST)
	public @ResponseBody dataTableResponse datatable(
		HttpServletResponse									response,

		@RequestParam(value="draw") 						int 		draw,
		@RequestParam(value="start") 						int 		start,
		@RequestParam(value="length") 						int 		length,
		@RequestParam(value="search[value]") 				String 		search,

		//custom; see https://datatables.net/examples/server_side/custom_vars.html
		@RequestParam(value="order")			 			String  	orderDir,
		@RequestParam(value="colName") 						String  	colName
	) throws Exception
	{
		try{
			Collection data=QuoteAnalyticss.find(search,colName,orderDir.equals("asc"),start, length);
			int count=QuoteAnalyticss.count();
			return new dataTableResponse(draw,count,count,data);
		}catch(Exception e){
			response.sendError(500, e.getLocalizedMessage()+"");
			return null;
		}
	}

}