app.controller('QuoteEditorCtrl', ['$scope', 'PersonSvc', 'VideoSvc', 'QuoteSvc', '$interval',  function($scope, PersonSvc, VideoSvc, QuoteSvc, $interval) {


	$scope.authorName = '';
	$scope.suggestedAuthors = [];
	var selectedAuthorId = null;
	$scope.quote = '';
	var videoPlaybackRate = 1;
	$scope.onIncreasePlaybackRate = function() {
	    videoPlaybackRate *= 2;
	    $scope.YTPlayer.setPlaybackRate(videoPlaybackRate);
	};
	$scope.onPause = function() {
        if ($scope.YTPlayer.getPlayer().getPlayerState() === YT.PlayerState.PLAYING) {
            $scope.YTPlayer.getPlayer().pauseVideo();
        } else {
            $scope.YTPlayer.getPlayer().playVideo();
        }
    };
    $scope.rewind10 = function() {
//        $scope.YTPlayer.getPlayer().seekTo(time2sec($scope.startTime));
    };
	$scope.onDecreasePlaybackRate = function() {
	    videoPlaybackRate /= 2;
	    $scope.YTPlayer.setPlaybackRate(videoPlaybackRate);
	};
	$scope.startTime = '';
	$scope.endTime = '';

	var currentTime = 0;
	var updateCurrentTime = $interval(function() {
		if ($scope.isRecording) {
		   currentTime = parseInt($scope.YTPlayer.getPlayer().getCurrentTime());
		   if ($scope.YTPlayer.getPlayer().getPlayerState() === YT.PlayerState.PLAYING) {
		       $scope.endTime = parseInt(currentTime / 60) + ':' + (currentTime%60);
		   }
		}
	    }, 1000);
	$scope.$on('$destroy', function currentTimeDismissed() {
	    $interval.cancel(updateCurrentTime);
	});

	$scope.isRecording = false;
	$scope.record = function() {
	    currentTime = parseInt($scope.YTPlayer.getPlayer().getCurrentTime());
	    $scope.startTime = $scope.endTime = parseInt(currentTime / 60) + ':' + (currentTime%60);
	    $scope.isRecording = true;
	};

	$scope.showQuoteDialog = function() {
        $scope.isRecording = true;
        $scope.showEdit = !$scope.showEdit;
        currentTime = parseInt($scope.YTPlayer.getPlayer().getCurrentTime());
        $scope.startTime = $scope.endTime = parseInt(currentTime / 60) + ':' + (currentTime%60);
    };

	$scope.onSave = function() {
	    var personId = $scope.authorName;
	    if (selectedAuthorId !== null) {
		    personId = selectedAuthorId;
	    }

	    QuoteSvc.insert({
            videoId: $scope.YTPlayer.getPlayer().getVideoData().video_id,
            personId: personId,
            quote: $scope.quote.quote,
            start: time2sec($scope.startTime),
            end: time2sec($scope.endTime)
	    });
	};

	$scope.onStartTimeChange = function() {
	    $scope.startTime = formatTime($scope.startTime);
	    $scope.YTPlayer.getPlayer().seekTo(time2sec($scope.startTime));
	    $scope.isRecording = true;
	    $scope.YTPlayer.getPlayer().playVideo();
	};
	$scope.onEndTimeChange = function() {
	    $scope.isRecording = false;
	    $scope.endTime = formatTime($scope.endTime);
	    $scope.YTPlayer.getPlayer().seekTo(time2sec($scope.endTime));
	};

	$scope.onAuthorNameChange = function() {
	    PersonSvc
		    .findByName($scope.authorName)
		    .success(function(response) {
			$scope.suggestedAuthors = response;
		    });
	};
	$scope.onSelectAuthor = function(author) {
	    $scope.authorName = author.name;
	    selectedAuthorId = author.id;
	    $scope.suggestedAuthors = [];
	};

	function time2sec(time) {
	    time = time.split(':');
	    return parseInt(time[0] * 60) + parseInt(time[1]);
	}
	function formatTime(text) {
	    var digits = '';
	    var s = text.split(':').join('');

	    for (var i = 3; i >= 0; i--) {
		if (i === 1) {
		    digits += ':';
		}
		if (s.length-i > 0) {
		    if('0' <= s[s.length-i-1] && s[s.length-i-1] <= '9') {
			digits += s[s.length-i-1];
		    }
		} else {
		    digits += '0';
		}
	    }
	    return digits;
	}
}]);
