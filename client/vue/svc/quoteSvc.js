import $http from './http.js'
import CONFIG from '../config.js'

export default {
  list (offset, limit) {
    return $http.get(CONFIG.BASE_URL + '/Quote/list?offset=' + offset + '&limit=' + limit);
  },

  findById (quoteId) {
    return $http.get(CONFIG.BASE_URL + '/Quote?id=' + quoteId);
  },

  search (searchDTO) {
    return $http.post(CONFIG.BASE_URL + '/Quote/search', searchDTO);
  },

  insert (quote) {
    return $http.post(CONFIG.BASE_URL + '/Quote/insert', quote);
  },

  getVideoData (videoId) {
    var req = $http.get('https://www.googleapis.com/youtube/v3/videos?part=snippet&key=' + CONFIG.GOOGLE.YT_KEY + '&id=' + videoId, true);

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
  },

  getChannelData (channelId) {

    var req = $http.get('https://www.googleapis.com/youtube/v3/channels?part=snippet&key=' + CONFIG.GOOGLE.YT_KEY + '&id=' + channelId, true);
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
}
