
var TagSvc={
		all:function(success){
			return $.ajax({
				url:'/tag/all',
				type:'GET',
				success:success
			});
		},
		find:function(tag,success){
			return $.ajax({
				url:'/tag/find?tag='+encodeURIComponent(tag),
				type:'GET',
				success:success
			});
		},
		insert:function( tag,quoteId,success){
			return $.ajax({
				url:'/tag/insert',
				type:'POST',
				//TODO
				data:'tag='+tag
								+'&quoteId='+quoteId
								,
				success:success
			});
		}
	};
