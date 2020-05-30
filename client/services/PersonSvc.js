import $http from './http.js'
//import CONFIG from 'configuration'
const { CONFIG } = window
 
export default {
  findByName (name) {
    return $http.get(CONFIG.BASE_URL + '/person/find?name=' + encodeURIComponent(name));
  },

  insert (name) {
    return $http.post(CONFIG.BASE_URL + '/person', {name: name});
  }

}
