package videoquotes.controller;

import java.util.Collection;

public class dataTableResponse{
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
