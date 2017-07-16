

function onYouTubeIframeAPIReady() {
	isReady = true
	run()
}
var isReady = false
var player
var Q = []
run = (x) => {
  if(x !== undefined) {
    Q.push(x);
  }

  if(isReady) {
    while(Q.length > 0) {
      Q.pop()(player);
    }
  }
}

// https://developers.google.com/youtube/player_parameters
configure = (videoId, start, end) => {
  return {
    'autoplay': 1,
    'videoId': videoId,
    'start': start,
    'end': end,
    'suggestedQuality': 'small',
    'loop': 0,
    'fs': 0,
    'showinfo': 0,
    'cc_load_policy': 0,
    'iv_load_policy': 3,
    'ref': 0,
		'modestbranding': 1,
    // 'origin': null
  }
}



var startTime = 0
var endTime = 1<<20
playAt = (start = 0, end = 1<<20) => {
	run((player) => {
		//console.log('playAt', start, end)
	  startTime = start
	  endTime = end
		player.seekTo(startTime)
		player.playVideo()
	})
}

onTimeChangeCallback = () => {}
onTimeChange = (callback) => {
	onTimeChangeCallback = callback
}

onTimeChangeIntervalId = -1

onStateChange = (event) => {
	//console.log('player.onStateChange', startTime, endTime)
  if(event.data === YT.PlayerState.PLAYING) {

			onTimeChangeIntervalId = setInterval(()=>{
				onTimeChangeCallback(player.getCurrentTime())
				var t = parseInt(player.getCurrentTime())
				if (t < startTime || t > endTime) {
					player.seekTo(startTime)
	        player.playVideo()
	      }
			}, 1000)

  } else if (onTimeChangeIntervalId > 0) {
		clearInterval(onTimeChangeIntervalId)
	}
}

load = (elementId, videoId, start, end) => {
	//console.log('player.load', elementId, videoId, start, end)
	startTime = start
	endTime = end
  player = new YT.Player(elementId, {
    height: '390',
    width: '640',
    videoId: videoId,
    suggestedQuality: 'small',
    playerVars: configure(videoId, start, end + 1),
		events: {
			onReady (event) {
				player = event.target
				player.seekTo(start)
				player.playVideo()
				// https://developers.google.com/youtube/iframe_api_reference#Playback_quality
				// suggestedQuality parameter value can be small, medium, large, hd720, hd1080, highres or default
				player.setPlaybackQuality('small')
			},
			onPlaybackQualityChange (event) {
				player = event.target
				//console.log(player.getPlaybackQuality())
				//player.setPlaybackQuality('small')
			},
			onStateChange: onStateChange
		}
  })
}

init = (elementId, videoId, start, end) => {
	//console.log('player.init', elementId, videoId, start, end)
  run(() => {
    load(elementId, videoId, start, end)
  })
}

playbackRate = 1
increasePlaybackRate = () => {
  run(() => {
    playbackRate *= 2
    playbackRate = Math.min(playbackRate, 8)
    player.setPlaybackRate(playbackRate)
		player.playVideo()
  })
}

getCurrentVideoId = (callback) => {
	run((player) => {
		callback(player.getVideoData().video_id)
	})
}

decreasePlaybackRate = () => {
  run(() => {
    playbackRate /= 2
    playbackRate = Math.max(playbackRate, 0.25)
    player.setPlaybackRate(playbackRate)
		player.playVideo()
  })
}

stopVideo = () => {
	run((player) => {
    player.pauseVideo()
  })
}

getCurrentTime = (callback) => {
	run((player) => {
		callback(parseInt(player.getCurrentTime()))
  })
}

window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady

module.exports = {
  init: init,
  playAt: playAt,
	stopVideo: stopVideo,
	onTimeChange: onTimeChange,
	getCurrentTime: getCurrentTime,
	getCurrentVideoId: getCurrentVideoId,
  increasePlaybackRate: increasePlaybackRate,
  decreasePlaybackRate: decreasePlaybackRate
}
