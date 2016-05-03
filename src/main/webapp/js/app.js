var app=angular.module('app',['ngRoute']);
app
    .directive('jade',['$compile', function($compile){
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
    }]);
app.config(['$routeProvider','$httpProvider', function($routeProvider,$httpProvider){
	$routeProvider
	.when('/', {
	    controller: 'gridCtrl'
	})
	.when('/search?tags=:tags', {
	    controller: 'gridCtrl'
	})
	.when('/search?tags=:tags&people=:personId', {
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
	.when('/story?:story', {
	    templateUrl: 'video.html',
	    controller: 'videoCtrl'
	})
	.when('/settings', {
	    templateUrl: 'settings.html',
	    controller: 'SettingsCtrl'
	})
	.when('/error/:code', {
	    templateUrl: 'error.html',
	    controller: 'AlertCtrl'
	})
	.when('/WatchLater', {
	    templateUrl: 'WatchLater.html',
	    controller: 'WatchLaterCtrl'
	});
}]);
