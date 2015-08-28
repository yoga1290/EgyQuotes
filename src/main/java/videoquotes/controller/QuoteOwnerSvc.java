package videoquotes.controller;

import videoquotes.repository.FBUser;
import videoquotes.repository.*;

import java.util.Collection;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import videoquotes.Credential;

import videoquotes.repository.QuoteOwnerRepository;


@Controller
public class QuoteOwnerSvc
{
	@Autowired
	private QuoteOwnerRepository QuoteOwners;
	@Autowired
	private FBUserRepository users;

//	@RequestMapping(value="/quoteowners/all", method=RequestMethod.GET)
//	public @ResponseBody Collection<QuoteOwner> getQuoteOwnerList(){
//		return com.google.appengine.repackaged.com.google.common.collect.Lists.newArrayList(QuoteOwners.findAll());
//	}


//	@RequestMapping(value="/quoteowner/list", method=RequestMethod.GET)
//	public @ResponseBody Collection<QuoteOwner> list(@RequestParam int offset,@RequestParam int limit){
//		return QuoteOwners.findAll(offset,limit);
//	}

	@RequestMapping(value="/quoteowner", method=RequestMethod.GET)
	public @ResponseBody QuoteOwner findOne(@RequestParam String id)
	{
		return QuoteOwners.findOne(id);
	}

	@RequestMapping(value="/quoteowner/insert", method=RequestMethod.POST)
	public @ResponseBody QuoteOwner insert(@RequestParam String access_token,HttpServletResponse response)
	{
		QuoteOwner quoteowner=new QuoteOwner();
		FBUser user=null;
		try
		{
				user=users.findByAccessToken(access_token);
				quoteowner.setUserId(user.getId());
//				quoteowner.setQuoteId(quoteId);
				quoteowner=QuoteOwners.save(quoteowner);
		}catch(Exception e){
			try{
				response.sendError(404, e.getLocalizedMessage());
			}catch(Exception eww){}
		}
		return quoteowner;
	}

//	@RequestMapping(value="/quoteowner/update/{id}", method=RequestMethod.POST)
//	public @ResponseBody QuoteOwner update(
//					 
//			@PathVariable(value="id") String quoteId,
//			@RequestParam String userId)
//	{
//		QuoteOwner quoteowner=QuoteOwners.findOne(quoteId);
//
//		
//				quoteowner.setUserId(userId);
//		return QuoteOwners.update(quoteowner);
//	}

	@RequestMapping(value="/quoteowner/DataTable/admin",produces="application/json;charset=UTF-8", method=RequestMethod.POST)
	public @ResponseBody dataTableResponse adminDatatable(
		HttpServletResponse									response,
		
                @RequestParam(value="access_token") 					String 		access_token,
		@RequestParam(value="draw") 						int 		draw,
		@RequestParam(value="start") 						int 		start,
		@RequestParam(value="length") 						int 		length,
		@RequestParam(value="search[value]")                                    String 		search,

		//custom; see https://datatables.net/examples/server_side/custom_vars.html
		@RequestParam(value="order")			 			String  	orderDir,
		@RequestParam(value="colName") 						String  	colName
	) throws Exception
	{
            
            
            FBUser user=null;
            try{
                    user=users.findByAccessToken(access_token);
                    if(!user.getId().equals(Credential.ADMIN_USER_ID))
                            return null;
            }catch(Exception ew){
                    response.sendError(404, ew.getLocalizedMessage() );
                    return null;
            }
                        
		try{
			Collection data=QuoteOwners.find(search,colName,orderDir.equals("asc"),start, length);
			int count=QuoteOwners.count();
			return new dataTableResponse(draw,count,count,data);
		}catch(Exception e){
			response.sendError(500, e.getLocalizedMessage()+"");
			return null;
		}
	}
        
        @RequestMapping(value="/quoteowner/DataTable",produces="application/json;charset=UTF-8", method=RequestMethod.POST)
	public @ResponseBody dataTableResponse datatable(
		HttpServletResponse									response,
		
                @RequestParam(value="access_token") 					String 		access_token,
		@RequestParam(value="draw") 						int 		draw,
		@RequestParam(value="start") 						int 		start,
		@RequestParam(value="length") 						int 		length,
		@RequestParam(value="search[value]")                                    String 		search,

		//custom; see https://datatables.net/examples/server_side/custom_vars.html
		@RequestParam(value="order")			 			String  	orderDir,
		@RequestParam(value="colName") 						String  	colName
	) throws Exception
	{
            
            
            FBUser user=null;                        
		try{
                    user=users.findByAccessToken(access_token);
			Collection data=QuoteOwners.find(user.getId(),"userId",orderDir.equals("asc"),start, length);
			int count=QuoteOwners.count();
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
