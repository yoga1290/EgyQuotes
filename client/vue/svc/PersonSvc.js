var $http = require('./util.js');

function findByName (name) {
  return $http.get('https://videoquotes.herokuapp.com/person/find?name=' + name);
}


module.exports = {
  findByName: findByName
}
