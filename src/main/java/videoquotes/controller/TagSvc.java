package videoquotes.controller;

import videoquotes.repository.Tag;
import videoquotes.repository.*;

import java.util.Collection;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
@RequestMapping(value = "/tag",produces="application/json;charset=UTF-8")
public class TagSvc
{
	@Autowired
	private TagRepository tags;
	@Autowired
	private TagNameRepository tagNames;

	@RequestMapping(value="/all",produces="application/json", method=RequestMethod.GET)
	public @ResponseBody Collection<Tag> getTagList(){
		return com.google.appengine.repackaged.com.google.common.collect.Lists.newArrayList(tags.findAll());
	}


	@RequestMapping(value="/list",produces="application/json", method=RequestMethod.GET)
	public @ResponseBody Collection<Tag> list(@RequestParam int offset,@RequestParam int limit){
		return tags.findAll(offset,limit);
	}

	@RequestMapping(value="/",produces="application/json", method=RequestMethod.GET)
	public @ResponseBody Tag findOne(@RequestParam Long id)
	{
		return tags.findOne(id);
	}

	//TODO: used for manully inserting
	/*
	@RequestMapping(value="/tagName",produces="application/json", method=RequestMethod.POST)
	public @ResponseBody TagName testNameTag(
			@RequestParam String tag)
	{
		return tagNames.save(new TagName(tag));
	}//*/
	@RequestMapping(value="/insert",produces="application/json", method=RequestMethod.POST)
	public @ResponseBody Tag insert(
					//@RequestBody Tag otag)
			@RequestParam String tag,		 
			@RequestParam String quoteId)
	{
		//TODO: fix tag
		tagNames.save(new TagName(tag));
		Tag ntag=new Tag(tag,quoteId);
		return tags.save(ntag);
	}
	@RequestMapping(value="/find",produces="application/json;charset=UTF-8" , method=RequestMethod.GET)
	public @ResponseBody List findByName(@RequestParam String tag)
	{
		return tagNames.searchByTag(tag,0,50);
	}
	@RequestMapping(value="/findByQuoteId",produces="application/json;charset=UTF-8" , method=RequestMethod.GET)
	public @ResponseBody Collection<Tag> findByQuoteId(@RequestParam String quoteId)
	{
		return tags.findByQuoteId(quoteId);
	}

	@RequestMapping(value="/update/{id}",produces="application/json", method=RequestMethod.POST)
	public @ResponseBody Tag update(
					 
			@PathVariable(value="id") long id,
			@RequestParam String quoteId)
	{
		Tag tag=tags.findOne(id);

		
				tag.setQuoteId(quoteId);
		return tags.update(tag);
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
			Collection data=tags.find(search,colName,orderDir.equals("asc"),start, length);
			int count=tags.count();
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

