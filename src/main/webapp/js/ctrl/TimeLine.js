var TimeLine={
		quoteShowTimeMp:{},
		quoteHideTimeMp:{},
		quoteIdAtTime:{},
		player:{},
		sortedSeg:[],
		init:function(){
			$('#TimeLine').css('display','');
			var canvas=$('#TimeLine')[0];
			canvas.width=$('#TimeLine').parent().width();
			canvas.height=20;
			var ctx=canvas.getContext('2d');
			ctx.fillStyle = "#5bc0de";
			ctx.fillRect(0,0,canvas.width,canvas.height);
			$('#TimeLinePointer').css('display','');
			$('#TimeLinePointer').css('position','absolute');
		},
		draw:function(){
			var canvas=$('#TimeLine')[0];
			var ctx=canvas.getContext('2d');
			ctx.fillStyle = "red";
				for(var i=0;i<TimeLine.sortedSeg.length;i++)
				{
					var o=(TimeLine.sortedSeg[i].start/TimeLine.player.getDuration())*canvas.width;
					var w=(TimeLine.sortedSeg[i].end/TimeLine.player.getDuration())*canvas.width-o;
					ctx.fillRect(o,0,w,canvas.height);
				}
				
				$('#TimeLinePointer').click(function(e){
					var time=e.offsetX/$('#TimeLine').width()*TimeLine.player.getDuration();
					TimeLine.player.seekTo(time);
				});
				$('#TimeLinePointer').mousemove(function(e){
					var time=e.offsetX/$('#TimeLine').width()*TimeLine.player.getDuration();
					$('[data-href*=facebook]').hide();
				  for(var i=0;i<TimeLine.sortedSeg.length;i++)
					  if(TimeLine.sortedSeg[i].start<=time && time<=TimeLine.sortedSeg[i].end)
					  {
						  // var v=$('#video');
						  // var post=$('[data-href*='+TimeLine.sortedSeg[i].quoteId+'] span iframe');
						  // post.css('display','').show();
						  // post.css('top',v.offset().top+v.height()/2-200).height(300)
						  // 	.parent().parent().css('display','')
						  // 		.removeAttr('height')
						  // 		.css('top',v.offset().top+v.height()/2-200)
						  // 		.height(300);
						  // post.css('left',e.offsetX)
						  // 	.parent().parent().css('left',e.offsetX);


//						  if((e.offsetX-post.width())>=0)
//							  post.css('left',e.offsetX);//-post.width());
//						  else
//							  post.css('left',e.offsetX);
						  
						  // post.animate({width:350,height:350,top:v.offset().top,left:e.offsetX-post.width()},3000);
						  
					  }
				});
		},
		resize:function(){
			setTimeout(function(){
				TimeLine.init();
				TimeLine.draw();
			},500);		
		},
		load:function(videoId,player,callback){
			TimeLine.resize();
			TimeLine.player=player;
			
			VideoSvc.findById(videoId,function(response){
				TimeLine.sortedSeg=[];
				TimeLine.quoteIdAtTime={};
				for(var i=0;i<response.start.length;i++)
				{
					TimeLine.sortedSeg.push({start:response.start[i],end:response.end[i],quoteId:response.quoteId});
					
					// TimeLine.quoteShowTimeMp[Math.floor(response.start[i])]=response.quoteId[i];
					// TimeLine.quoteHideTimeMp[Math.ceil(response.end[i])]=response.quoteId[i];
					

					// for(var j=Math.floor(response.start[i]);j<=Math.ceil(response.end[i]);j++)
					// 	if(TimeLine.quoteIdAtTime[j]==undefined)
					// 		TimeLine.quoteIdAtTime[j]=[response.quoteId[i]];
					// 	else
					// 		TimeLine.quoteIdAtTime[j].push(response.quoteId[i]);
					var j=Math.floor(response.start[i]);
					if(TimeLine.quoteIdAtTime[j]==undefined)
							TimeLine.quoteIdAtTime[j]=[response.quoteId[i]];
						else
							TimeLine.quoteIdAtTime[j].push(response.quoteId[i]);
				}
				TimeLine.sortedSeg.sort(function(a,b){
					if(a.start<b.start)	return -1;
					if(a.start>b.start)	return 1;
					if(a.end<b.end)	return -1;
					if(a.end>b.end)	return 1;
					return 0;
				});
//				$('#TimeLinePointer').mouseout(function(e){
//					$('[data-href*=facebook]').hide();
//				});
				TimeLine.draw(player);
				fbprv.loadPosts(response.quoteId);
				
				if(callback!=undefined)
					callback();
			});
		},
		setPointer:function(player){
			TimeLine.player=player;
			var canvas=$('#TimeLinePointer');
			canvas.css('left',$('#TimeLine').position().left);
			canvas.css('top',$('#TimeLine').position().top);
			
			canvas=canvas[0];
			canvas.width=canvas.style.width=$('#TimeLine').width();
			canvas.height=canvas.style.height=$('#TimeLine').height();
			
			var ctx=canvas.getContext('2d');
			
			var w=player.getCurrentTime()/player.getDuration()*canvas.width;

			if(TimeLine.quoteIdAtTime[Math.floor(player.getCurrentTime())]!=undefined)
				for (var i = 0; i < TimeLine.quoteIdAtTime[Math.floor(player.getCurrentTime())].length; i++)
					fbprv.showPost(TimeLine.quoteIdAtTime[Math.floor(player.getCurrentTime())][i]);
				
			
			ctx.clearRect(0,0,w,1<<10);
			ctx.fillStyle = "green";
			ctx.fillRect(w,0,5,1<<10);

			setTimeout(function(){
				if(TimeLine.player.getPlayerState()==YT.PlayerState.PLAYING)
					TimeLine.setPointer(player);
			},600);
//			
//			if(TimeLine.quoteShowTimeMp[Math.floor(player.getCurrentTime())]!=undefined)
//			{
//				var quoteId=TimeLine.quoteShowTimeMp[Math.floor(player.getCurrentTime())];
//				fbprv.showPost(quoteId);
//			}//*/
//			if(TimeLine.quoteHideTimeMp[Math.floor(player.getCurrentTime())]!=undefined)
//			{
//				var quoteId=TimeLine.quoteHideTimeMp[Math.floor(player.getCurrentTime())];
//				fbprv.hidePost(quoteId);
//			}//*/
			
		}
};