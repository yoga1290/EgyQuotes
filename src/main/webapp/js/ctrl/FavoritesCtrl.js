app
    .controller('FavoritesCtrl',['$scope','Favorites',
function($scope, Favorites) {

    $scope.Favorites = Favorites;

    }]);
