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
    var test ={};
app.run(['$location', '$window', '$rootScope', function($location, $window, $rootScope) {
    $rootScope.$on('$locationChangeStart', function() {
      var unregister = $rootScope.$on('$locationChangeSuccess', function(e, to) {
          unregister();
          var path = to.match(/#(.*)/)[1];
//	  path = path.split('_=_').join('/');
          $window.history.replaceState(null, null, '/#' + path);
//          $location.$$absUrl = $window.location.href;
          $location.replace();
      });
    });
}]);
app.config(['$routeProvider','$httpProvider', function($routeProvider, $httpProvider){
	$routeProvider
	.when('/', {
	    controller: 'gridCtrl'
	})
	.when('/browse', {
	    templateUrl: '/browse.html',
	    controller: 'BrowseCtrl'
	})
	.when('/search', {
	    controller: 'SearchCtrl',
	    templateUrl: '/search2.html'
	})
	.when('/search/:query', {
	    controller: 'SearchCtrl',
	    templateUrl: '/search2.html'
	})
	.when('/ResponseDialog/:status', {
	    templateUrl: '/ErrorDialog.html'
	})
	.when('/quote/:quoteId', {
	    templateUrl: '/video.html',
	    controller: 'videoCtrl'
	})
	.when('/s=:s', {
	    templateUrl: '/video.html',
	    controller: 'videoCtrl'
	})
	.when('/v=:v', {
	    templateUrl: '/video.html',
	    controller: 'videoCtrl'
	})
	.when('/new/:videoId', {
	    templateUrl: '/video.html',
	    controller: 'videoCtrl'
	})
	.when('/story?:story', {
	    templateUrl: '/video.html',
	    controller: 'videoCtrl'
	})
	.when('/settings', {
	    templateUrl: '/settings.html',
	    controller: 'SettingsCtrl'
	})
	.when('/error/:code', {
	    templateUrl: '/error.html',
	    controller: 'AlertCtrl'
	})
  .when('/WatchLater', {
	    templateUrl: '/WatchLater.html',
	    controller: 'WatchLaterCtrl'
	})
  .when('/Favorites', {
	    templateUrl: '/Favorites.html',
	    controller: 'FavoritesCtrl'
	})
	.when('/favorites', {
	    templateUrl: '/favorites.html',
	    controller: 'FavoritesCtrl'
	})
  .otherwise('/');
}])
.config(['$httpProvider', function($httpProvider) {

  // var access_token = document.cookie.match(/access_token=(.*)(\;*)/);
  // if (access_token.length > 0) {
  //   $httpProvider.defaults.headers.common = {
  //   	'Authorization': 'Bearer ' + access_token[1]
  //   };
  // }

  // see https://docs.angularjs.org/api/ng/service/$http
  $httpProvider.interceptors.push(['$q', function($q) {
    return {
      // optional method
      'request': function(config) {
        // do something on success
        if (config.url.indexOf('/') === 0) {
          if (config.headers['Authentication'] !== undefined) {
            window.localStorage.setItem('access_token', config.headers['Authentication']);
          }

          window.document.cookie.split(';').map(function(cookie) {
           cookie = cookie.split('=');
           if (cookie[0].indexOf('access_token') > -1) {
             config.headers['Authorization'] = 'Bearer ' + cookie[1];
             window.localStorage.setItem('access_token', cookie[1]);
           }
          });

          if (window.localStorage.getItem('access_token') !== undefined && window.localStorage.getItem('access_token') !== null) {
            config.headers['Authorization'] = 'Bearer ' + window.localStorage.getItem('access_token');
          }
        }

        return config;
      },

      // optional method
     'requestError': function(rejection) {
        // do something on error
        return $q.reject(rejection);
      },



      // optional method
      'response': function(response) {
        // do something on success
        return response;
      },

      // optional method
     'responseError': function(rejection) {
       console.log(rejection);
       if (rejection.status === 401) {
         window.localStorage.removeItem('access_token');
         document.cookie = 'access_token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	 return rejection.config;
       }
        // do something on error
        return $q.reject(rejection);
      }
    };
  }]);
}]);

app.run(['$rootScope', function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function() {
	$(document).scrollTop(0);
    });
}]);
