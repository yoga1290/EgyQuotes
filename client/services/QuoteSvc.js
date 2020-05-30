import $http from './http.js'
//import CONFIG from 'configuration'
const { CONFIG } = window

export default {
  list (offset, limit) {
    return $http.get(CONFIG.BASE_URL + '/Quote/list?offset=' + offset + '&limit=' + limit);
  },

  findById (quoteId) {
    return $http.get(CONFIG.BASE_URL + '/Quote?id=' + quoteId);
  },

  search (tags, personIds, channelIds, startdate, enddate, page, size, sort) {
    let arrayString = (parameterName, ar) => {
      return (ar && ar.length > 0) ? ar.map((e)=> (parameterName + '=' + e)).join('&') + '&' : ''
    }
    var query = '?'
    query += arrayString('t', tags)
    query += arrayString('p', personIds)
    query += arrayString('c', channelIds)
    query += arrayString('startdate', [startdate])
    query += arrayString('enddate', [enddate])
    query += arrayString('page', [page])
    query += arrayString('size', [size])
    query += arrayString('sort', [sort])
    return $http.get(CONFIG.BASE_URL + '/Quote/query' + query);
  },

  insert (person, quote, start, end, videoId) {
    return $http.post(CONFIG.BASE_URL + '/Quote', {
                    "person": {
                      "name": person
                    },
                    "quote": quote,
                    "start": start,
                    "end": end,
                    "video": {
                      "id": videoId
                    }
                  });
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
