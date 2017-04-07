app.controller('QuoteGridCtrl', ['$scope', '$location', 'QuoteSvc', 'VideoSvc', 'PersonSvc', '$rootScope',
    function($scope, $location, QuoteSvc, VideoSvc, PersonSvc, $rootScope) {
	
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
	    page: 0,
	    size:  30,
	    tags:   [],
	    channelIds: [],
	    start: 0,
	    end: new Date().getTime(),
	    personIds: []
	};

	$scope.getChannelLogo = function(channelId) {
	    VideoSvc.getChannelData(channelId);
	};
	var offsetIndexToIncreament = 0;
	var page = 10;
	function searchCallback(response) {
	    angular.forEach(response, function(quote, i) {
            $scope.items.push(quote);
		});
	    if (response.length > 0) {
		    searchDTO.page++;
	    }
	    isBusy = false;
	}
	function loadMore() {
	    if (isBusy) return;
	    
	    isBusy = true;
	    QuoteSvc.search(searchDTO).success(searchCallback);
	}
	
	$scope.totalItems = 0;
	$scope.pageItems = 20;
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


	$scope.channelData = {};
	function updateChannelData() {
    	$scope.channelData = {};
    	if (!$location.search().channelIds) return;
	    var channelIds = $location.search().channelIds.split(',');
	    angular.forEach(channelIds, function(channelId) {
            VideoSvc.getChannelData(channelId)
                .success(function(response) {
                    response.thumbnail = response.items[0].snippet.thumbnails.default.url;
                    response.name = response.items[0].snippet.title;
                    response.id = channelId;
                    $scope.channelData[channelId] = response;
                });
        });
	}
	updateChannelData();
    $scope.removeChannel = function(channelId) {
        if (!$location.search().channelIds) return;
        var nChannelIds = [];
        angular.forEach( $location.search().channelIds.split(','), function(id) {
            if (channelId !== id) {
                nChannelIds.push(id);
            }
        });
        $location.search('channelIds', nChannelIds.join(',') );
        updateChannelData();
        searchDTO.channelIds = nChannelIds;
        searchDTO.page = 0;
        $scope.items = [];
        QuoteSvc.search(searchDTO).success(searchCallback);
    }

	$scope.authorsData = [];
    function updateAuthorsData() {
        $scope.authorsData = [];
        if (!$location.search().personId) return;
        var personIds = $location.search().personId.split(',');
        angular.forEach(personIds, function(personId) {
            PersonSvc.findById(personId).success(function(response) {
                $scope.authorsData.push(response);
            });
        });
    }
    $scope.removeAuthor = function(authorId) {
        if (!$location.search().personId) return;
        var personIds = [];
        angular.forEach( $location.search().personId.split(','), function(id) {
            if (authorId !== id) {
                personIds.push(id);
            }
        });
        $location.search('personId', personIds.join(',') );
        updateAuthorsData();
        searchDTO.personIds = personIds;
        searchDTO.page = 0;
        $scope.items = [];
        QuoteSvc.search(searchDTO).success(searchCallback);
    }
    updateAuthorsData();

	$rootScope.$on('QuoteGridCtrl.query', function (event, tags, channelIds, personIds, start, end) {
	    searchDTO = {
            page: 0,
            size:  30,
            tags:   tags,
            channelIds: channelIds,
            start: start,
            end: end,
            personIds: personIds
        };
	    $scope.items = [];
	    if (channelIds && channelIds.length>0) {
	        updateChannelData();
	    }
	    if (personIds && personIds.length>0) {
	        updateAuthorsData();
	    }
	    if (tags && tags.length>0) {
	    }
	    QuoteSvc.search(searchDTO).success(searchCallback);
	});
	
	var init = function() {
		var tmp=
			$('<div>')
			.css('top','0px')
			.css('visibility','hidden')
			.css('height','100%')
			.appendTo('body');
		var h = window.screen.height || tmp.height();
			tmp.css('display','none').remove();
		$(document).scroll(function() {

			var H=$(document).height()-100;
			var s=$('body').scrollTop();
			if(s+h>=H && !isBusy)
			    loadMore();
		});

		if ($location.search().channelIds || $location.search().personIds) {
		    QuoteSvc.search(searchDTO).success(searchCallback);
		}
	};
	init();
	isBusy = true;
	QuoteSvc.search(searchDTO).success(searchCallback);
}]);
