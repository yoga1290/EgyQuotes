app
    .controller('dashCtrl',['$scope','facebookSvc','QuoteSvc','VideoSvc','ChannelSvc','Favorites',
function($scope,facebookSvc,QuoteSvc,VideoSvc,ChannelSvc, Favorites){
	$scope.Favorites = Favorites;
	$scope.page = -1;
	$scope.isAuthenticated=false;
	$scope.picture='';
	facebookSvc.getUserPicture().success(function(data){
	    $scope.picture=data.picture.data.url;
	    $scope.isAuthenticated=true;
	});
	$scope.login=function(){
	    window.location.href=config.OAuth.facebook.login;
	};
	
	$scope.topLikedQuotes=[];
	$scope.topLikesPage=5;
	$scope.loadTopLikes=function(){
	    /*
	    QuoteAnalyticsSvc.findByTopLikes($scope.topLikedQuotes.length,$scope.topLikesPage)
		    .success(function(quoteAny){
			
			angular.forEach(quoteAny,function(o,i){
			    QuoteSvc.findById(o.quoteId)
			    .success(function(quote){
				quote.likes=o.likes;
				$scope.topLikedQuotes.push(quote);
			    });
			});
			    
		    });//*/
	};
	$scope.topSharesQuotes=[];
	$scope.topSharesPage=5;
	$scope.loadTopShares=function(){
	    /*
	    QuoteAnalyticsSvc.findByTopShares($scope.topSharesQuotes.length,$scope.topSharesPage)
		    .success(function(quoteAny){
			
			angular.forEach(quoteAny,function(o,i){
			    QuoteSvc.findById(o.quoteId)
			    .success(function(quote){
				quote.shares=o.shares;
				$scope.topSharesQuotes.push(quote);
			    });
			});
			
		    })
		    //*/
	};
//	$scope.loadTopShares();
	
	$scope.videoURL='';
	$scope.onVideoURLChange=function(){
	    var videoid = $scope.videoURL.match(/(?:v\=)+(\w*)|(?:youtu\.be\/)+(\w*)/);//(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?)(?:ebc=[\w|\s|\w|-]*\&v=|v=|\/)([^\s]+)+/);
	    if(videoid == null) return;
	    // try 2nd group if 1st group regex fails:
	    window.location.href="#/new/"+(videoid[1] === undefined ? videoid[2]:videoid[1]);
	    $scope.videoURL = '';
	};
	
	$scope.channels=[];
	$scope.loadChannels=function(){
	    ChannelSvc.list(0,100).success(function(channels){
		angular.forEach(channels,function(channel,i){
		    VideoSvc.getChannelData(channel.channelId)
			.success(function(data){
			    $scope.channels.push(data.items[0].snippet.thumbnails.default.url);
			});
		});
	    });
	};
	$scope.loadChannels();
	$scope.openQuote = function(quote) {
	    location.href = '#/quote/'+quote.key;
	};
	
    }]);
    