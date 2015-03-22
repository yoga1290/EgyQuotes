var QuoteSvc={
		/*
		$.ajax({
	url:'/Quote?access_token='+localStorage.getItem('access_token'),
	type:'POST',
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json' 
	},
	dataType:'json',
	data:JSON.stringify({
			videoId:'',
			personId:,
			quote:'',
			start:'',
			end:''}),
	success: success
});
		*/
		insert:function(personId,quote,start,end,success){
			$.ajax({
				url:'/Quote?access_token='+localStorage.getItem('access_token'),
				type:'POST',
				data:
					'videoId='+video.videoId
					+'&personId='+personId
					+'&quote='+quote
					+'&start='+start
					+'&end='+end,
/* 					JSON.stringify({
					videoId:video.videoId,
					personId:personId,
					quote:quote,
					start:start,
					end:end}), */
				success: success,
				error:error
			});
		}
};