app.service('PageLoader', [function(){
    this.count = 0;
}]);

app.config(['$httpProvider', function($httpProvider) {
	
    $httpProvider.interceptors.push(['$q','PageLoader', function($q, PageLoader) {
	var self={};
	return self={
	    count:0,
	    changeLoader:function(){
		if(PageLoader.count==0)
		    stickingEffect.scan();
	    },
	    // optional method
	    'request': function(config) {
		PageLoader.count++;
		self.changeLoader();
	      // do something on success
	      return config;
	    },

	    // optional method
	   'requestError': function(rejection) {
	      // do something on error
	      PageLoader.count--;
	      self.changeLoader();
	      //TODO:
	      return $q.reject(rejection);
	    },



	    // optional method
	    'response': function(response) {
		PageLoader.count--;
		self.changeLoader();
	      // do something on success
	      
	      return response;
	    },

	    // optional method
	   'responseError': function(rejection) {
	       PageLoader.count--;
//	       window.location.href ="/#/error/123";
	       self.changeLoader();
	      // do something on error
//	      if(rejection.status>=400)
//		  window.location.href ="/#/error/"+rejection.status;
	      return $q.reject(rejection);
	    }
	};
    }]);
}]);