app
    .controller('videoCtrl',
	    ['$scope', '$location', 'QuoteSvc','TagSvc','PersonSvc','VideoSvc','ChannelSvc','$timeout','$routeParams','YTPlayer','Favorites', 'WatchLater', 'ReactionSvc',
	    function(sp, $location, QuoteSvc,TagSvc,PersonSvc,VideoSvc,ChannelSvc,to,$routeParams, YTPlayer, Favorites, WatchLater, ReactionSvc){

    sp.YTPlayer = YTPlayer;
    sp.YTPlayer.init('video');

    sp.openQuote = function(quote) {
	$location.path('/quote/' + quote.id);
    };

    sp.tagger=(function(TagSvc){
	var self={};
	return self={
	    tagNameQuery:'',
	    tagName:[],
	    selectedTags:{},
	    lastReq:{abort:function(){}},
	    findByTagName:function(tagName){
		self.lastReq.abort();
		self.lastReq=
		    TagSvc.find(self.tagNameQuery)
			.success(function(response){
			    self.tagNames=response;
			    if(response.length==0)
				self.tagNames=[{key:{name:self.tagNameQuery}}];
			});
	    },
	    selectTag:function(tag){
//				    if(self.selectedTags[tag.key.name]!==true)
//				    {
//					self.selectedTags[tag.key.name]=true;
		    TagSvc.insert(tag.key.name,YTPlayer.playlist[0].key);
//				    }
		//TODO: remove tag
//				    else if(self.selectedTags[tag.key.name]!==undefined)
//					self.selectedTags[tag.key.name]=false;
	    }
	};
    }(TagSvc));
    sp.Favorites = Favorites;
    sp.WatchLater = WatchLater;

    sp.quotes = [];
    function getVideoQuotes(video) {
	angular.forEach(video.quotes, function(quoteId) {
	    QuoteSvc
		.findById(quoteId)
		.success(function(quote) {
		    sp.quotes.push(quote);
		});
	});
    }

    sp.selectReaction = function(reaction) {
	ReactionSvc
	    .insert($routeParams.quoteId, reaction)
	    .success(function(response) {
		updateReactions();
	    });
    };
    sp.reactions = [];
    function updateReactions() {
	ReactionSvc
	    .findByQuoteId($routeParams.quoteId)
	    .success(function(response) {
		console.log(response);
		//TODO:
    		sp.reactions = {};
        angular.forEach(response, function(reaction) {
          if (sp.reactions[reaction.reaction] === undefined) {
            sp.reactions[reaction.reaction] = [reaction];
          } else {
            sp.reactions[reaction.reaction].push(reaction);
          }
        });
        console.log('reactions:',reactions);
	    });
    }
    updateReactions();

    sp.$routeParams = $routeParams;
    if($routeParams.quoteId !== undefined) {
	QuoteSvc.findById($routeParams.quoteId)
	    .success(function(quote) {

		TagSvc
		    .findByQuoteId($routeParams.quoteId)
		    .success(function(tags) {
			quote.tags = tags;
			sp.quote = quote;
			YTPlayer.playQuotes([quote]);
		    });

		VideoSvc
		    .findById(quote.video.id)
		    .success(getVideoQuotes);
	    });
    } else if($routeParams.videoId !== undefined) {
	VideoSvc.getChannelId($routeParams.videoId)
	    .success(function(response){
console.log('getChannelId:', response);
		ChannelSvc.findByChannelId(response.items[0].snippet.channelId)
		.success(function() {
		    //TODO: check response?
		    YTPlayer.playlist=[];
		    YTPlayer.load($routeParams.videoId);
		});

	    });
    } else if($routeParams.story !== undefined) {
	YTPlayer.playQuotes($routeParams.story.split(','));
    }
}]);
