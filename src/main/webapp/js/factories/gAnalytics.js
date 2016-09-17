(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-78502732-1', 'auto');


app.run(['$rootScope', '$location', function($rootScope, $location) {
	$rootScope.$on('$routeChangeSuccess', function() {
	    ga('set', 'page', $location.path());
	    ga('send', 'pageview');
	});
}]);

app.config(['$httpProvider', function($httpProvider) {
	
    $httpProvider.interceptors.push(['$q', function($q) {
	var self={};
	return self={
	    requestTime: {},
	    // optional method
	    'request': function(config) {
		self.requestTime[config.url] = new Date().getTime();
	      return config;
	    },

	    // optional method
	   'requestError': function(rejection) {
	      // do something on error
	      self.requestTime[rejection.config.url] -= new Date().getTime();
	      ga('send', 'timing', rejection.config.url, self.requestTime[rejection.config.url]*-1);
	      return $q.reject(rejection);
	    },



	    // optional method
	    'response': function(response) {
		self.requestTime[response.config.url] -= new Date().getTime();
	      ga('send', 'timing', response.config.url, self.requestTime[response.config.url]*-1);
	      
	      return response;
	    },

	    // optional method
	   'responseError': function(rejection) {
	       self.requestTime[rejection.config.url] -= new Date().getTime();
	      ga('send', 'timing', rejection.config.url, self.requestTime[rejection.config.url]*-1);
	      return $q.reject(rejection);
	    }
	};
    }]);
}]);