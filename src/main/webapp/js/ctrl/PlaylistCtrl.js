app
    .controller('PlaylistCtrl',['$scope', 'YTPlayer', 'PlaylistSvc', 'QuoteSvc',
function($scope, YTPlayer, PlaylistSvc, QuoteSvc) {

    $scope.playlists = [];
    $scope.YTPlayer = YTPlayer;

    var save = function() {
        //TODO
        var nList = {};
        $scope.playlist.forEach(function(quote) {
            nList[quote.id] = quote;
        });
        $scope.YTPlayer.init('playlist-video');
        $scope.YTPlayer.playQuotes($scope.playlist);
    };


    PlaylistSvc.list(0, 10).success(function(playlists) {
        $scope.playlists = [];
        playlists.forEach(function(playlist) {
            var quotes = [];
            var quotesLoadedCount = 0;
            console.log(playlist);

            angular.forEach(playlist.quotes, function(quoteId) {
                console.log(quoteId);
                QuoteSvc.findById(quoteId).success(function(quote) {
                    quotes.push(quote);
                    quotesLoadedCount++;
                    console.log(quotes);
                    if(quotesLoadedCount === playlist.quotes.length) {
                        playlist.quotes = quotes;
                        $scope.playlists.push(playlist);
                        console.log(playlist);
                    }
                });
            });

        });
    });



}]);
