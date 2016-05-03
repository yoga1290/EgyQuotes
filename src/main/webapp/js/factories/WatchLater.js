app.service('WatchLater', function() {
    var _this = this;
    
    this.list = {};
    
    if( localStorage.getItem('WatchLater') !== undefined && localStorage.getItem('WatchLater') !== null)
	this.list = JSON.parse( localStorage.getItem('WatchLater') );
    var save = function(){
	localStorage.setItem('WatchLater', JSON.stringify(_this.list) );
    };
    
    this.add = function(videoId) {
	_this.list[videoId] = videoId;
	save();
    };
    
    this.isListed = function(videoId) {
	return (_this.list[videoId] !== undefined && _this.list[videoId] !== null);
    };
    
    this.remove = function(videoId) {
	var nList = {};
	for(var i in _this.list)
	    if(i !== videoId)
		nList[i] = _this.list[i];
	_this.list = nList;
	save();
    };
    
});