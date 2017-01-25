app.controller('gridCtrl',
	    ['$scope', 'UserSvc',
	    function(sp, UserSvc){

		    sp.parseInt = parseInt;
		    sp.to2Digit=function(x){
			x=parseInt(x)+'';
			while(x.length<2)
			    x+='0'+x;
			return x;
		    };

		    UserSvc.getUser().success(function(response) {
                sp.user = response;
            });

            UserSvc.getPicture().success(function(pictureURL) {
                sp.picture = pictureURL;
            });
    }]);
