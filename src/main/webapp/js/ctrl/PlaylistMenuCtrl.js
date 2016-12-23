app
    .controller('PlaylistMenuCtrl',['$scope', 'VideoSvc', 'ChannelSvc', 'PlaylistSvc',
      function($scope, VideoSvc, ChannelSvc, PlaylistSvc) {

        $scope.query = '';
        $scope.list = [];

        var lastReq = {abort: function(){}};
        $scope.searchByName = function() {
//            lastReq.abort();
            lastReq=
                PlaylistSvc.searchByName($scope.query)
                .success(function(response) {
                    $scope.list = response;
                });
        };

}]);
