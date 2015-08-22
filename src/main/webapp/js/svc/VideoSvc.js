var VideoSvc={
		findById:function(videoId,success){
			//success({"videoId":"abc","start":[1],"end":[3],"quoteId":[1555996451351371]});/*
			$.ajax({
	        		url:'/video?id='+videoId,
	        		type:'GET',
	            success:success
        		});//*/
		}
};