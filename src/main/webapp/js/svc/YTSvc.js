var YTSvc={
		key:"AIzaSyBNWNnIBvHyBaREu7ikXf7jqW_865D4CD0",
        data:{channel:{title:'',thumbnail:'',id:-1},id:-1,thumbnail:'',title:''},
        callBackFn:function(d){},
		getData:function(videoId,callBackFn){
            YTSvc.data={channel:{title:'',thumbnail:'',id:-1},id:-1,thumbnail:'',title:''};
            YTSvc.callBackFn=callBackFn;
			$.ajax({
				url:"https://www.googleapis.com/youtube/v3/videos?id="+videoId+"&key="+YTSvc.key
                    +"&part=snippet",
                type:'GET',
                success:function(data){
                        YTSvc.data.title=data.items[0].snippet.title;
                        YTSvc.data.thumbnail=data.items[0].snippet.thumbnails.default.url;
                        YTSvc.data.id=data.items[0].id;
                        var channelId=data.items[0].snippet.channelId;
	                	$.ajax({
	                		url:'https://www.googleapis.com/youtube/v3/channels?part=snippet&id='+channelId+'&key='+YTSvc.key,
	                		type:'GET',
                            success:function(data){
	                			YTSvc.data.channel.title=data.items[0].snippet.title;
                                YTSvc.data.channel.thumbnail=data.items[0].snippet.thumbnails.default.url;
                                YTSvc.data.channel.id=data.items[0].id;
                                YTSvc.callBackFn(YTSvc.data);
	                		}
	                	});
                }
			});
		},
		getChannelData: function(channelId,callback){
			$.ajax({
	        		url:'https://www.googleapis.com/youtube/v3/channels?part=snippet&id='+channelId+'&key='+YTSvc.key,
	        		type:'GET',
	                success:function(data){
	                		callback({
	                    		id: data.items[0].id,
	                    		title: data.items[0].snippet.title,
	                    		thumbnail: data.items[0].snippet.thumbnails.default.url
	                    });
	        		}
        		});
		}
};