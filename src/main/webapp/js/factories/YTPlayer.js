app.factory('YTPlayer', ['$timeout', YTPlayer]);

function YTPlayer(to) {
    
    var _this = this;
    var playlist = [];
    var currentPlayingIndex = 0;
    var elementId = 'video';
    var player = null;
    var needProgressUpdate = false;
    var _onStateChange = function(){};
	
    return {
	init: init,
	load: load,
	playQuotes: playQuotes,
	onload: onload,
	getPlayer: getPlayer,
	setPlaybackRate: setPlaybackRate,
	getCurrentTime: getCurrentTime,
	getDuration: getDuration
    };
	    
	    var _then = function() {};
	    function then(cb) {
		_then = then;
	    }
	    
	    function init(id) {
		elementId = id;
		return _this;
	    }
	    
	    function getVideoId() {
		return videoId;// player.getVideoData().video_id;
	    }
	    function getPlayer() {
		return player;
	    }
	    function setPlaybackRate(x) {
		player.setPlaybackRate(x);
	    }
	    function getCurrentTime() {
//		console.log(player);
		this.getPlayer().getCurrentTime();
	    }
	    function getDuration() {
		player.getDuration();
	    }
	    
	    function playQuotes(quotes) {
		
		playlist = quotes;
		currentPlayingIndex=0;
		load(quotes[0].video.id,quotes[0].start,quotes[0].end);
	    };
	    
	    var onReady = function(event) {};
	    var onStateChange = function(event) {
		if(event.data===YT.PlayerState.PLAYING && needProgressUpdate)
		{
		    needProgressUpdate=false;
		    duration = player.getDuration();
		}
		if(event.data===YT.PlayerState.ENDED
			&& currentPlayingIndex+1 < playlist.length)
		{
			currentPlayingIndex++;
			load(
				playlist[currentPlayingIndex].videoId,
				playlist[currentPlayingIndex].start,
				playlist[currentPlayingIndex].end
			);
		}
	    };
	    var _onload = function(){};
	    function onload(Fn){
		if(Fn!==undefined) {
		    _onload = Fn;
		} else {
		    _onload();
		}
	    }
	    
	    function load(videoId, start, end) {
		    console.log('YTPlayer.load...', videoId, start, end);
		    needProgressUpdate=true;
		video.execAfterReady(function(){
		    to(function(){
			_onload();
		    });
		    console.log('YTPlayer.load', videoId, start, end);
		    var param={'autoplay': 1,'suggestedQuality': 'small','videoId': videoId,'suggestedQuality': 'small','origin':config.BASE_URL};
		    var playerVars={ 'autoplay': 1,'videoId': videoId,'suggestedQuality': 'small','origin':config.BASE_URL};
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


		    if(player===null || player===undefined)
			    player=new YT.Player(elementId, {
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
//			_this.player.loadVideoById(param);
			player = new YT.Player(elementId, {
				height: '390',
				width: '640',
				videoId: videoId,
				playerVars: playerVars,
				events: {
				  'onReady': onReady,
				  'onStateChange': onStateChange
				}
			    });
		    }
		});
	    }
	    
//	    return this;
    }
    
var video = {
    isReady:false,
    q:[],
    execAfterReady:function(x){
	if(x!==undefined) {
	    video.q.push(x);
	}
	if(video.isReady) {
	    while(video.q.length>0) {
		video.q.pop()();
	    }
	}
    }
};
function onYouTubeIframeAPIReady(){
	video.isReady = true;
	video.execAfterReady();
};