app.service('TagSvc',['$http','$q', function($http,$q){
	var _find = {};
	this.find=function(tag) {
	    var asyncTask = $q.defer();
	    asyncTask.promise.abort=function(){};
	    if(_find[tag] !== undefined)
		asyncTask.resolve(_find[tag]);
	    else {
		var canceller=$q.defer();
		$http
		    .get('/tag/find',{params:{tag:tag},timeout:canceller.promise})
		    .success(function(response){
			asyncTask.resolve(response);
		    })
		    .error(function(reason){
			_find[tag] = undefined;
			asyncTask.reject(reason);
		    });
		asyncTask.promise.abort=function(){
		    canceller.resolve();
		};
	    }
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
	    return asyncTask.promise;
	};
	
	var _findQuoteIdByTag = {};
	this.findQuoteIdByTag=function(tag) {
	    var asyncTask = $q.defer();
	    asyncTask.promise.abort=function(){};
	    if(_findQuoteIdByTag[tag] !== undefined)
		asyncTask.resolve(_find[tag]);
	    else {
		var canceller=$q.defer();
		//TODO:
		$http
		    .get('/tag/find',{params:{tag:tag},timeout:canceller.promise})
		    .success(function(response){
			asyncTask.resolve(response);
		    })
		    .error(function(reason){
			_findQuoteIdByTag[tag] = undefined;
			asyncTask.reject(reason);
		    });
		asyncTask.promise.abort=function(){
		    canceller.resolve();
		};
	    }
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
	    return asyncTask.promise;
	};
	
	
	this.insert=function(tag,quoteId){
	    var chain=
		$http
		    .post('/tag/insert','',{params:{tag:tag,quoteId:quoteId}});
	    return chain;
	};
	
	var _findByQuoteId = {};
	this.findByQuoteId=function(quoteId){
	    if(_findByQuoteId[quoteId] !== undefined)
		return _findByQuoteId[quoteId];
	    
	    var asyncTask = $q.defer();
	    var canceller=$q.defer();
	    $http
		.get('/tag/findByQuoteId',{params:{quoteId:quoteId},timeout:canceller.promise})
		.success(function(response){
		    asyncTask.resolve(response);
		})
		.error(function(reason){
		    _findByQuoteId[quoteId] = undefined;
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
	    return _findByQuoteId[quoteId] = asyncTask.promise;
	};
    }]);