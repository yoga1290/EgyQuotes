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
	    
	    var onReady = function(event) {
	        console.log('onReady');
	    };
	    var onStateChange = function(event) {
	    console.log('onStateChange');
		if(event.data===YT.PlayerState.PLAYING && needProgressUpdate)
		{
		    console.log('onStateChange1');
		    needProgressUpdate=false;
		    duration = player.getDuration();
		}
		if(event.data===YT.PlayerState.ENDED
			&& currentPlayingIndex+1 < playlist.length)
		{
		    console.log('onStateChange2');
			currentPlayingIndex++;
			load(
				playlist[currentPlayingIndex].video.id,
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
//		    to(function(){
//			_onload();
//		    });
//load(quotes[0].video.id,quotes[0].start,quotes[0].end);
		    console.log('YTPlayer.load', videoId, start, end);
		    var playerVars = {
                    'autoplay': 1,
                    'videoId': videoId,
                    'start': start,
                    'end': end,
                    'suggestedQuality': 'small',
                    'loop': 1,
                    'fs': 0,
                    'showinfo': 0,
                    'cc_load_policy': 0,
                    'iv_load_policy': 3,
                    'ref': 0,
                    'origin':config.BASE_URL
            };
//		    if((location.href.indexOf('#e=')>-1))
//			    playerVars.end=param.endSeconds=parseInt(
//				    location.href.substring(
//				    location.href.indexOf('e=')+2,
//				    location.href.indexOf('s=')) );
//		    if((location.href.indexOf('s=')>-1))
//			    playerVars.start=param.startSeconds=parseInt(
//				    location.href.substring(
//				    location.href.indexOf('s=')+2,
//				    location.href.indexOf('v=')) );
//		    if(start!==undefined)
//			    playerVars.start=param.startSeconds=parseInt(start);
//		    if(end!==undefined)
//			    playerVars.end=param.endSeconds=parseInt(end);


//		    if(player===null || player===undefined)
			    player=new YT.Player(elementId, {
				height: '390',
				width: '640',
				videoId: videoId,
				suggestedQuality: 'small',
				playerVars: playerVars,
				events: {
//				  'onReady': function(e) {
//                  console.log('onReady');
//                    onReady();
//                  },
//				  'onStateChange': function(event) {
//				        if(
//				        event.data===YT.PlayerState.ENDED
//                        			&&
//                        			 currentPlayingIndex+1 < playlist.length)
//                        		{
//                        		    console.log('onStateChange');
//                        			currentPlayingIndex++;
//                        			load(
//                        				playlist[currentPlayingIndex].video.id,
//                        				playlist[currentPlayingIndex].start,
//                        				playlist[currentPlayingIndex].end
//                        			);
//                        		}
//				  }
				}
			    });
//		    else
//		    {
//		    console.log(player);
//		        player.loadVideoById(playerVars);
//		    }
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