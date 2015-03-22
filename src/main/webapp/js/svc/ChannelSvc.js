var ChannelSvc={
		insert:function(id,success){
			$.ajax({
				url:'/channel/insert?id='+id+'&access_token='+localStorage.getItem('access_token'),
				type:'GET',
				success: success
			});
		},
		list:function(offset,limit,success){
			
			//success([{"key":{"name":"CHANNEL-ID",},"properties":{"videos":null}}]); /*
			
			$.ajax({
				url:'/channel/list?offset='+offset+'&limit='+limit,
				type:'GET',
				success: success
			});//*/
		},
};