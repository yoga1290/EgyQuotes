app
    .controller('PlaylistMenuCtrl',['$scope', 'VideoSvc', 'ChannelSvc', 'PlaylistSvc',
      function($scope, VideoSvc, ChannelSvc, PlaylistSvc) {

        $scope.query = '';
        $scope.playlists = [];

        var lastReq = {abort: function(){}};
        $scope.searchByName = function() {
//            lastReq.abort();
            lastReq=
                PlaylistSvc.searchByName($scope.query)
                .success(function(response) {
                    $scope.playlists = response;
                });
        };

}]);
