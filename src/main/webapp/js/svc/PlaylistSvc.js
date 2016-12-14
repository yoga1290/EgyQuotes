app.service('PlaylistSvc',['$http','$q',function($http,$q) {
	
	this.list = function(offset,limit) {
	    return $http.get('/channel/list',{params:{offset:offset,limit:limit}});
	};
	
	var _searchByName = {};
	this.searchByName = function(name) {
	    if(_searchByName[name] !== undefined)
		return _searchByName[name];
	    var asyncTask = $q.defer();
	    var canceller=$q.defer();
	    $http
		.get('/playlist', {params:{name:name},timeout:canceller.promise})
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
	    return _searchByName[name] = asyncTask.promise;
	};
	
	this.insert = function(playlist) {
	    return $http.post('/playlist', playlist, {params: {
		    access_token: localStorage.getItem('access_token')
	    }});
	};
	
    }]);