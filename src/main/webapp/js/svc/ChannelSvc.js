app.service('ChannelSvc',['$http','$q',function($http,$q){
	this.list=function(offset,limit){
	    var chain=
		    $http.get('/channel/list',{params:{offset:offset,limit:limit}});
	    return chain;
	};
	var _isVerified = {};
	this.isVerified=function(channelId){
	    if(_isVerified[channelId] !== undefined)
		return _isVerified[channelId];
	    var asyncTask = $q.defer();
	    var canceller=$q.defer();
	    $http
		.get('/channel/isTrusted',{params:{channelId:channelId},timeout:canceller.promise})
		.success(function(response){
		    asyncTask.resolve(response);
		})
		.error(function(reason){
		    _isVerified[channelId] = undefined;
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
	    return _isVerified[channelId] = asyncTask.promise;
	};
	
	this.insert = function(channelId) {
	    return $http.get('/channel/insert', {params: {
		    id:channelId,
		    access_token: localStorage.getItem('access_token')
	    }});
	};
    }]);