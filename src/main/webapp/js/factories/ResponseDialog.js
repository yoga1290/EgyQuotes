app.service('ResponseDialog', [function(){
    this.statusText = '';
    this.status = 0;
    this.config = {}; // in case of starting new request
    var _this = this;
    this.show = function() {
	window.location.href = '#/ResponseDialog/' + _this.status;
    };
}]);

app.config(['$httpProvider', function($httpProvider) {
	
    $httpProvider.interceptors.push(['$q','ResponseDialog', function($q, ResponseDialog) {
	var self={};
	return self={
	    count:0,
	    // optional method
	    'request': function(config) {
	      return config;
	    },

	    // optional method
	   'requestError': function(rejection) {
	      // do something on error
//	      ResponseDialog.message = rejection.config.
	      //TODO:
	      ResponseDialog.statusText = rejection.statusText;
	      ResponseDialog.status = rejection.status;
	      ResponseDialog.config = rejection.config;
	      ResponseDialog.show();
	      return $q.reject(rejection);
	    },



	    // optional method
	    'response': function(response) {
	      // do something on success
//	      ResponseDialog.statusText = response.statusText;
//	      ResponseDialog.status = response.status;
//	      ResponseDialog.config = response.config;
//	      ResponseDialog.show = true;
	      return response;
	    },

	    // optional method
	   'responseError': function(rejection) {
	       console.log(rejection);
	       ResponseDialog.statusText = rejection.statusText;
	       ResponseDialog.status = rejection.status;
	       ResponseDialog.config = rejection.config;
	       ResponseDialog.show();
	      return $q.reject(rejection);
	    }
	};
    }]);
}]);