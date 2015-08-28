package videoquotes.controller;

import java.util.Collection;
import java.util.LinkedList;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import videoquotes.Credential;

import videoquotes.repository.ChannelRepository;
import videoquotes.repository.FBUser;
import videoquotes.repository.FBUserRepository;
import videoquotes.repository.PersonRepository;
import videoquotes.repository.QuoteRepository;
import videoquotes.repository.VideoRepository;
import videoquotes.repository.Quote;


@Controller
public class DataTableSvc {

	@Autowired
	private QuoteRepository Quotes;
//	@Autowired
//	private PersonRepository People;
//	@Autowired
//	private VideoRepository Videos;
//	@Autowired
//	private ChannelRepository Channels;
	@Autowired
	private FBUserRepository users;
	
	
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
	
	
	@RequestMapping(value="/datatable/{tablename}",produces="application/json", method=RequestMethod.POST)
	public @ResponseBody dataTableResponse datatable(
			HttpServletResponse									response,
			@PathVariable(value="tablename")					String		table,
			@RequestParam(value="access_token") 				String 		access_token,
			
			@RequestParam(value="draw") 							int 		draw,
			@RequestParam(value="start") 						int 		start,
			@RequestParam(value="length") 						int 		length,
			@RequestParam(value="search[value]") 				String 	search,
			@RequestParam(value="order")			 				String  	orderDir,
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
		
		
			dataTableResponse res=null;
			try{
				Collection data=new LinkedList<Quote>();
				int count=0;
				if(table.equals("quote"))
				{
					data=Quotes.find(search,colName,orderDir.equals("asc"),start, length);
					count=Quotes.count();
				}
				else if(table.equals("user"))
				{
					data=users.find(search,colName,orderDir.equals("asc"),start, length);
					count=users.count();
				}
				res=new dataTableResponse(draw,count,data.size(),data);
			}catch(Exception e){
				response.sendError(500, e.getLocalizedMessage()+"");
			}
			
			return res;
		}
	
}
