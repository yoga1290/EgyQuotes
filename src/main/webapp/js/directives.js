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
  	    response: '=response'
  	},
  	templateUrl: '/directives/errorDialog.html'
      };
  })
.directive('addToPlaylist', function() {
      return {
  	restrict: 'E',
  	scope: {
  	    query: '=query',
        list: '=list',
        onchange: '&onchange'
  	},
  	templateUrl: '/directives/addToPlaylist.html'
      };
  });
