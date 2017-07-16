var $http = require('./util.js');

var domain = 'https://videoquotes.herokuapp.com';

function searchByName(name, page, size) {
  return $http.get(domain + '/channel/searchByName?name=' + encodeURIComponent(name) +'&page=' + page + '&size=' + size);
}

//

module.exports = {
  searchByName: searchByName
}
