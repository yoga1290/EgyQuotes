app.service('QuoteSvc',['$http','$q', function($http,$q){
	this.query=function(offset,limit,tags,personIds){
		var chain=
			$http
			.post('/Quote/grid',{
				offset: offset,
				limit:  limit,
				tags:   tags,
				personIds: personIds
			});
		return chain;
	};
	this.insert=function(quote){
	    var chain=
		    $http.post('/Quote',{
				videoId:quote.videoId,
				personId:quote.personId,
				quote:quote.quote,
				start:quote.start,
				end:quote.end,
				access_token: localStorage.getItem('access_token')
			});
	    return chain;
	};
	this.count = function() {
	    var chain=
		$http.get('/Quote/count');
	    return chain;
	};
	this.list=function(offset,limit){
	    var chain=
		$http.get('/Quote/list',{params:{offset:offset,limit:limit}});
	    return chain;
	};
	var _findById = {};
	this.findById=function(quoteId){
	    if(_findById[quoteId] !== undefined)
		return _findById[quoteId];
	    var asyncTask = $q.defer();
	    var canceller=$q.defer();
	    $http
		$http.get('/Quote?id='+quoteId,{timeout:canceller.promise})
		.success(function(response){
		    asyncTask.resolve(response);
		})
		.error(function(reason){
		    _findById[quoteId] = undefined;
		    asyncTask.reject(reason);
		});
	    asyncTask.promise.abort=function(){
		canceller.resolve();
	    };
	    asyncTask.promise.success=function(cb){
		asyncTask.promise.then(cb,function(){});
		return asyncTask.promise;
	    };
	    asyncTask.promise.error=function(cb){
		asyncTask.promise.then(function(){},cb);
		return asyncTask.promise;
	    };
	    asyncTask.promise.finally=function(cb){
		asyncTask.promise.then(cb,cb);
		return asyncTask.promise;
	    };
	    return _findById[quoteId] = asyncTask.promise;
	};
    }]);