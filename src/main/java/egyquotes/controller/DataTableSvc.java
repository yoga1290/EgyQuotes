package egyquotes.controller;

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

import egyquotes.repository.ChannelRepository;
import egyquotes.repository.FBUser;
import egyquotes.repository.FBUserRepository;
import egyquotes.repository.PersonRepository;
import egyquotes.repository.QuoteRepository;
import egyquotes.repository.VideoRepository;
import egyquotes.repository.Quote;


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
			@RequestParam(value="length") 						int 		length
//			@RequestParam(value="search[value]") 				int 		search,
//			@RequestParam(value="search[regex]") 				boolean 	isSearchRegex,
//			@RequestParam(value="order[0][column]") 				int 		orderColName,
//			@RequestParam(value="order[0][dir]") 				String  	orderDir,
//			@RequestParam(value="columns[0][data]") 				String  	colData,
//			@RequestParam(value="columns[0][name]") 				String  	colName,
//			@RequestParam(value="columns[0][searchable]") 		boolean  	isColSearchable,
//			@RequestParam(value="columns[0][orderable]") 		boolean  	isColOrderable,
//			@RequestParam(value="columns[0][search][value]") 	String  	searchValue,
//			@RequestParam(value="columns[0][search][regex]") 	boolean  	isColRegexSearch
		) throws Exception
		{
		
		FBUser user=null;
		try{
			user=users.findByAccessToken(access_token);
			if(!user.getId().equals("***"))
				return null;
		}catch(Exception ew){
			response.sendError(404, ew.getLocalizedMessage() );
			return null;
		}
		
		
			dataTableResponse res=null;
			try{
				Collection data=new LinkedList<Quote>();
				
				if(table.equals("quote"))
					data=Quotes.findAll(start, length);
				else if(table.equals("user"))
					data=users.findAll(start, length);
				res=new dataTableResponse(draw,data.size(),data.size(),data);
			}catch(Exception e){
				response.sendError(500, e.getLocalizedMessage()+"");
			}
			
			return res;
		}
	
}
