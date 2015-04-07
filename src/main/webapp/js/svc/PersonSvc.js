var PersonSvc={
		cached:[],
		insert:function(name,success){
			$.ajax({
						url:'/person?access_token='+localStorage.getItem('access_token'),
						type:'POST',
						data:'name='+name,
						success:success
					});
		},
		get:function(id,success){
			success({key:{id:1},properties:{name:'name'}});/*
			
			$.ajax({
				url:'/person?id='+id,
				type:'GET',
				success:success
			});
			//*/
		},
		list:function(offset,limit,success){
			
			//success([{key:{id:1},properties:{name:'name'}},{key:{id:2},properties:{name:'name2'}}]); /*

			if(PersonSvc.cached.length==0)
				$.ajax({
					url:'/people?offset='+offset+'&limit='+limit,
					type:'GET',
					success:success
				});
			else
				success(PersonSvc.cached);
			//*/
		}
	};