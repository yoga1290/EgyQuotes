app
    .controller('AlertCtrl',['$scope', '$routeParams',function($scope, $routeParams){
	$scope.$parent.show = true;
	$scope.$routeParams = $routeParams;
}]);