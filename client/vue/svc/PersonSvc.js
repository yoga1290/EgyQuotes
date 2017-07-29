import $http from './http.js'
import config from '../config.js'

export default {
  findByName (name) {
    return $http.get('https://videoquotes.herokuapp.com/person/find?name=' + encodeURIComponent(name));
  },

  insert (name) {
    return $http.post('https://videoquotes.herokuapp.com/person', {name: name});
  }

}
