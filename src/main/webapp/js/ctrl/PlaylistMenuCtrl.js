app
    .controller('PlaylistMenuCtrl',['$scope', 'VideoSvc', 'ChannelSvc', 'PlaylistSvc',
      function($scope, VideoSvc, ChannelSvc, PlaylistSvc) {

        $scope.query = '';
        $scope.list = [];

        var lastReq = {abort: function(){}};
        $scope.onchange = function(name, quote) {
//            lastReq.abort();
            lastReq=
                PlaylistSvc.searchByName(name, quote.id)
                .success(function(response) {
                    $scope.list = response;
                });
        };

        $scope.newPlaylist = function(quote) {
           PlaylistSvc.insert($scope.query, [quote]);
        };

        $scope.addPlaylist = function(playlist, quote) {
            playlist.quotes = playlist.quotes || [];
            playlist.quotes.push(quote.id);
            PlaylistSvc.update(playlist.id, playlist.name, playlist.quotes );
        };

        $scope.swapLeft = function(playlist, index) {
            var quote = playlist.quotes[index];
            if(index + 1 < playlist.length) {
                playlist.quotes[index] = playlist.quotes[index + 1];
                playlist.quotes[index + 1] = quote;
            }
            PlaylistSvc.update(playlist.id, playlist.name, playlist.quotes );
        };

        $scope.remove = function(playlist, index) {
            playlist.quotes.splice(index, 1);
            PlaylistSvc.update(playlist.id, playlist.name, playlist.quotes );
        };

}]);
