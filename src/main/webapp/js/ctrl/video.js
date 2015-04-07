var video={
			player:null,
			videoId:'',
			clips:[],
			lastT:-1,
			isYTAPIReady:false,
			load:function(videoId,start){
			if(!video.isYTAPIReady)
			{
				setTimeout(function(){
					video.load(videoId);
				},1000);  
				return;
			}
		    video.videoId=videoId;
		   /*
		   $(':not(input)').keyup(video.keydown);
		    $('input[type=text]').keyup(function(e){
		    		if(e.keyCode==73 || e.keyCode==105|| e.keyCode==79 || e.keyCode==111)
		    			{
			    			event.stopPropagation()
			    			e.preventDefault();
			    			return false;
		    			}
		    });//*/
		    //data.load();

		    if(video.player==null)
		    	{
			    video.player=new YT.Player('video', {
			       // height: '390',
			        width: $('#video').parent().width(),//'640',
			        videoId: videoId,
			        playerVars: { 'autoplay': 1,'origin':'https://egyquotes.appspot.com'},
			        events: {
			          'onReady': function(event){
			        	  	YTPlayer=event.target;
			        	  		video.player=event.target;
			        	  	  video.player.setPlaybackQuality('small');
					       video.updateProgress();
					       //data.load();
					       
					       if((location.href.indexOf('s=')>-1))
					    	   {
						    	   var s=parseInt(
		        							location.href.substring(
		    										location.href.indexOf('s=')+2,
		    										location.href.indexOf('v=')) );
						       $('#vidURL').val('https://EgyQuotes.appspot.com/#s='+s+"v="+video.videoId);
						       video.player.seekTo(s,true);
					    	   }
					       else if(start!=null && start!=undefined)
					    	   		video.player.seekTo(start,true);
					       else
						    	   $('#vidURL').val('https://EgyQuotes.appspot.com/#v='+video.videoId);
					       TimeLine.load(video.videoId,event.target);
					       
					       
			          },
			          'onStateChange': function(event){
			        	  	 var player=event.target;
			        	  	 if(event.data==YT.PlayerState.PLAYING)
			        	  		 TimeLine.setPointer(player);
			          }
			        }
			    });
		    	}
		    else
		    	{
		    		video.player.loadVideoById({'videoId': videoId, 'startSeconds': (start!=undefined ? start:0), 'suggestedQuality': 'small'});
		    		TimeLine.load(video.videoId,video.player);
		    	}
		    
		  },
		  keydown:function(e){
		    if(video.player==null) return;
		    if(e.keyCode==73 || e.keyCode==105)
		      video.setIN();
		    else if(e.keyCode==79 || e.keyCode==111)
		        video.setOUT();
		  },
		  setIN:function(){
			video.lastT=video.player.getCurrentTime();
		    $('#btn_vidIO').removeClass('btn-default');
		    $('#btn_vidIO').addClass('btn-danger');
		    $('#btn_vidIO').html(jade.render('span.glyphicon.glyphicon-stop'));
		    
		  },
		  setOUT:function(){
		    if(video.lastT>-1)
		    {
		      $('#btn_vidIO').removeClass('btn-danger');
		      $('#btn_vidIO').addClass('btn-default');
		      $('#btn_vidIO').html(jade.render('span.glyphicon.glyphicon-plus\nspan.glyphicon.glyphicon-comment'));
		      var i,clips=video.clips;
				var nclips=[],st=video.lastT,ed=video.player.getCurrentTime();
				for(i=0;i<clips.length;i++)
					if(
						!(st<=clips[i][0] && clips[i][0]<=ed)
						&&
						!(st<=clips[i][1] && clips[i][1]<=ed)
						&&
						!(clips[i][0]<=st && st<=clips[i][1])
						&&
						!(clips[i][0]<=ed && ed<=clips[i][1])
						)
						nclips.push(video.clips[i]);
				nclips.push([st,ed]);
				nclips.sort(function(a,b){
					if(a[0]<b[0]) return -1;
					if(a[0]>b[0]) return 1;
					return 0;
				});
		      video.clips.push([video.lastT,video.player.getCurrentTime()]);
		      video.lastT=-1;
		      video.updateProgress();
		      //data.store();
		    }
		  },
		  IOClick:function(){
			  if(video.lastT>-1)
				  video.setOUT();
			  else
				  video.setIN();
		  },
		  updateProgress:function(){
			  if(video.player==null || video.player==undefined)	return;
		    var txt='';
		    var quotes='';
		    var a,b,lastB=0;
		    for(var i=0;i<video.clips.length;i++)
		    {
		      a=video.clips[i][0]*100/video.player.getDuration();
		      b=video.clips[i][1]*100/video.player.getDuration();
		      txt+=video.getGapBar(a-lastB);
		      txt+=video.getClipBar(b-a,i);
		      //quotes+=video.getQuoteField(i);
		      quotes+=quote.getField(i);
		      lastB=b;
		    }
		    txt+=video.getGapBar(100-lastB);
		    $('#prg_video').html(txt);
		    $('#quotes').html(quotes);
		    quote.AuthorDDL.setListeners();
		  },
		  getClipBar:function(width,i){
		    return jade.render('.progress-bar.progress-bar-primary(style="width:'+width+'%",onclick="video.onClipBarClick($(this),'+i+')")');
		  },
		  getGapBar:function(width){
			  return jade.render('.progress-bar.progress-bar-info(style="width:'+width+'%")');
		  },
		  onClipBarClick:function(prg,i){
			  video.player.loadVideoById({'videoId': video.videoId, 'startSeconds': video.clips[i][0], 'endSeconds': video.clips[i][1]});
		  },
		  /* getQuoteField:function(i){
				return jade.render(
					'.input-group\n'+
						'\tspan.input-group-btn\n'+
							'\t\tbutton.btn.btn-default.dropdown-toggle(data-toggle="dropdown") Author\n'+
								'\t\t\tspan.caret\n'+
							'\t\tul.dropdown-menu\n'+
								'\t\t\tli\n'+
									'\t\t\t\ta(href="#") p\n'
						
						//+'\tinput.quote.col-md-5.form-control(onchange="data.store()",placeholder="Quote @ '+Math.floor(video.clips[i][0])+'s")'
						+'\tinput.quote.col-md-5.form-control(placeholder="Quote @ '+Math.floor(video.clips[i][0])+'s")'
						+'\tdiv.inner-addon.right-addon\n'
						+'\t\ti.glyphicon.glyphicon-comment\n'
						+'\t\tspan.input-group-btn\n'
						+'\t\t\tbutton.btn.btn-primary.shareQuote\n'
						+'\t\t\t\tspan.glyphicon.glyphicon-glyphicon-share-alt'
					);
		  }, */
		  loadURL:function(url){
			var videoid = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
			if(videoid == null) return;
			
			if(!video.isYTAPIReady)
			{
				setTimeout(function(){
					video.loadURL(url);
				},500);
			}
			else
			{
//				$('#vidURL')[0].disabled=true;
		       video.videoId=videoid[1];
		       video.load(video.videoId);
			}
		  }
		};