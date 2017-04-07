app
    .controller('MenuCtrl',['$scope','$location','UserSvc',
function($scope, $location, UserSvc) {

    $scope.isRouteEquals = function(route) {
      return $location.path() === route;
    };

    $scope.goToRoute = function(route) {
      window.location.href = '#' + route;
    };

    $scope.login=function(){
  	    window.location.href = config.OAuth.facebook.login;
  	};

  	UserSvc.getUser().success(function(response) {
        $scope.user = response;
    });

    UserSvc.getPicture().success(function(pictureURL) {
        $scope.picture = pictureURL;
    });
    }]);
