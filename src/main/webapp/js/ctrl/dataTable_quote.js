var dataTable_quote={
		api:{destroy:function(){}},
		table:{},
		order:'asc',
		colName:'',
		
		videoId:[],
		thumbnailURL:{},
		curThumbnail:0,
		updateChannelThumbnail:function(){
			if(dataTable_quote.curThumbnail<dataTable_quote.videoId.length)
			{
				YTSvc.getData(dataTable_quote.videoId[dataTable_quote.curThumbnail],function(response){
					dataTable_quote.thumbnailURL[response.id]=response.channel.thumbnail;
					dataTable_quote.curThumbnail++;
					dataTable_quote.updateChannelThumbnail();
					//TODO:
				});
			}else{
				$(dataTable_quote.table).find('td.videoId').each(function(i,td){
					var row=dataTable_quote.api.row($(td).parent()).data();
					if(row==undefined || row==null) return;
					
					var videoId=row.properties.videoId;
					//$(td).html('<a target="_blank" href="http://youtu.be/'+videoId+'?t='+Math.floor(row.properties.start)+'s"><img src="'+dataTable_quote.thumbnailURL[videoId]+'" /></a>');
					$(td).html('<a href="#video" onclick="video.load(\''+videoId+'\','+Math.floor(row.properties.start)+');"><img src="'+dataTable_quote.thumbnailURL[videoId]+'" /></a>');
				});
			}
		},
		init:function(table){
			dataTable_quote.table=$(table);
			dataTable_quote.api.destroy();
			dataTable_quote.table.html('');
			
			dataTable_quote.api=$(table).DataTable({
				processing:true,
				serverSide:true,
				//scrollY:'200px',
				ajax:
				{
					url:'/Quote/DataTable',
					type:'POST',
					data:function(d){
						// see https://datatables.net/examples/server_side/custom_vars.html
						d.order=dataTable_quote.order;
						d.colName=dataTable_quote.colName;
					}
				},
				preDrawCallback:function(settings){
					var api=dataTable_quote.api;//$('#Quote').DataTable();
					if(api.order==undefined || api.order==null) return;
					var ind=api.order()[0][0];
					dataTable_quote.order=api.order()[0][1];
					var colName=api.column(ind).dataSrc();
						colName=colName.substring(colName.lastIndexOf('.')+1,colName.length);
					dataTable_quote.colName=colName;
				},
				drawCallback:function(settings){
					
					$(dataTable_quote.table).find('td.search').each(function(i,cell){
						var id=dataTable_quote.api.cell($(cell)).data();            
			            var colInd=dataTable_quote.api.cell(cell)[0][0].column;
			            var colTitle=$(dataTable_quote.api.column(colInd).header()).text();
			            
			            $(cell).html('');
			            var a=$('<a>');
					    		a.attr('href','#datatable_quote');
					    		a.text(id);
					    		a.click(function(){
					    			dataTable_quote.api.search(id);
					    			dataTable_quote.api.order([colInd,'asc']);
					    			dataTable_quote.api.draw();
					    		});
					    		a.appendTo(cell);
					});
					
					
					$(dataTable_quote.table).find('td.quote').each(function(i,td){
						var row=dataTable_quote.api.row($(td).parent()).data();
						if(row==undefined || row==null) return;
						
						var videoId=row.properties.videoId;
						//$(td).html('<a target="_blank" href="http://youtu.be/'+videoId+'?t='+Math.floor(row.properties.start)+'s"><img src="'+dataTable_quote.thumbnailURL[videoId]+'" /></a>');
						$(td).html('<a href="#video" onclick="video.load(\''+videoId+'\','+Math.floor(row.properties.start)+');">'+row.properties.quote+'</a>');
					});
					
					dataTable_quote.videoId=[];
					$(dataTable_quote.table).find('td.videoId').each(function(i,td){
						var row=dataTable_quote.api.row($(td).parent()).data();
						dataTable_quote.videoId.push(row.properties.videoId);
						//dataTable_quote.updateChannelThumbnail(td,row.properties.videoId);
						//tds.push(td);
						/*
						YTSvc.getData(row.properties.videoId,function(response){
							$(tds[i]).html('<a href="http://youtu.be/'+videoId[i]+'"><img src="'+response.channel.thumbnail+'" /></a>');
						});//*/
					});
					dataTable_quote.curThumbnail=0;
					dataTable_quote.updateChannelThumbnail();
					/* $(dataTable_quote.table).find('td.videoId').each(function(i,td){
							YTSvc.getData(videoId[i],function(response){
								$(tds[i]).html('<a href="http://youtu.be/'+videoId[i]+'"><img src="'+response.channel.thumbnail+'" /></a>');
							});
					}); */
				},
				columns:[ 
				          /*
				          {
		                    title:'Edit',
		                "class":          "edit",
		                "orderable":      false,
		                "data":           null,
		                "defaultContent": "Edit"
		                },
		                {
		                    title:'Delete',
		                "class":          "delete",
		                "orderable":      false,
		                "data":           null,
		                "defaultContent": "Delete"
		                },
		                //*/
		                {data:'properties.personId',title:'صاحب المقولة',"orderable":true, className:'search'},
		                {data: "properties.quote", title:"المقولة",className:'quote'},
		                {data: "properties.videoId","orderable":      false, title:"فيديو المصدر",className:'videoId'}
		                /*,
						{data: "properties.videoId", title:"videoId"},
						{data: "properties.quote", title:"quote"},
						{data: "properties.start", title:"start"},
						{data: "properties.end", title:"end"} //*/
					]
				});
		}
};