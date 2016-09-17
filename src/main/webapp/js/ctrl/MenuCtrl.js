app
    .controller('MenuCtrl',['$scope','$location','TagSvc', 'ChannelSvc','VideoSvc',
function($scope, $location, TagSvc, ChannelSvc, VideoSvc) {

    $scope.isRouteEquals = function(route) {
      return $location.path() === route;
    };

    $scope.goToRoute = function(route) {
      $location.path(route);
    };

    $scope.login=function(){
  	    window.location.href = config.OAuth.facebook.login;
  	};
    }]);
