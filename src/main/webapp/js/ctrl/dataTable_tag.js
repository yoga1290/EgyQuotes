
var dataTable_tag={
	api:{},
	table:{},
	DDL:{},
	DDL_KVC:{},
	order:'asc',
	colName:'',
	getEditTemplate:function(row){
		return '<form onsubmit="return false;"><table>'
						
+'<tr><td>tag</td><td><input type="text" name="tag" value="'+row.tag+'" ></td></tr>'
+'<tr><td>quoteId</td><td><select name="quoteId"></select></td></tr>'
					+'<tr>'
						+'<td colspan="2"><button onclick="dataTable_tag.actions.edit('+row.id+',$(this).closest(\'form\'));">Update</button></td>'
					+'</tr>'
				+'</table></form>';
	},
	getInsertTemplate:function(){
		return '<form onsubmit="return false;"><table>'
						
					+'<tr>'
						+'<td colspan="2"><button onclick="dataTable_tag.actions.insert($(this).closest(\'form\'));">Insert</button></td>'
					+'</tr>'
				+'</table></form>';
	},
	bindTemplateDDL:function(Template){
		$(Template).find('select').each(function(i,o){
			var name=$(this).attr('name');
            var i,html="";
            if(datatable_menu.DDL[name+""]!=undefined)
            for(i=0;i<datatable_menu.DDL[name+""].length;i++)
                html+="<option value='"+datatable_menu.DDL[name+""][i][""+datatable_menu.DDL_KVC[name+""].key]+"'>"+datatable_menu.DDL[name+""][i][""+datatable_menu.DDL_KVC[name+""].value]+"</option>";
            $(this).html(html);
		});
	},
	bindEditTemplateDDL:function(){
		$('#dataTable_tag tbody tr select').each(function(i,o){
			var name=$(this).attr('name');
            var i,html="";
            //var row=$(o).parent().parent().parent().parent().parent().parent().parent().prev();
            var row=$(o).parents('tr').last().prev();
            var data=dataTable_tag.api.row(row).data();
            if(dataTable_tag.DDL[name+""]!=undefined)
            for(i=0;i<dataTable_tag.DDL[name+""].length;i++)
            {
                if(data[name+""]==dataTable_tag.DDL[name+""][i][""+dataTable_tag.DDL_KVC[name+""].key])
                    html+="<option value='"+dataTable_tag.DDL[name+""][i][""+dataTable_tag.DDL_KVC[name+""].key]+"' selected>"+dataTable_tag.DDL[name+""][i][""+dataTable_tag.DDL_KVC[name+""].value]+"</option>";
                else
                    html+="<option value='"+dataTable_tag.DDL[name+""][i][""+dataTable_tag.DDL_KVC[name+""].key]+"'>"+dataTable_tag.DDL[name+""][i][""+dataTable_tag.DDL_KVC[name+""].value]+"</option>";
            }
            $(this).html(html);
		});
	},
	bindEditTemplate:function(row,template){
		//TODO: Bind DDL; find elements by form name (template.find('[name=IsDeleted]'))
		template.find('input[mask]').each(function(i,o){
			$(o).mask($(o).attr('mask'));
		});
		template.find('.datepicker').each(function(i,o){
			$(o).datepicker("option", "dateFormat", "Y-m-d H:i:s" );
		});
		
		
	},
	actions:{
		insert:function(form){
			TagSvc.insertForm(form,function(){
            	dataTable_tag.api.draw(false);
                dataTable_tag.setListeners();
            });
		},
		edit:function(id,form){

            TagSvc.updateForm(id,form,function(){
            	dataTable_tag.api.draw(false);
                dataTable_tag.setListeners();
            });
	/*
			$(dataTable_tag.table).find(' tr.selected').each(function(i,o){
				$(o).removeClass('selected');
			});//*/
		},
		delete:function(o){
			var id
					=dataTable_tag.api.row($(o).closest('tr'))
						.data().id;

				TagSvc.delete(id,function(){
					//de-select the item(s)
					$(dataTable_tag.table).find(' tr.selected')
						.each(function(i,o){
		                	$(o).removeClass('selected');
		            });
		            dataTable_tag.api.draw(false);
		            dataTable_tag.setListeners();
				});


		},
		deleteAll:function(){
			var id=[];
			$(dataTable_tag.table).find(' tr.selected').each(function(i,o){
				$(o).removeClass('selected');

				id
					.push(
						dataTable_tag.api.row($(o))
						.data().id
						);
			});
			TagSvc.deleteAll(id,function(){
					//de-select the item(s)
					$(dataTable_tag.table).find(' tr.selected')
						.each(function(i,o){
		                	$(o).removeClass('selected');
		            });
		            dataTable_tag.api.draw(false);
		            dataTable_tag.setListeners();
				});
		}
	},
	setListeners:function(){
		$(dataTable_tag.table).find( ' tbody').off().on('click','tr td.edit',function(){
			var row=dataTable_tag.api.row($(this).closest('tr'));
			debug=row;
			if(row.child.isShown())
				row.child.hide();
			else
			{
				row.child(
						dataTable_tag.getEditTemplate(row.data())
					).show();
				dataTable_tag.bindEditTemplate(row.data(),row.child());
			}
		});
		$(dataTable_tag.table).find( ' tbody').on('click','tr td.delete',function(){
			dataTable_tag.actions.delete(this);
		});
/*
		$(dataTable_tag.table).find( ' tbody').on('click','tr[role=row]',function(){
			$(this).toggleClass('selected');
		});//*/
		$(dataTable_tag.table).find( ' td.checkbox').off().each(function(i,o){
			$(o).html('<input type="checkbox" '+
				( dataTable_tag.api.cell($(o)).data()=='1' ? 'checked':'')
				+' disabled/>');
		});
		$(dataTable_tag.table).find( ' td.tag').off().each(function(i,o){

			var tag=dataTable_tag.api.cell($(o)).data();
			$(o).html('<a href="#dataTable_tag" onclick="dataTable_tag.api.search(\''+tag+'\');dataTable_tag.api.draw();">'+dataTable_tag.api.cell($(o)).data()+'</a>');
		});
		$(dataTable_tag.table).find( ' td.needsDataBind').each(function(i,cell){
            var id=dataTable_tag.api.cell($(cell)).data();
            var colInd=dataTable_tag.api.cell(cell)[0][0].column;
            var colTitle=$(dataTable_tag.api.column(colInd).header()).text();

            
////TODO:Bind DDL:
if(colTitle=='quote')
{
        $(cell).html('');
        QuoteSvc.findById(id,function(response){
                var replaceAll=function(txt){
                        while(txt.indexOf('\n')>-1)
                                txt=txt.replace('\n',' ');
                        return txt;
                };
                $(cell).html(jade.render(
                                'a(href="#video",onclick="video.load(\''+response.videoId+'\','+Math.floor(response.start)+')") '+ replaceAll(response.quote)
        +'\n'
        +'a(href="#dataTable_quote",onclick="dataTable_quote.api.search(\''+ response.personId +'\');dataTable_quote.api.draw();")\n\t| <br> —'+ response.personId
                                        ));
        });
}


        });
	},

	init:function(table){
		dataTable_tag.table=$(table);
		dataTable_tag.api=
			$(dataTable_tag.table).DataTable({
				processing:true,
				serverSide:true,
				//scrollY:'200px',
				ajax:
				{
					url:'tag/DataTable',
					type:'POST',
					data:function(d){
						// see https://datatables.net/examples/server_side/custom_vars.html
						d.order=dataTable_tag.order;
						d.colName='tag';//dataTable_tag.colName;
					}
				},
				drawCallback:function(settings){
					dataTable_tag.setListeners();
				},
				columns:[ 
/*
{
		                    title:'tag',
		                "class":          "tag",
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
				{data: "properties.tag", title:"tag",className:'tag'},
				{data: "properties.quoteId", title:"quote","orderable":      false,className:'needsDataBind'}

			]

		});

	}
};

