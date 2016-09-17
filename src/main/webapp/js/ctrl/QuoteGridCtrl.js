app.controller('QuoteGridCtrl', ['$scope', 'QuoteSvc', 'VideoSvc', '$rootScope',  function($scope, QuoteSvc, VideoSvc, $rootScope) {
	
	var fadeIndex = 0;
	function animate() {
	    fadeIndex++;
	    fadeIndex%=2;
	    $($('#dash-field #overlay .fadeToggle').get(fadeIndex)).fadeIn(2000);
	    window.setTimeout(function() {
		$($('#dash-field #overlay .fadeToggle').get(fadeIndex)).fadeOut(2000);
		window.setTimeout(animate, 3000);
	    }, 2000);
	    
	}
	animate();
	
	var searchDTO = {
	    offsets: [0, 0, 0],
	    limit:  10,
	    tags:   [],
	    channelIds: [],
	    start: 0,
	    end: 1<<30,
	    personIds: []
	};
	var offsetIndexToIncreament = 0;
	var page = 10;
	function increamentOffsets() {
	    offsetIndexToIncreament++;
	    offsetIndexToIncreament %= searchDTO.offsets.length;
	    searchDTO.offsets[offsetIndexToIncreament] += page;
	}
	function searchCallback(response) {
	    angular.forEach(response, function(quote, i) {

		    VideoSvc.getChannelId(quote.videoId).success(function(response) {
			quote.thumbnail = response.items[0].snippet.thumbnails.high.url;
			VideoSvc.getChannelData(response.items[0].snippet.channelId).success(function(data){
			    if (data.items.length === 0 ) {
				console.error('No thumbnails for channelId#', response.items[0].snippet.channelId);
			    } else {
				quote.logo = data.items[0].snippet.thumbnails.high.url;
				$scope.items.push(quote);
			    }
			});
		    });

		});
		
	    if (response.length === 0) {
		for (var i = 0; i <= offsetIndexToIncreament; i++)
		    searchDTO.offsets[i] = 0;
		offsetIndexToIncreament++;
	    }
	    console.log(searchDTO.offsets, response.length);
	    isBusy = false;
	}
	function loadMore() {
	    if (isBusy) return;
	    if (offsetIndexToIncreament >= searchDTO.offsets.length) return;
	    
	    isBusy = true;
	    searchDTO.offsets[offsetIndexToIncreament] += page;	    
	    QuoteSvc.search(searchDTO).success(searchCallback);
	}
	
	$scope.totalItems = 0;
	$scope.pageItems = 5;
	$scope.items = [];
	$scope.selected = [];
	
	var hasNext = true;
	var isBusy = false;
	
	var callback = function(response) {
		
		$scope.totalItems = response.total;

		if(response.length==0)
		{
		    hasNext = false;
		    return;
		} else
		    hasNext = true;
		angular.forEach(response.data, function(quote, i) {

		    VideoSvc.getChannelId(quote.videoId).success(function(response) {
			quote.thumbnail = response.items[0].snippet.thumbnails.high.url;
			VideoSvc.getChannelData(response.items[0].snippet.channelId).success(function(data){
			    quote.logo = data.items[0].snippet.thumbnails.high.url;
			    $scope.items.push(quote);
			});
		    });

		});
		isBusy = false;
	};
	
	

	$scope.onSelectedChange = function() {

	};
	var searchObj = {
	    currentPage: 0,
	    pageItems: $scope.pageItems,
	    filterByFields: {},
	    mandatoryFilters: {}
	};
	$scope.orderByReverse = false;
	$scope.isGlobal = true;
	$scope.query = function(currentPage, pageItems, filterBy, filterByFields, orderBy, orderByReverse) {
		var isGlobal = false;
		if(filterBy!==null && filterBy!==undefined && filterBy.length>0)
			isGlobal=true;
		searchObj = {
			currentPage:currentPage,
			pageItems:pageItems,
			orderBy:orderBy
		};
		if(isGlobal)
			searchObj.filterByFields = {
                
                personId: filterBy,
                quote: filterBy
			};
		else
			searchObj.filterByFields = {
				
                personId: filterByFields['personId'],
                quote: filterByFields['quote']
			};
		//TODO: searchObj.mandatoryFilters = {};
		$scope.orderByReverse = orderByReverse;
		$scope.isGlobal = isGlobal;
		$scope.items = [];
		isBusy = true;
		QuoteSvc.trNgGrid(searchObj,orderByReverse,isGlobal).success(callback);
	};
	
	$rootScope.$on('QuoteGridCtrl.query', function (event, tags, channelIds, personIds, start, end) {
	    //TODO: searchObj.mandatoryFilters = {};
//	    $scope.query(currentPage, pageItems, filterBy, filterByFields, orderBy, orderByReverse);
	    offsetIndexToIncreament = 0;
	    searchDTO = {
		offsets: [0, 0, 0],
		limit:  10,
		tags:   tags,
		channelIds: channelIds,
		start: start,
		end: end,
		personIds: personIds
	    };
	    QuoteSvc.search(searchDTO).success(searchCallback);
	});
	
	$scope.more = function() {
	    if(hasNext && !isBusy) {
		searchObj.currentPage += searchObj.pageItems;
		isBusy = true;
		QuoteSvc.trNgGrid(searchObj, $scope.orderByReverse, $scope.isGlobal).success(callback);
	    }
	};
	
	var init = function() {
		var tmp=
			$('<div>')
			.css('top','0px')
			.css('visibility','hidden')
			.css('height','100%')
			.appendTo('body');
		var h=tmp.height();
			tmp.css('display','none').remove();
		$(document).scroll(function(){

			var H=$(document).height()-100;
			var s=$('body').scrollTop();
			if(s+h>=H && !isBusy)
			    loadMore();
//				$scope.more();
		});
	};
	init();
//	$scope.more();
	isBusy = true;
	QuoteSvc.search(searchDTO).success(searchCallback);
}]);
