app
.directive('quote', function() {
    return {
	restrict: 'E',
	scope: {
	    quote: '=quote'
	},
	templateUrl: 'directives/quote.html'
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
  	templateUrl: 'directives/errorDialog.html'
      };
  })
  .directive('addToPlaylist', function() {
      return {
  	restrict: 'E',
  	scope: {
        quote: '=quote'
  	},
    controller: 'PlaylistMenuCtrl',
  	templateUrl: 'directives/addToPlaylist.html'
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
    	templateUrl: 'directives/quoteEditor.html'
        };
    })
    .directive('quoteReaction', function() {
        return {
        restrict: 'E',
        scope: {
        'quote': '='
        },
        controller: 'QuoteReactionCtrl',
        templateUrl: 'directives/quoteReaction.html'
        };
    })
    .directive('quoteMenu', function() {
        return {
        restrict: 'E',
        scope: {
//                'quote': '='
        },
//            controller: 'QuoteReactionCtrl',
        controller: ['$scope', '$timeout', function($scope, $timeout) {
          $scope.quote; //TODO;
          $scope.visible = false;
          window.document.addEventListener('contextmenu', function(e) {

            var isParent = e.target.parentNode.className.match(/quotemenu/);
            var isCurrent = e.target.className.match(/quotemenu/);
            if(isCurrent || isParent) {
                $timeout(function() {
                    $scope.visible = true;
                });
                if(isCurrent) e.target.appendChild($('#quote-menu')[0]);
                if(isParent) e.target.parentNode.appendChild($('#quote-menu')[0]);
                e.preventDefault();
            }
          });
        }],
        templateUrl: 'directives/quoteMenu.html'
        };
    })
    .directive('gridQuote', function() {
        return {
        restrict: 'E',
        scope: {
            'quote': '='
        },
//            controller: 'QuoteReactionCtrl',
        controller: ['$scope', '$location', function($scope, $location) {
          $scope.onClick = function(quote) {
                $location.path('/quote/' + quote.id);
          };
        }],
        templateUrl: 'directives/gridQuote.html'
        };
    });
