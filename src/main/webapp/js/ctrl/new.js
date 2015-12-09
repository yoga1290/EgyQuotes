var app=angular.module('app',['ngRoute']);
app
    .directive('jade',function($compile){
	return{
	    transclude: true,
	    template: '<div ng-transclude></div>',
	    restrict: 'E',
	    link: function(scope, element){
		element
		    .after(
			$compile(
			    jade
				.render(
				    element.html(),
				    {pretty:'\t'}
				)
			)(scope)
		    )
		    .remove();
	    }
	};
    });
app.config(function($routeProvider,$httpProvider){
	$routeProvider
	.when('/', {
		controller: 'gridCtrl'
	    })
	    .when('/quote/:quoteId', {
		templateUrl: 'video.html',
		controller: 'videoCtrl'
	    })
	    .when('/s=:s', {
		templateUrl: 'video.html',
		controller: 'videoCtrl'
	    })
	    .when('/v=:v', {
		templateUrl: 'video.html',
		controller: 'videoCtrl'
	    })
	    .when('/new/:videoId', {
		templateUrl: 'video.html',
		controller: 'videoCtrl'
	    })
	    .when('/settings', {
		templateUrl: 'settings.html',
		controller: 'SettingsCtrl'
	    });
    $httpProvider.interceptors.push(function($q){
	var self={};
	return self={
	    count:0,
	    changeLoader:function(){
		if(self.count>0)
		    $('#loader').css('display','');
		else
		{
		    $('#loader').css('display','none');
		    stickingEffect.scan();
		}
	    },
	    // optional method
	    'request': function(config) {
		self.count++;
		self.changeLoader();
	      // do something on success
	      return config;
	    },

	    // optional method
	   'requestError': function(rejection) {
	      // do something on error
	      self.count--;
	      self.changeLoader();
	      return $q.reject(rejection);
	    },



	    // optional method
	    'response': function(response) {
		self.count--;
		self.changeLoader();
	      // do something on success
	      
	      return response;
	    },

	    // optional method
	   'responseError': function(rejection) {
	       self.count--;
	       self.changeLoader();
	      // do something on error
	      return $q.reject(rejection);
	    }
	};
    });
});
