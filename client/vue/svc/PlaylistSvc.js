var $http = require('./util.js');

module.exports = {

  findByNameAndExcludedQuoteId (name, quoteId) {
    return $http.get('https://videoquotes.herokuapp.com/playlist?name=' + encodeURIComponent(name) + '&quoteId=' + encodeURIComponent(quoteId) );
  },

  insert (name, quoteId) {
    return $http.post('https://videoquotes.herokuapp.com/playlist', {name: name, quotes: quoteId});
  },

  list (page, size) {
    return $http.get('https://videoquotes.herokuapp.com/playlist/list?page=' + page + '&size=' + size );
  }
}
