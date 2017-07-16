var $http = require('./util.js');

module.exports = {
  findByName (name) {
    return $http.get('https://videoquotes.herokuapp.com/person/find?name=' + encodeURIComponent(name));
  },

  insert (name) {
    return $http.post('https://videoquotes.herokuapp.com/person', {name: name});
  }

}
