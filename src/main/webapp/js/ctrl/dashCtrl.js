app
    .controller('dashCtrl',['$scope', '$rootScope','QuoteSvc','VideoSvc','ChannelSvc', '$location', '$interval',
function($scope,$rootScope,QuoteSvc,VideoSvc,ChannelSvc, $location, $interval) {
	$scope.page = -1;

	$scope.listing = [];
	var startUnixTime = new Date().getTime() - 7 * 24 * 60 * 60 * 1000;
	var endUnixTime = new Date().getTime();

	$scope.showsByChannelId = {};
	$scope.channelLogoByChannelId = {};

	$scope.hero = [{
	    channelId: 'UC30ditU5JI16o5NbFsHde_Q',
	    image: 'hero/dw.png',
	    quoteId: ['585e9e41a066470004d3e090'],
	    quotes: []
	}, {
        channelId: 'UC30ditU5JI16o5NbFsHde_Q',
        image: 'hero/bbc.png',
        quoteId: ['585e9e2aa066470004d3dfe8'],
        quotes: []
    }
//    , {
//       channelId: 'UC30ditU5JI16o5NbFsHde_Q',
//       image: 'hero/sada.jpg',
//       quoteId: ['58b009daae340f00044180ef', '585e9e2ea066470004d3e00d'],
//       quotes: []
//   }
   ];

	$scope.heroTime = 0;
    var heroInterval = $interval(function() {
        $scope.heroTime++;
        $scope.heroTime %= $scope.hero.length;
    }, 3000);
    $scope.$on('$destroy', function() {
        heroInterval();
    });
    angular.forEach($scope.hero, function(hero) {
        angular.forEach(hero.quoteId, function(quoteId) {
            QuoteSvc.findById(quoteId).success(function(quote) {
                hero.quotes.push(quote);
            });
        });
    });

	$scope.videoURL='';
	$scope.onVideoURLChange = function() {
	    var videoId = $scope.videoURL.match(/(?:v\=)+([^&,^?]*)|(?:youtu\.be\/)+([^&,^?]*)|(?:channel\/)([^&,^?]*)/);
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
	};
	$scope.loadChannels();
	$scope.openQuote = function(quote) {
	    location.href = '#/quote/'+quote.id;
	};
	
    }]);
    