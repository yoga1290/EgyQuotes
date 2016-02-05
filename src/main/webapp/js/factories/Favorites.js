app.service('Favorites', function() {
    var _this = this;
    
    this.list = {};
    
    if( localStorage.getItem('Favorites') !== undefined && localStorage.getItem('Favorites') !== null)
	this.list = JSON.parse( localStorage.getItem('Favorites') );
    var save = function(){
	localStorage.setItem('Favorites', JSON.stringify(_this.list) );
    };
    
    this.add = function(quote) {
	_this.list[quote.key] = quote;
	save();
    };
    
    this.isFavorites = function(quote) {
	return (_this.list[quote.key] !== undefined && _this.list[quote.key] !== null);
    };
    
    this.remove = function(quote) {
	var nList = {};
	for(var i in _this.list)
	    if(i !== quote.key)
		nList[i] = _this.list[i];
	_this.list = nList;
	save();
    };
    
});