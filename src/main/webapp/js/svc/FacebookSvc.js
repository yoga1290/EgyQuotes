app
    .service('facebookSvc',['$http',function($http){
	this.getUserPicture=function(){
	    var chain=
		$http.get('https://graph.facebook.com/me?fields=id,picture.width(1000)&access_token='+localStorage.getItem('access_token'));
	    return chain;
	};
    }]);