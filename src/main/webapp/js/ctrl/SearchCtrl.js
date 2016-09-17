app.controller('SearchCtrl', ['$scope', 'TagSvc', 'TagNameSvc', 'PersonSvc', 'ChannelSvc',
    function($scope, TagSvc, TagNameSvc, PersonSvc, ChannelSvc) {
	
	
	$('#search input').focus();
	$scope.field = '';
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
		    $scope.channels = channels;
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
	    var tags=[], personId=[], channelIds = [];
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
	    $scope.$emit('QuoteGridCtrl.query', tags, channelIds, personId, 0, new Date().getTime() );
	};
			
			
}]);