package videoquotes.controller;
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

@Component
class Util
{
	public String readText(String uri)
	{
		String res="";
		try{
			URL url = new URL(uri);
			HttpURLConnection connection = (HttpURLConnection) url.openConnection();
			connection.setRequestProperty("User-Agent","Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.3 (KHTML, like Gecko) Version/8.0 Mobile/12A4345d Safari/600.1.4");
			InputStream in=connection.getInputStream();
			byte buff[]=new byte[5000];
			int ch;
			while((ch=in.read(buff))!=-1)
					res+=new String(buff,0,ch);
			in.close();
			connection.disconnect();
			
			return res;
		}catch(Exception e){return  e.getLocalizedMessage();}
	}
}



@RequestMapping(value="/topquotes",produces="application/json")
@Controller
public class TopQuotesSvc
{
	@Autowired
	private TopQuotesRepository TopQuotess;
	@Autowired
	private Util util;

	@RequestMapping(value="/all", method=RequestMethod.GET)
	public @ResponseBody Collection<TopQuotes> getTopQuotesList(){
		return com.google.appengine.repackaged.com.google.common.collect.Lists.newArrayList(TopQuotess.findAll());
	}


	@RequestMapping(value="/list", method=RequestMethod.GET)
	public @ResponseBody Collection<TopQuotes> list(@RequestParam int offset,@RequestParam int limit){
		return TopQuotess.findAll(offset,limit);
	}

	@RequestMapping(value="/", method=RequestMethod.GET)
	public @ResponseBody TopQuotes findOne(@RequestParam String id)
	{
		return TopQuotess.findOne(id);
	}
	@RequestMapping(value="/test", method=RequestMethod.GET)
	public @ResponseBody String test(@RequestParam String url)
	{
		String txt= util.readText(url);
		// txt=txt.substring(txt.indexOf("url_encoded_fmt_stream_map"),txt.length());
		
		txt=txt.substring((txt.indexOf("url=http")+4),txt.indexOf("\\\\"));
		return txt;
	}

	@RequestMapping(value="/insert", method=RequestMethod.POST)
	public @ResponseBody TopQuotes insert(
					//@RequestBody TopQuotes oTopQuotes)
					 
			@RequestParam String count,
			@RequestParam Long lastSync)
	{
		TopQuotes topquotes=new TopQuotes();

		
				topquotes.setCount(count);
				topquotes.setLastSync(lastSync);
		return TopQuotess.save(topquotes);
	}

	@RequestMapping(value="/update/{id}", method=RequestMethod.POST)
	public @ResponseBody TopQuotes update(
					 
			@PathVariable(value="id") String quoteId,
			@RequestParam String count,
			@RequestParam Long lastSync)
	{
		TopQuotes topquotes=TopQuotess.findOne(quoteId);

		
				topquotes.setCount(count);
				topquotes.setLastSync(lastSync);
		return TopQuotess.update(topquotes);
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
			Collection data=TopQuotess.find(search,colName,orderDir.equals("asc"),start, length);
			int count=TopQuotess.count();
			return new dataTableResponse(draw,count,count,data);
		}catch(Exception e){
			response.sendError(500, e.getLocalizedMessage()+"");
			return null;
		}
	}

}

// uncomment the next line, iff dataTableResponse class wasn't previously defined
/*
class dataTableResponse{
	public int draw;
	public int recordsTotal;
	public int recordsFiltered;
	public Collection data;
	public dataTableResponse(	int 		draw,
								int 		recordsTotal,
								int 		recordsFiltered,
								Collection 	data){
		this.draw=draw;
		this.recordsTotal=recordsTotal;
		this.recordsFiltered=recordsFiltered;
		this.data=data;
	}
}
//*/

