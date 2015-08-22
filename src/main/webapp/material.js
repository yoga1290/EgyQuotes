	(function(){
		'usestrict';
		varapp=angular.module('StarterApp',['ngMaterial']);

		app.controller('AppCtrl',['$scope','$mdSidenav',function($scope,$mdSidenav){
		$scope.toggleSidenav=function(menuId){
			$mdSidenav(menuId).toggle();
		};
		
	$scope.isOpen=false;

	$scope.demo={
		isOpen:false,
		count:0,
		selectedAlignment:'md-left'
	};
	
	}]);

})();