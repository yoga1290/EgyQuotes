import $http from './http.js'
import CONFIG from 'configuration'

export default {

  findByNameAndExcludedQuoteId (name, quoteId) {
    return $http.get(CONFIG.BASE_URL + '/playlist/query?name=' + encodeURIComponent(name) + '&quoteId=' + encodeURIComponent(quoteId) );
  },

  insert (name, quoteId) {
    return $http.post(CONFIG.BASE_URL + '/playlist', {name: name, quotes: quoteId});
  },

  delete (id) {
    return $http.delete(CONFIG.BASE_URL + '/playlist?id=' + id);
  },

  list (page, size) {
    return $http.get(CONFIG.BASE_URL + '/playlist?page=' + page + '&size=' + size + '&sort=creationTime|desc');
  }
}
