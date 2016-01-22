var video=(function(){
    var self={};
    return self={
	isYTReady:false,
	q:[],
	execAfterReady:function(x){
	    if(x!==undefined)
		self.q.push(x);
	    if(self.isYTReady)
		while(self.q.length>0)
		    self.q.pop()();
	}
    };
}());
function onYouTubeIframeAPIReady(){
	video.isYTReady=true;
	video.execAfterReady();
};
app.factory('YTPlayer', ['$timeout', function(to) {
	    var _this = this;
	    this.playlist = [];
	    var currentPlayingIndex = 0;
	    var elementId = 'video';
	    this.player = null;
	    var videoId = '';
	    var duration = 0;
	    var needProgressUpdate = false;
	    
	    this.init = function(id) {
		elementId = id;
		return _this;
	    };
	    
	    this.playQuotes = function(quotes) {
		
		_this.playlist = quotes;
		currentPlayingIndex=0;
		_this.load(quotes[0].videoId,quotes[0].start,quotes[0].end);
	    };
	    
	    var onReady = function(event) {};
	    var onStateChange = function(event) {
		if(event.data===YT.PlayerState.PLAYING && needProgressUpdate)
		{
		    needProgressUpdate=false;
		    duration = _this.player.getDuration();
		}
		if(event.data===YT.PlayerState.ENDED
			&& currentPlayingIndex+1 < playlist.length)
		{
			currentPlayingIndex++;
			_this.load(
				_this.playlist[currentPlayingIndex].videoId,
				_this.playlist[currentPlayingIndex].start,
				_this.playlist[currentPlayingIndex].end
			);
		}
	    };
	    var onload = function(){};
	    this.onload = function(Fn){
		if(Fn!==undefined)
		    onload=Fn;
	    };
	    
	    this.load = function(videoId,start,end) {
		    videoId=videoId;
		    needProgressUpdate=true;
		video.execAfterReady(function(){
		    to(function(){
			onload();
		    });
		    var param={'autoplay': 1,'suggestedQuality': 'small','videoId': videoId,'suggestedQuality': 'small','origin':'https://egyquotes.appspot.com'};
		    var playerVars={ 'autoplay': 1,'videoId': videoId,'suggestedQuality': 'small','origin':'https://egyquotes.appspot.com'};
		    if((location.href.indexOf('#e=')>-1))
			    playerVars.end=param.endSeconds=parseInt(
				    location.href.substring(
				    location.href.indexOf('e=')+2,
				    location.href.indexOf('s=')) );
		    if((location.href.indexOf('s=')>-1))
			    playerVars.start=param.startSeconds=parseInt(
				    location.href.substring(
				    location.href.indexOf('s=')+2,
				    location.href.indexOf('v=')) );
		    if(start!==undefined)
			    playerVars.start=param.startSeconds=parseInt(start);
		    if(end!==undefined)
			    playerVars.end=param.endSeconds=parseInt(end);


		    if(_this.player===null || _this.player===undefined)
			    _this.player=new YT.Player(elementId, {
				height: '390',
				width: '640',
				videoId: videoId,
				playerVars: playerVars,
				events: {
				  'onReady': onReady,
				  'onStateChange': onStateChange
				}
			    });
		    else
		    {
			_this.player.loadVideoById(param);
		    }
		});
	    };
	    
	    return this;
    }]);