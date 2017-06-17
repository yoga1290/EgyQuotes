var $http = require('./util.js');

var YTKey = 'AIzaSyB4a9Vy_HoHuSFNIT8XUunQii_nla4YQvs';

function wrapResponse() {

}

function list (offset, limit) {
  return $http.get('https://videoquotes.herokuapp.com/Quote/list?offset=' + offset + '&limit=' + limit);
}

function search(searchDTO) {
  return $http.post('https://videoquotes.herokuapp.com/Quote/search', searchDTO);
}

function getVideoData(videoId) {
  var req = $http.get('https://www.googleapis.com/youtube/v3/videos?part=snippet&key='+YTKey+'&id='+videoId);

  return {
    success: function(callback) {
      req.success(function(response) {
        callback({
          channelId: response.items[0].snippet.channelId,
          thumbnail: response.items[0].snippet.thumbnails.high.url
        });
      });
    },
    error: req.error,
    finally: req.finally,
    xhr: req.xhr
  };
}

function getChannelData(channelId) {

  var req = $http.get('https://www.googleapis.com/youtube/v3/channels?part=snippet&key='+YTKey+'&id='+channelId);
  return {
    success: function(callback) {
      req.success(function(response) {
        callback({
          channelId: response.items[0].snippet.channelId,
          logo: response.items[0].snippet.thumbnails.high.url
        });
      });
    },
    error: req.error,
    finally: req.finally,
    xhr: req.xhr
  };
}
module.exports = {
  list: list,
  search: search,
  getVideoData: getVideoData,
  getChannelData: getChannelData
}
