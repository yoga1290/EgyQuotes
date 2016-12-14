app.service('ChannelSvc',['$http','$q',function($http,$q) {
	
	this.list = function(offset,limit) {
	    return $http.get('/channel/list',{params:{offset:offset,limit:limit}});
	};
	
	var _findByChannelId = {};
	this.findByChannelId = function(channelId) {
	    if(_findByChannelId[channelId] !== undefined)
		return _findByChannelId[channelId];
	    var asyncTask = $q.defer();
	    var canceller=$q.defer();
	    $http
		.get('/channel/findByChannelId', {params:{channelId:channelId},timeout:canceller.promise})
		.success(function(response){
		    asyncTask.resolve(response);
		})
		.error(function(reason){
		    _findByChannelId[channelId] = undefined;
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
	    return _findByChannelId[channelId] = asyncTask.promise;
	};
	
	this.insert = function(channelId) {
	    return $http.get('/channel/insert', {params: {
		    id:channelId,
		    access_token: localStorage.getItem('access_token')
	    }});
	};
	
	

	var _searchByName = {};
	this.searchByName = function(name, page, size) {
	    if(_searchByName[name] !== undefined)
		return _searchByName[name];
	    var asyncTask = $q.defer();
	    var canceller=$q.defer();
	    $http
		.get('/channel/searchByName',{params:{name:name, page:page, size:size},timeout:canceller.promise})
		.success(function(response){
		    asyncTask.resolve(response);
		})
		.error(function(reason){
//		    _isVerified[name] = undefined;
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
    }]);