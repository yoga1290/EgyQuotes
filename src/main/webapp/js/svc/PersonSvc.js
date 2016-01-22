app.service('PersonSvc',['$http',function($http,$q){
	var _findByName = {};
	this.findByName=function(name){
	    if(_findByName[name] !== undefined)
		return _findByName[name];
	    
	    var asyncTask = $q.defer();
	    var canceller=$q.defer();
	    $http
		.get('/person/find',{params:{name:name},timeout:canceller.promise})
		.success(function(response){
		    asyncTask.resolve(response);
		})
		.error(function(reason){
		    _findByName[name] = undefined;
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
	    return _findByName[name] = asyncTask.promise;
	};
	
	this.insert=function(name){
	    var chain=
		    $http.post('/person','',{params:{
			    name:name,
			    access_token: localStorage.getItem('access_token')
			}
		    });
	    return chain;
	};
    }]);