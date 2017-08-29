import $http from './http.js'
import CONFIG from 'configuration'

export default {

  findByNameAndExcludedQuoteId (name, quoteId) {
    return $http.get(CONFIG.BASE_URL + '/playlist?name=' + encodeURIComponent(name) + '&quoteId=' + encodeURIComponent(quoteId) );
  },

  insert (name, quoteId) {
    return $http.post(CONFIG.BASE_URL + '/playlist', {name: name, quotes: quoteId});
  },

  list (page, size) {
    return $http.get(CONFIG.BASE_URL + '/playlist/list?page=' + page + '&size=' + size );
  }
}
