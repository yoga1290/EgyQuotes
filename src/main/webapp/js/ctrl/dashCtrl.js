app
    .controller('dashCtrl',['$scope', '$rootScope','QuoteSvc','VideoSvc','ChannelSvc','Favorites', '$location',
function($scope,$rootScope,QuoteSvc,VideoSvc,ChannelSvc, Favorites, $location) {
	$scope.Favorites = Favorites;
	$scope.page = -1;
	$scope.isAuthenticated=false;
	$scope.picture='';
	$scope.login=function(){
	    location.href=config.OAuth.facebook.login;
	};
	
	$scope.topLikedQuotes=[];
	$scope.topLikesPage=5;
	$scope.loadTopLikes=function(){
	    QuoteAnalyticsSvc.findByTopLikes($scope.topLikedQuotes.length,$scope.topLikesPage)
		    .success(function(quoteAny){
			
			angular.forEach(quoteAny,function(o,i){
			    QuoteSvc.findById(o.quoteId)
			    .success(function(quote){
				quote.likes=o.likes;
				$scope.topLikedQuotes.push(quote);
			    });
			});
			    
		    });
	};
	$scope.topSharesQuotes=[];
	$scope.topSharesPage=5;
	$scope.loadTopShares=function(){
	    QuoteAnalyticsSvc.findByTopShares($scope.topSharesQuotes.length,$scope.topSharesPage)
		    .success(function(quoteAny){
			
			angular.forEach(quoteAny,function(o,i){
			    QuoteSvc.findById(o.quoteId)
			    .success(function(quote){
				quote.shares=o.shares;
				$scope.topSharesQuotes.push(quote);
			    });
			});
			
		    });
	};
//	$scope.loadTopShares();
	
	$scope.videoURL='';
	$scope.onVideoURLChange = function() {
	    var videoId = $scope.videoURL.match(/(?:v\=)+(.*)|(?:youtu\.be\/)+(.*)|(?:channel\/)(.*)/);
	    if(videoId !== null) {
		var i = 1;
		if(videoId[i]===undefined) i++;
		if(videoId[i]!==undefined)  $location.path("/new/" + videoId[i]);
	    } else {
		    $location.path('/search').search('query', $scope.videoURL);
		
	    }
	    $scope.videoURL = '';
	};
	
	$scope.channels=[];
	$scope.loadChannels=function(){
	    ChannelSvc.list(0,100).success(function(channels){
		angular.forEach(channels,function(channel,i){
		    VideoSvc.getChannelData(channel.channelId)
			.success(function(data){
//			    $scope.channels.push(data.items[0].snippet.thumbnails.default.url);
			});
		});
	    });
	};
	$scope.loadChannels();
	$scope.openQuote = function(quote) {
	    location.href = '#/quote/'+quote.id;
	};
	
    }]);
    