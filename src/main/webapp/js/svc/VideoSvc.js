app.service('VideoSvc',['$http', '$q', function($http, $q){
	var _findById = {};
	this.findById=function(videoId){
	    if(_findById[videoId] !== undefined)
		return _findById[videoId];
	    
	    var asyncTask = $q.defer();
	    var canceller=$q.defer();
	    $http
		.get('/video',{params:{id:videoId},timeout:canceller.promise})
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
	
	var YTKey='AIzaSyBNWNnIBvHyBaREu7ikXf7jqW_865D4CD0';
	this.getChannelData=function(channelId){
	    var chain=
		    $http.get('https://www.googleapis.com/youtube/v3/channels?part=snippet&key='+YTKey+'&id='+channelId);
	    return chain;
	};
	this.getChannelId=function(videoId){
	    var chain=
		    $http.get('https://www.googleapis.com/youtube/v3/videos?part=snippet&key='+YTKey+'&id='+videoId);
	    return chain;
	};
    }]);