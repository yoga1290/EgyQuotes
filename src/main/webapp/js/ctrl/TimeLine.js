var TimeLine={
		quoteShowTimeMp:{},
		quoteHideTimeMp:{},
		load:function(videoId,player){
			$('#TimeLine').css('display','');
			var canvas=$('#TimeLine')[0];
			canvas.width=$('#TimeLine').parent().width();
			canvas.height=20;
			var ctx=canvas.getContext('2d');
			ctx.fillStyle = "#5bc0de";
			ctx.fillRect(0,0,canvas.width,canvas.height);
			$('#TimeLinePointer').css('display','');
			$('#TimeLinePointer').css('position','absolute');
			
			VideoSvc.findById(videoId,function(response){
				var sortedSeg=[];
				for(var i=0;i<response.start.length;i++)
				{
					sortedSeg.push({start:response.start[i],end:response.end[i],quoteId:response.quoteId});
					
					TimeLine.quoteShowTimeMp[Math.floor(response.start[i])]=response.quoteId[i];
					TimeLine.quoteHideTimeMp[Math.ceil(response.end[i])]=response.quoteId[i];
				}
				sortedSeg.sort(function(a,b){
					if(a.start<b.start)	return -1;
					if(a.start>b.start)	return 1;
					if(a.end<b.end)	return -1;
					if(a.end>b.end)	return 1;
					return 0;
				});
				
				ctx.fillStyle = "red";
				for(var i=0;i<sortedSeg.length;i++)
				{
					var o=(sortedSeg[i].start/player.getDuration())*canvas.width;
					var w=(sortedSeg[i].end/player.getDuration())*canvas.width-o;
					ctx.fillRect(o,0,w,canvas.height);
				}
				
				$('#TimeLinePointer').click(function(e){
				  video.player.seekTo( e.offsetX/$('#TimeLine').width()*video.player.getDuration());
				});
				
				fbprv.loadPosts(response.quoteId);
			});
		},
		setPointer:function(player){
			var canvas=$('#TimeLinePointer');
			canvas.css('left',$('#TimeLine').position().left);
			canvas.css('top',$('#TimeLine').position().top);
			
			canvas=canvas[0];
			canvas.width=canvas.style.width=$('#TimeLine').width();
			canvas.height=canvas.style.height=$('#TimeLine').height();
			
			var ctx=canvas.getContext('2d');
			
			var w=player.getCurrentTime()/player.getDuration()*canvas.width;
			
			ctx.clearRect(0,0,w,1<<10);
			ctx.fillStyle = "green";
			ctx.fillRect(w,0,5,1<<10);

			setTimeout(function(){
				if(video.player.getPlayerState()==YT.PlayerState.PLAYING)
					TimeLine.setPointer(player);
			},600);
			
			if(TimeLine.quoteShowTimeMp[Math.floor(player.getCurrentTime())]!=undefined)
			{
				var quoteId=TimeLine.quoteShowTimeMp[Math.floor(player.getCurrentTime())];
				fbprv.showPost(quoteId);
			}//*/
			if(TimeLine.quoteHideTimeMp[Math.floor(player.getCurrentTime())]!=undefined)
			{
				var quoteId=TimeLine.quoteHideTimeMp[Math.floor(player.getCurrentTime())];
				fbprv.hidePost(quoteId);
			}//*/
			
		}
};