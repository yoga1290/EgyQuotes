app.service('PersonSvc',['$http','$q', function($http,$q) {
	var _findByName = {};
	this.findByName = function(name) {
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
	    _findByName[name] = asyncTask.promise;
	    return asyncTask.promise;
	};

	var _findById = {};
    this.findById = function(id) {
        if(_findById[name] !== undefined)
        return _findById[name];

        var asyncTask = $q.defer();
        var canceller=$q.defer();
        $http
        .get('/person/findById',{params:{id:id}, timeout:canceller.promise})
        .success(function(response){
            asyncTask.resolve(response);
        })
        .error(function(reason){
            _findById[id] = undefined;
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
            _findById[id] = undefined;
            return asyncTask.promise;
        };
        asyncTask.promise.finally=function(cb){
        asyncTask.promise.then(cb,cb);
            return asyncTask.promise;
        };
        _findById[id] = asyncTask.promise;
        return asyncTask.promise;
    };
	
	this.insert=function(name){
	    var chain=
		    $http.post('/person','',{params:{
			    name:name
			}
		    });
	    return chain;
	};
    }]);