app
.directive('quote', function() {
    return {
	restrict: 'E',
	scope: {
	    quote: '=quote'
	},
	templateUrl: '/directives/quote.html'
    };
})
.directive('errorDialog', function() {
      return {
  	restrict: 'E',
  	scope: {
  	    // response: '=response'
  	},
    controller: ['$scope', 'ResponseDialog', function($scope, ResponseDialog) {
      $scope.response = ResponseDialog;
    }],
  	templateUrl: '/directives/errorDialog.html'
      };
  })
  .directive('addToPlaylist', function() {
      return {
  	restrict: 'E',
  	scope: {
        quote: '=quote'
  	},
    controller: 'PlaylistMenuCtrl',
  	templateUrl: '/directives/addToPlaylist.html'
      };
  })
  .directive('quoteEditor', function() {
        return {
    	restrict: 'E',
    	scope: {
        // 'onDecreasePlaybackRate': '&',
        // 'onIncreasePlaybackRate': '&',
        // 'onPause': '&',
        // 'onStartTimeChange': '&',
        // 'onEndTimeChange': '&',
        // 'onSelectAuthor': '&',
        // 'onSave': '&',
        //TODO: YTPlayer is not accessable here?
        'YTPlayer': '=',
        'startTime': '=',
        'endTime': '=',
        'authorName': '=',
        'quote': '='
    	},
      controller: 'QuoteEditorCtrl',
    	templateUrl: '/directives/quoteEditor.html'
        };
    })
    .directive('quoteReaction', function() {
        return {
        restrict: 'E',
        scope: {
        'quote': '='
        },
        controller: 'QuoteReactionCtrl',
        templateUrl: '/directives/quoteReaction.html'
        };
    });
