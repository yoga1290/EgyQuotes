app
    .controller('BrowseCtrl',['$scope', 'VideoSvc', 'ChannelSvc',
      function($scope, VideoSvc, ChannelSvc) {

	$scope.startDay = -1;
	$scope.startMonth = -1;
	$scope.startYear = -1;

	$scope.endDay = -1;
	$scope.endMonth = -1;
	$scope.endYear = -1;

	$scope.URL = '';
	$scope.channels = [];
	$scope.result = [];
	$scope.pageToken = undefined;
	$scope.query = '';

	$scope.days = [];
	for(var i=1;i<=31;i++)
	    $scope.days.push(i);

	$scope.months = [];
	for(var i=1;i<=12;i++)
	    $scope.months.push(i);

	$scope.years = [];
	for(var i=new Date().getFullYear();i>=2000;i--)
	    $scope.years.push(i);

	ChannelSvc.list(0,50).success(function(channels) {
	    $scope.channels = channels;
	});



	$scope.submit = function(pageToken) {
	    if(!pageToken) {
		$scope.result = [];
	    }
	    var startUnixTime = new Date(0);
		startUnixTime.setDate($scope.startDay);
		startUnixTime.setMonth($scope.startMonth);
		startUnixTime.setFullYear($scope.startYear);
		startUnixTime = startUnixTime.getTime();


	    var endUnixTime = new Date(0);
		endUnixTime.setDate($scope.endDay);
		endUnixTime.setMonth($scope.endMonth);
		endUnixTime.setFullYear($scope.endYear);
		endUnixTime = endUnixTime.getTime();

	    var callback = function(response) {
		$scope.pageToken = response.nextPageToken;
		angular.forEach(response.items, function(item) {
		    $scope.result.push({
			title: item.snippet.title,
			videoId: item.id.videoId,
			thumbnail: item.snippet.thumbnails.high.url
		    });
		});
	    };

	    var videoId = $scope.URL.match(/(?:v\=)+(.*)|(?:youtu\.be\/)+(.*)|(?:channel\/)(.*)/);
	    if(videoId !== null) {
		var i = 1;
		if(videoId[i]===undefined) i=2;
		if(videoId[i]!==undefined) {
		    VideoSvc.getChannelId(videoId[i]).success(function(response) {
			var channelId = response.items[0].snippet.channelId;
			VideoSvc.findByChannelIdAndTime(channelId, startUnixTime, endUnixTime).success(callback);
		    });
		} else {
		    VideoSvc.findByChannelIdAndTime(videoId[3], startUnixTime, endUnixTime, $scope.query, pageToken).success(callback);
		}
	    }
	};

	$scope.onClick = function(video) {
	    window.open('https://videoquotes.herokuapp.com/#/new/' + video.videoId, '_target')
	};


}]);
