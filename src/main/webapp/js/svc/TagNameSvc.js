app.service('TagNameSvc',['$http','$q', 
    function($http, $q){
	var _searchByTag = {};
	this.searchByTag = function(tag) {
	    var asyncTask = $q.defer();
	    asyncTask.promise.abort=function(){};
	    if(_searchByTag[tag] !== undefined)
		return _searchByTag[tag];
	    else {
		var canceller=$q.defer();
		$http
		    .get('/tagName/searchByTag', {params:{tag:tag},timeout:canceller.promise})
		    .success(function(response) {
			asyncTask.resolve(response);
		    })
		    .error(function(reason) {
			_searchByTag[tag] = undefined;
			asyncTask.reject(reason);
		    });
		asyncTask.promise.abort = function() {
		    canceller.resolve();
		};
	    }
	    asyncTask.promise.success = function(cb) {
		asyncTask.promise.then(cb,function(){});
		return asyncTask.promise;
	    };
	    asyncTask.promise.error = function(cb) {
		asyncTask.promise.then(function(){},cb);
		return asyncTask.promise;
	    };
	    asyncTask.promise.finally = function(cb) {
		asyncTask.promise.then(cb,cb);
		return asyncTask.promise;
	    };
	    _searchByTag[tag] = asyncTask.promise;
	    return asyncTask.promise;
	};

    }]);