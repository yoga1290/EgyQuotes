app.service('ReactionSvc',['$http','$q',function($http, $q) {
	
	this.list = function(offset,limit) {
	    return $http.get('/channel/list',{params:{offset:offset,limit:limit}});
	};
	
	var _findByQuoteId = {};
	this.findByQuoteId = function(quoteId) {
	    if(_findByQuoteId[quoteId] !== undefined)
		return _findByQuoteId[quoteId];
	    var asyncTask = $q.defer();
	    var canceller=$q.defer();
	    $http
		.get('/reaction/findByQuoteId', {params:{quoteId:quoteId},timeout:canceller.promise})
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
	
	this.insert = function(quoteId, reaction) {
	    return $http.post('/reaction', {}, {params: {
		    reaction: reaction,
		    quoteId: quoteId
	    }});
	};
	
    }]);