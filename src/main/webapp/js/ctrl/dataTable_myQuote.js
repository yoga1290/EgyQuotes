var dataTable_myQuote={
		api:{destroy:function(){}},
		table:{},
		order:'asc',
		colName:'personId',
		
		videoId:[],
		thumbnailURL:{},
		curThumbnail:0,
		updateChannelThumbnail:function(){
			if(dataTable_myQuote.curThumbnail<dataTable_myQuote.videoId.length)
			{
				YTSvc.getData(dataTable_myQuote.videoId[dataTable_myQuote.curThumbnail],function(response){
					dataTable_myQuote.thumbnailURL[response.id]=response.channel.thumbnail;
					dataTable_myQuote.curThumbnail++;
					dataTable_myQuote.updateChannelThumbnail();
				});
			}else{
				$(dataTable_myQuote.table).find('td.videoId').each(function(i,td){
					var row=dataTable_myQuote.api.row($(td).parent()).data();
					if(row==undefined || row==null) return;
					
					var videoId=row.properties.videoId;
					//$(td).html('<a target="_blank" href="http://youtu.be/'+videoId+'?t='+Math.floor(row.properties.start)+'s"><img src="'+dataTable_myQuote.thumbnailURL[videoId]+'" /></a>');
					$(td).html('<a href="#video" onclick="video.load(\''+videoId+'\','+Math.floor(row.properties.start)+');"><img src="'+dataTable_myQuote.thumbnailURL[videoId]+'" /></a>');
				});
			}
		},
		init:function(table){
			dataTable_myQuote.table=$(table);
			dataTable_myQuote.api.destroy();
			dataTable_myQuote.table.html('');
			dataTable_myQuote.api=$(table).DataTable({
				processing:true,
				serverSide:true,
				//scrollY:'200px',
				ajax:
				{
					url:'/Quote/DataTable/me',
					type:'POST',
					data:function(d){
						// see https://datatables.net/examples/server_side/custom_vars.html
						d.order=dataTable_myQuote.order;
						d.colName=dataTable_myQuote.colName;
						d.access_token=localStorage.getItem('access_token');
					}
				},
				preDrawCallback:function(settings){
					var api=dataTable_myQuote.api;//$('#Quote').DataTable();
					if(api.order==undefined || api.order==null) return;
					var ind=api.order()[0][0];
					dataTable_myQuote.order=api.order()[0][1];
					var colName=api.column(ind).dataSrc();
						colName=colName.substring(colName.lastIndexOf('.')+1,colName.length);
					dataTable_myQuote.colName=colName;
				},
				drawCallback:function(settings){
					
					$(dataTable_myQuote.table).find('td.search').each(function(i,cell){
						var id=dataTable_myQuote.api.cell($(cell)).data();            
			            var colInd=dataTable_myQuote.api.cell(cell)[0][0].column;
			            var colTitle=$(dataTable_myQuote.api.column(colInd).header()).text();
			            
			            $(cell).html('');
			            var a=$('<a>');
					    		a.attr('href','#datatable_myQuote');
					    		a.text(id);
					    		a.click(function(){
					    			dataTable_myQuote.api.search(id);
					    			dataTable_myQuote.api.order([colInd,'asc']);
					    			dataTable_myQuote.api.draw();
					    		});
					    		a.appendTo(cell);
					});
					
					
					$(dataTable_myQuote.table).find('td.quote').each(function(i,td){
						var row=dataTable_myQuote.api.row($(td).parent()).data();
						if(row==undefined || row==null) return;
						
						var videoId=row.properties.videoId;
						//$(td).html('<a target="_blank" href="http://youtu.be/'+videoId+'?t='+Math.floor(row.properties.start)+'s"><img src="'+dataTable_myQuote.thumbnailURL[videoId]+'" /></a>');
						$(td).html('<a href="#video" onclick="video.load(\''+videoId+'\','+Math.floor(row.properties.start)+');">'+row.properties.quote+'</a>');
					});
					
					$(dataTable_myQuote.table).find('td.videoId').each(function(i,td){
						var row=dataTable_myQuote.api.row($(td).parent()).data();
						dataTable_myQuote.videoId.push(row.properties.videoId);
						//dataTable_myQuote.updateChannelThumbnail(td,row.properties.videoId);
						//tds.push(td);
						/*
						YTSvc.getData(row.properties.videoId,function(response){
							$(tds[i]).html('<a href="http://youtu.be/'+videoId[i]+'"><img src="'+response.channel.thumbnail+'" /></a>');
						});//*/
					});
					dataTable_myQuote.curThumbnail=0;
					dataTable_myQuote.updateChannelThumbnail();
					/* $(dataTable_myQuote.table).find('td.videoId').each(function(i,td){
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
		                {data:'properties.personId',title:'صاحب المقولة',className:'search'},
		                {data: "properties.quote", title:"المقولة",className:'quote'},
		                {data: "properties.videoId", title:"فيديو المصدر",className:'videoId'}
		                /*,
						{data: "properties.videoId", title:"videoId"},
						{data: "properties.quote", title:"quote"},
						{data: "properties.start", title:"start"},
						{data: "properties.end", title:"end"} //*/
					]
				});
		}
};