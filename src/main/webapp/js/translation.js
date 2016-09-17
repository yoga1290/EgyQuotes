app.run(['$rootScope', '$http', function($rootScope, $http) {

    $http.get('/locale/en.json')
	.success(function(translation) {
	    $rootScope.translation = translation;
    });
    
}]);
