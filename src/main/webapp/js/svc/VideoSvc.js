app.service('VideoSvc',['$http', '$q', 'YTKey', function($http, $q, YTKey){
	var _findById = {};
	this.findById=function(videoId){
	    if(_findById[videoId] !== undefined)
		return _findById[videoId];
	    
	    var asyncTask = $q.defer();
	    var canceller=$q.defer();
	    $http
		.get('/api/video',{params:{id:videoId},timeout:canceller.promise})
		.success(function(response){
		    asyncTask.resolve(response);
		})
		.error(function(reason){
		    _findById[videoId] = undefined;
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
	    return _findById[videoId] = asyncTask.promise;
	};
	
	var _getChannelData = {};
	this.getChannelData=function(channelId){
	    if(_getChannelData[channelId] !== undefined)
		return _getChannelData[channelId];
	    
	    var asyncTask = $q.defer();
	    var chain=
		    $http.get('https://www.googleapis.com/youtube/v3/channels?part=snippet&key='+YTKey+'&id='+channelId)
		    .success(function(response){
			asyncTask.resolve(response);
		    })
		    .error(function(reason){
			_getChannelData[channelId] = undefined;
			asyncTask.reject(reason);
		    });
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
	    
	    _getChannelData[channelId] = asyncTask.promise;
	    
	    return asyncTask.promise;
	};
	
	var _getChannelId = {};
	this.getChannelId=function(videoId){
	    if(_getChannelId[videoId] !== undefined)
		return _getChannelId[videoId];
	    var asyncTask = $q.defer();
	    
	    var chain=
		    $http.get('https://www.googleapis.com/youtube/v3/videos?part=snippet&key='+YTKey+'&id='+videoId)
		    .success(function(response){
			asyncTask.resolve(response);
		    })
		    .error(function(reason){
			_getChannelId[videoId] = undefined;
			asyncTask.reject(reason);
		    });
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
	    
	    _getChannelId[videoId] = asyncTask.promise;
	    return _getChannelId[videoId];
	};
	
	// see https://developers.google.com/youtube/v3/docs/search/list#parameters
	this.findByChannelIdAndTime = function(channelId, start, end, q, pageToken) {
	    return $http.get('https://www.googleapis.com/youtube/v3/search', { params: {
			    key: YTKey,
			    part: 'snippet',
			    channelId: channelId,
			    publishedAfter: new Date(start).toISOString(),
			    publishedBefore: new Date(end).toISOString(),
			    q: q,
			    pageToken: pageToken
		    }});
    };
}]);