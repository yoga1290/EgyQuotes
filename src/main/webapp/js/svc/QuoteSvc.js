var QuoteSvc={


		findById:function(id,success,error){
			$.ajax({
				url:'/Quote?id='+id,
				type:'GET',
				success: success,
				error:error
			});
		},


		insert:function(videoId,personId,quote,start,end,success,error){
			$.ajax({
				url:'/Quote?access_token='+localStorage.getItem('access_token'),
				type:'POST',
				data:
					'videoId='+videoId
					+'&personId='+encodeURIComponent(personId)
					+'&quote='+encodeURIComponent(quote)
					+'&start='+start
					+'&end='+end,
				success: success,
				error:error
			});
		}
};