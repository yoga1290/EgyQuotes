app
    .controller('FavoritesCtrl',['$scope', '$location','Favorites',
function($scope, $location, Favorites) {

    $scope.Favorites = Favorites;
    
    $scope.onQuoteClick=function(quote) {
	$location.path( '#/quote/' + quote.id );
    };

}]);
