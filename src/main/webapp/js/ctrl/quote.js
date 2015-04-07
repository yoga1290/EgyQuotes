var quote={
		getField:function(i){
			return jade.render(
					'.input-group\n'+
						'\t.ddl_authors.input-group-btn\n'+
							'\t\tbutton.author.btn.btn-default.dropdown-toggle(data-toggle="dropdown") Author\n'+
								'\t\t\tspan.caret\n'+
							'\t\tul.dropdown-menu(style="max-height:200px;overflow-y:scroll;")\n'+
/* 						'\tdiv.inner-addon.right-addon\n'+
						'\t\ti.glyphicon.glyphicon-comment\n'+ */
						//'\tinput.quote.col-md-5.form-control(onchange="data.store()",placeholder="Quote @ '+Math.floor(video.clips[i][0])+'s")\n'+
						'\tinput.quote.col-md-5.form-control(placeholder="Quote @ '+Math.floor(video.clips[i][0])+'s")\n'+
						
						'\tdiv.inner-addon.right-addon\n'+
						'\t\ti.glyphicon.glyphicon-comment\n'+
						'\tspan.input-group-btn\n'+
						'\t\tbutton.btn.btn-info.playQuote\n'+
						'\t\t\tspan.glyphicon.glyphicon-step-backward\n'+
						'\t\tbutton.btn.btn-primary.shareQuote\n'+
						'\t\t\tspan.glyphicon.glyphicon-share-alt'
						
//						'\tinput.quote.col-md-5.form-control(onchange="data.store()",placeholder="Quote @ '+video.clips[i][0]+'s")'
				);
		},
		AuthorDDL:{
			searchField:'',
			setAuthor:function(obj,name,value){
				$(obj)
					.closest('.ddl_authors')
					.find('button.author')
					.html(name+jade.render('span.caret'));
				$(obj)
					.closest('.ddl_authors')
					.find('button.author')
					.attr('value',value);
			},
			searchAuthor:function(searchField){
				quote.AuthorDDL.searchField=searchField.value;
				
				//todo
				PersonSvc.list(0,100,function(response){
					
					//remove results
					$(searchField)
						.parent()
						.parent()
						.find('a')
						.each(function(i,o){
							$(o).parent().remove();
						});
					
					var notfound=true;
					for(var i=0;i<response.length;i++)
						if(response[i].properties.name.indexOf(searchField.value)>=0)
						{
							var li=$('<li></li>');
								var a=$('<a></a>');
									a.attr('href','#');
									a.attr('value',response[i].key.name);
									a.text(response[i].properties.name);
								a.appendTo(li);
							li.appendTo($(searchField).parent().parent());
							notfound=false;
						}
					// $(obj).parent().parent().html(jade.render(jtxt));
					if(notfound)
						quote.AuthorDDL.setAuthor(searchField,searchField.value,-1);
					
					quote.AuthorDDL.setListeners();
				});
			},
			setListeners:function(){
				
				$('.ddl_authors button').click(function(){
					var jtxt='li\n'+
								'\tinput.form-control(type="text",placeholder="search",value="'+quote.AuthorDDL.searchField+'")\n'+
								'\t.inner-addon.right-addon\n'+
								'\t\ti.glyphicon.glyphicon-search';
					// for(var i=0;i<quote.people.length;i++)
					// 	jtxt+='li\n\ta(href="#") '+quote.people[i].name+'\n';
					$(this).parent().find('.dropdown-menu').html(jade.render(jtxt));
					//quote.AuthorDDL.setListeners();
					
//					$('.ddl_authors input').off();
					$('.ddl_authors input').click(function(e){
						e.stopPropagation();
			    			e.preventDefault();
			    			return false;
		    			});
//					$('.ddl_authors input').off();
					$('.ddl_authors input').keyup(function(e){
						if(e.keyCode==13)//return button
							quote.AuthorDDL.searchAuthor(this);
		    			});
//					$('input').off();
					$('input').keyup(function(e){
			    			if(e.keyCode==73 || e.keyCode==105|| e.keyCode==79 || e.keyCode==111)
			    			{
			    				e.stopPropagation();
				    			e.preventDefault();
				    			return false;
			    			}
		    			});
					
//					$('button.playQuote').off();
					$('button.playQuote').each(function(index,button){
						$(button).click(function(){
							video.player.seekTo(video.clips[index][0]);
						});
					});
					
					
				});
				
				$('.ddl_authors input').keyup(function(e){
					if(e.keyCode==13)//return button
						quote.AuthorDDL.searchAuthor(this);
	    			});
				
//				$('.ddl_authors a').off();
				$('.ddl_authors a').click(function(){
					quote.AuthorDDL.setAuthor(this,$(this).text(),$(this).attr('value'));
	    			});
//				$('button.playQuote').off();
				$('button.playQuote').each(function(index,button){
					$(button).click(function(){
						video.player.seekTo(video.clips[index][0]);
					});
				});
//				$('button.shareQuote').off();
				$('button.shareQuote').each(function(index,button){
					button=$(button);
					button.off();
					
					button.click(function(){
						var parent=$(button).closest('.input-group');
						var personId=parent.find('.author').attr('value');
						var quote=parent.find('.quote').val();
						var index=parent.find('.quote').index('.quote');
						console.log($(this).closest('.input-group')[0]);
						console.log(index);
						var start=video.clips[index][0];
						var end=video.clips[index][1];
						
						if(parent.find('.ddl_authors').find('button').attr('value')==undefined
								|| parent.find('.ddl_authors').find('button').attr('value')==null
								)
							{
								message("For Sharing: <br> —Must be logged in <br> —An author must be selected <br> — Time interval must NOT be re-used<br> — Must be from 1 of the Channels listed below");
								return;
							}
						button[0].disabled=true;
						if(parent.find('.ddl_authors').find('button').attr('value')=='-1')
						{
							PersonSvc.insert(parent.find('.ddl_authors').find('button').text(),function(person){
								QuoteSvc.insert(person.key,quote,start,end,function(){
									button.addClass('btn-success');
									button.removeClass('btn-primary');
									button.html(jade.render('span.glyphicon.glyphicon-ok'));
									button[0].disabled=true;
								});
							});
						}
						else
							QuoteSvc.insert(personId,quote,start,end,function(){
								button.addClass('btn-success');
								button.removeClass('btn-primary');
								button.html(jade.render('span.glyphicon.glyphicon-ok'));
								button[0].disabled=true;
							});
					});
				});
				
				/*.click(function(e){
					var button=$(e.target);
					var parent=$(e.target).closest('.input-group');
					var personId=parent.find('.author').attr('value');
					var quote=parent.find('.quote').val();
					var index=parent.find('.quote').index('.quote');
					console.log($(this).closest('.input-group')[0]);
					console.log(index);
					var start=video.clips[index][0];
					var end=video.clips[index][1];
					QuoteSvc.insert(personId,quote,start,end,function(){
						button.addClass('btn-success');
						button.removeClass('btn-primary');
						button.html(jade.render('span.glyphicon.glyphicon-ok'));
						button[0].disabled=true;
					});
	    			});//*/
			}
		}
};