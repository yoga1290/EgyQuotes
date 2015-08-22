app
.controller('globalCtrl',[
	'$scope',
	'$timeout',
	function(sp,to){

            sp.cssClass='light';
            var isBright=true;
            sp.toggleStyle=function(){
                isBright=!isBright;
                sp.cssClass=isBright ? 'light':'dark';
            };
	}]);