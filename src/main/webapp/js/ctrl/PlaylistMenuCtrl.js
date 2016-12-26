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

        $scope.addToPlaylist = function(playlist, quote) {
            PlaylistSvc.update(playlist.id, playlist.name, playlist.quotes.append(quote) );
        };

}]);
