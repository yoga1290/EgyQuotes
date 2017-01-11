app.service('Favorites', function() {
    var _this = this;
    
    this.list = {};
    
    if( localStorage.getItem('Favorites') !== undefined && localStorage.getItem('Favorites') !== null)
	this.list = JSON.parse( localStorage.getItem('Favorites') );
    var save = function(){
	localStorage.setItem('Favorites', JSON.stringify(_this.list) );
    };
    
    this.add = function(quote) {
	_this.list[quote.id] = quote;
	save();
    };
    
    this.isFavorites = function(quote) {
	    return (quote && _this.list[quote.id] !== undefined && _this.list[quote.id] !== null);
    };
    
    this.remove = function(quote) {
	var nList = {};
	for(var i in _this.list)
	    if(i !== quote.id)
		nList[i] = _this.list[i];
	_this.list = nList;
	save();
    };
    
});