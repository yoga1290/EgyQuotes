app.service('PlaylistSvc',['$http','$q',function($http,$q) {
	
	this.list = function(offset,limit) {
	    return $http.get('/channel/list',{params:{offset:offset,limit:limit}});
	};
	
	var _searchByName = {};
	this.searchByName = function(name, quoteId) {
	    if(_searchByName[name] !== undefined)
		return _searchByName[name];
	    var asyncTask = $q.defer();
	    var canceller=$q.defer();
	    $http
		.get('/playlist', {params:{name:name, quoteId: quoteId},timeout:canceller.promise})
		.success(function(response){
		    asyncTask.resolve(response);
		})
		.error(function(reason){
		    _searchByName[name] = undefined;
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
	    //TODO: memoize by quoteId & name now?
//	    _searchByName[name] = asyncTask.promise;
	    return asyncTask.promise;
	};
	
	this.insert = function(name, quotes) {
	    var quoteId = [];
	    quotes.forEach(function(quote) {
	        quoteId.push(quote.id);
	    });
	    return $http.post('/playlist', {name: name, quotes: quoteId} );
	};

	this.update = function(id, name, quotes) {
        return $http.put('/playlist', {name: name, quotes: quotes}, {params: {id: id}} );
    };

    this.list = function(page, size) {
        return $http.get('/playlist/list', {params: {page: page, size: size}} );
    };
	
    }]);