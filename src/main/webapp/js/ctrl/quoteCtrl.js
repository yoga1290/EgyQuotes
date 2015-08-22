app
.controller('quoteCtrl',[
	'$scope',
	'$timeout',
	function($scope,$timeout){
		var sp=$scope;
		sp.show=false;
/*
$(function(){
	dataTable_quote.init('#dataTable_quote');
});//*/


		//util
		sp.preventEvent=function(event){
			event.preventDefault();
			event.stopPropagation();
		};
		sp.parseInt=function(x){
			return parseInt(x);
		};
		sp.to2Digit=function(x){
			var x=parseInt(x)+'';
			while(x.length<2)
				x='0'+x;
			return x;
		};


	}]);