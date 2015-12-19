app
    .service('facebookSvc',['$http',function($http){
	this.getUserPicture=function(){
	    var chain=
		$http.get('https://graph.facebook.com/me?fields=id,picture.width(1000)&access_token='+localStorage.getItem('access_token'));
	    return chain;
	};
    }])
    .service('QuoteSvc',function($http,$q){
	this.query=function(offset,limit,tags,personIds){
		var chain=
			$http
			.post('/Quote/grid',{
				offset: offset,
				limit:  limit,
				tags:   tags,
				personIds: personIds
			});
		return chain;
	};
	this.insert=function(quote){
	    var chain=
		    $http.post('/Quote',{
				videoId:quote.videoId,
				personId:quote.personId,
				quote:quote.quote,
				start:quote.start,
				end:quote.end,
				access_token: localStorage.getItem('access_token')
			});
	    return chain;
	};
	this.count = function() {
	    var chain=
		$http.get('/Quote/count');
	    return chain;
	};
	this.list=function(offset,limit){
	    var chain=
		$http.get('/Quote/list',{params:{offset:offset,limit:limit}});
	    return chain;
	};
	var _findById = {};
	this.findById=function(quoteId){
	    var asyncTask = $q.defer();
	    asyncTask.promise.abort=function(){};
	    if(_findById[quoteId] !== undefined)
		asyncTask.resolve(_findById[quoteId]);
	    else {
		var canceller=$q.defer();
		$http
		    $http.get('/Quote?id='+quoteId,{timeout:canceller.promise})
		    .success(function(response){
			_findById[quoteId] = response;
			asyncTask.resolve(response);
		    })
		    .error(function(reason){
			asyncTask.reject(reason);
		    });
		asyncTask.promise.abort=function(){
		    canceller.resolve();
		};
	    }
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
	    return asyncTask.promise;
	};
    })
    .service('TagSvc',function($http,$q){
	var _find = {};
	this.find=function(tag){
	    var asyncTask = $q.defer();
	    asyncTask.promise.abort=function(){};
	    if(_find[tag] !== undefined)
		asyncTask.resolve(_find[tag]);
	    else {
		var canceller=$q.defer();
		$http
		    .get('/tag/find',{params:{tag:tag},timeout:canceller.promise})
		    .success(function(response){
			_find[tag] = response;
			asyncTask.resolve(response);
		    })
		    .error(function(reason){
			asyncTask.reject(reason);
		    });
		asyncTask.promise.abort=function(){
		    canceller.resolve();
		};
	    }
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
	    return asyncTask.promise;
	};
	
	
	this.insert=function(tag,quoteId){
	    var chain=
		$http
		    .post('/tag/insert','',{params:{tag:tag,quoteId:quoteId}});
	    return chain;
	};
	
	var _findByQuoteId = {};
	this.findByQuoteId=function(quoteId){
	    var asyncTask = $q.defer();
	    asyncTask.promise.abort=function(){};
	    if(_findByQuoteId[quoteId] !== undefined)
		asyncTask.resolve(_findByQuoteId[quoteId]);
	    else {
		var canceller=$q.defer();
		$http
		    .get('/tag/findByQuoteId',{params:{quoteId:quoteId},timeout:canceller.promise})
		    .success(function(response){
			_findByQuoteId[quoteId] = response;
			asyncTask.resolve(response);
		    })
		    .error(function(reason){
			asyncTask.reject(reason);
		    });
		asyncTask.promise.abort=function(){
		    canceller.resolve();
		};
	    }
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
	    return asyncTask.promise;
	};
    })
    .service('PersonSvc',function($http,$q){
	this.findByName=function(name){
	    var canceller=$q.defer();
	    var chain=
		    $http.get('/person/find',{params:{name:name},timeout:canceller.promise});
	    chain.abort=function(){
		canceller.resolve();
	    };
	    return chain;
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
    })
    .service('VideoSvc',function($http){
	this.findById=function(videoId){
	    var chain=
		    $http.get('/video',{params:{id:videoId}});
	    return chain;
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
    })
    .service('ChannelSvc',function($http,$q){
	this.list=function(offset,limit){
	    var chain=
		    $http.get('/channel/list',{params:{offset:offset,limit:limit}});
	    return chain;
	};
	var _isVerified = {};
	this.isVerified=function(channelId){
	    var chain=
		    $http;
	    var asyncTask = $q.defer();
	    asyncTask.promise.abort=function(){};
	    if(_isVerified[channelId] !== undefined)
		asyncTask.resolve(_isVerified[channelId]);
	    else {
		var canceller=$q.defer();
		$http
		    .get('/channel/isTrusted',{params:{channelId:channelId},timeout:canceller.promise})
		    .success(function(response){
			_isVerified[channelId] = response;
			asyncTask.resolve(response);
		    })
		    .error(function(reason){
			asyncTask.reject(reason);
		    });
		asyncTask.promise.abort=function(){
		    canceller.resolve();
		};
	    }
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
	    return asyncTask.promise;
	};
    })
    .service('QuoteAnalyticsSvc',function($http,$q){
            
            this.findByQuoteId=function(quoteId){
                var canceller = $q.defer();
                var chain=
                    $http.get('/quoteanalytics/findByQuoteId',
                        { "quoteId":quoteId },
                        {timeout:canceller.promise});
                chain.abort=function(){
                        canceller.resolve();
                    };
                return chain;
            };

            this.findByLikes=function(likes){
                var canceller = $q.defer();
                var chain=
                    $http.get('/quoteanalytics/findByLikes',
                        { "likes":likes },
                        {timeout:canceller.promise});
                chain.abort=function(){
                        canceller.resolve();
                    };
                return chain;
            };

            this.findByShares=function(shares){
                var canceller = $q.defer();
                var chain=
                    $http.get('/quoteanalytics/findByShares',
                        { "shares":shares },
                        {timeout:canceller.promise});
                chain.abort=function(){
                        canceller.resolve();
                    };
                return chain;
            };

            this.findByLastSync=function(lastSync){
                var canceller = $q.defer();
                var chain=
                    $http.get('/quoteanalytics/findByLastSync',
                        { "lastSync":lastSync },
                        {timeout:canceller.promise});
                chain.abort=function(){
                        canceller.resolve();
                    };
                return chain;
            };

            this.findByTopLikes=function(offset,limit){
                var canceller = $q.defer();
                var chain=
                    $http.get('/quoteanalytics/findByTopLikes',
                        {params:
							{ 'offset':offset, 'limit':limit },
                        timeout:canceller.promise
						});
                chain.abort=function(){
                        canceller.resolve();
                    };
                return chain;
            };

            this.findByTopShares=function(offset,limit){
                var canceller = $q.defer();
                var chain=
                    $http.get('/quoteanalytics/findByTopShares',
                        {params:
							{ 'offset':offset, 'limit':limit },
                        timeout:canceller.promise
						});
                chain.abort=function(){
                        canceller.resolve();
                    };
                return chain;
            };

            this.findByTopLastSync=function(offset,limit){
                var canceller = $q.defer();
                var chain=
                    $http.get('/quoteanalytics/findByTopLastSync',
                        {params:
							{ 'offset':offset, 'limit':limit },
                        timeout:canceller.promise
						});
                chain.abort=function(){
                        canceller.resolve();
                    };
                return chain;
            };

        });