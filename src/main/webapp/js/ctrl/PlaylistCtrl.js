app
    .controller('PlaylistCtrl',['$scope', '$location','Favorites', 'YTPlayer',
function($scope, $location, Favorites, YTPlayer) {

    $scope.playlist = [];
    $scope.YTPlayer = YTPlayer;
    for (var k in Favorites.list) {
	$scope.playlist.push(Favorites.list[k]);
    }
    
    var save = function() {
	//TODO
	var nList = {};
	$scope.playlist.forEach(function(quote) {
	    nList[quote.id] = quote;
	});
	Favorites.list = nList;
	localStorage.setItem('Favorites', JSON.stringify(nList) );
	$scope.YTPlayer.init('playlist-video');
	$scope.YTPlayer.playQuotes($scope.playlist);
    };
    
    $scope.onQuoteClick=function(quote) {
	$location.path( '/quote/' + quote.id );
    };
    
    $scope.swapeUp = function($index) {
	var quote = $scope.playlist.splice($index, 1)[0];
	if ($index <= 0) {
	    $index = $scope.playlist.length + 1;
	}
	$scope.playlist.splice($index-1, 0, quote);
	save();
    };
    
    $scope.swapeDown = function($index) {
	var quote = $scope.playlist.splice($index, 1)[0];
	if ($index + 1 < $scope.playlist.length) {
	    $scope.playlist.splice($index+1, 0, quote);
	}
	save();
    };
    
    $scope.delete = function($index) {
	$scope.playlist.splice($index, 1);
	    save();
    };

}]);
