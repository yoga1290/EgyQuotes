app
    .controller('WatchLaterCtrl',['$scope', '$location', 'WatchLater', 'VideoSvc',
    function($scope, $location, WatchLater, VideoSvc){
	$scope.WatchLater = WatchLater;
	
	$scope.videos = {};
	angular.forEach(WatchLater.list, function(obj, videoId) {
	    VideoSvc.getChannelId(videoId).success(function(videoData) {
		$scope.videos[videoId] = {
		    thumbnail: videoData.items[0].snippet.thumbnails.high.url,
		    title: videoData.items[0].snippet.title
		};
	    });
	});
	
	$scope.onclick = function(videoId) {
	    $location.path('#/new/' + videoId);
	};
	
}]);