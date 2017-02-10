app.controller('SearchCtrl', ['$scope', '$location', 'TagSvc', 'TagNameSvc', 'PersonSvc', 'ChannelSvc', 'VideoSvc',
    function($scope, $location, TagSvc, TagNameSvc, PersonSvc, ChannelSvc, VideoSvc) {
		
	$scope.field = $location.search().query;
	$('#dash-field').keyup(function() {
        $('#dash-field').blur();
        $('#query').focus();
    });
	$scope.result = [];
	$scope.selected = {
	    people:{},
	    channels: {},
	    tags:{}
	};
	
	$scope.tags = [];
	var _tags = {abort: function(){}};
	var queryTagName = function(tagName) {
	    _tags.abort();
	    _tags = 
		TagNameSvc.searchByTag(tagName).success(function(tagNames) {
		    $scope.tags = tagNames;
		});
	};
	
	$scope.people = [];
	var _people = {abort: function(){}};
	var queryPeople = function(name) {
	    _people.abort();
	    _people = 
		PersonSvc.findByName(name).success(function(people) {
		    $scope.people = people;
		});
	};
	
	$scope.channels = [];
	var _channels = {abort: function(){}};
	var queryChannels = function(channelName, offset, limit) {
	    _channels.abort();
	    _channels =
		ChannelSvc.searchByName(channelName, offset, limit).success(function(channels) {
		    $scope.channels = [];
		    angular.forEach(channels, function(channel) {
			VideoSvc
			    .getChannelData(channel.id)
			    .success(function(response) {
				channel.logo = response.items[0].snippet.thumbnails.default.url;
				$scope.channels.push(channel);
			    });
			
		    });
		});
	};
	
	
	$scope.query = function() {
	    if($scope.field.length<=0) return;

	    queryChannels($scope.field);
	    queryTagName($scope.field);
	    queryPeople($scope.field);
	};
	
	$scope.selectTag = function(tag) {
	    if($scope.selected.tags[tag] === true)
		$scope.selected.tags[tag] = false;
	    else $scope.selected.tags[tag] = true;
	    $scope.search();
	};
	$scope.selectChannel = function(channelId) {
	    if($scope.selected.channels[channelId] === true)
		$scope.selected.channels[channelId] = false;
	    else $scope.selected.channels[channelId] = true;
	    $scope.search();
	};
	
	
	$scope.selectPerson = function(person) {
	    if($scope.selected.people[person] === true)
		$scope.selected.people[person] = false;
	    else $scope.selected.people[person] = true;
	    $scope.search();
	};
	$scope.search = function() {
	    // TODO: #?tags=..&people=..
//	    console.log($('#startTime').datepicker('getDate').getTime());
//	    console.log($('#endTime').datepicker('getDate').getTime());
	    var tags=[], personId=[], channelIds = [];
	    if ($location.search().channelIds && $location.search().channelIds.split) {
            channelIds = $location.search().channelIds.split(',');
        }
        if ($location.search().personId && $location.search().personId.split) {
            personId = $location.search().personId.split(',');
        }
	    angular.forEach($scope.selected.tags, function(isSelected,tag) {
		if (isSelected) {
		    tags.push(tag);
		}
	    });
	    angular.forEach($scope.selected.people, function(isSelected,person) {
		if (isSelected) {
		    personId.push(person);
		}
	    });
	    angular.forEach($scope.selected.channels, function(isSelected, channelId) {
		if (isSelected) {
		    channelIds.push(channelId);
		}
	    });
	    //TODO: start/end time?
	    console.log($location.search().channelIds);

	    var startTime = 0;
        if( $('#startTime').datepicker('getDate')) {
            startTime = $('#startTime').datepicker('getDate').getTime();
        }

        var endTime = new Date().getTime();
        if( $('#endTime').datepicker('getDate')) {
            endTime = $('#endTime').datepicker('getDate').getTime();
        }
	    $location
	        .search('channelIds', channelIds.join(',') )
	        .search('personId', personId.join(',') )
	        .search('startTime', startTime)
	        .search('endTime', endTime)
//	        .search('query', $scope.field)
	        ;
	    $scope.$emit('QuoteGridCtrl.query', tags, channelIds, personId, startTime, endTime );
	};
	$('input#query').focus();
			
}]);