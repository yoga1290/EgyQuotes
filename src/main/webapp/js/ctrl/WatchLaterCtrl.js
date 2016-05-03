app
    .controller('WatchLaterCtrl',['$scope', 'WatchLater', 'VideoSvc',function($scope, WatchLater, VideoSvc){
	$scope.$parent.show = true;
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
	    window.location.href = "#/new/"+videoId;
	};
	
}]);