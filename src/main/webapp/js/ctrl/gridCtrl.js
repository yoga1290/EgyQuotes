app.controller('gridCtrl',
	    ['$scope', 'UserSvc', '$location',
	    function(sp, UserSvc, $location){

		    sp.parseInt = parseInt;
		    sp.to2Digit=function(x){
			x=parseInt(x)+'';
			while(x.length<2)
			    x+='0'+x;
			return x;
		    };

            sp.isScrollHidden = function() {
                return $location.path() !== '/';
            };
    }]);
