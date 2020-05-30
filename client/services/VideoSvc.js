import $http from './http.js'
//import CONFIG from 'configuration'
const { CONFIG } = window

export default {
  findById (id) {
    return $http.get(CONFIG.BASE_URL + '/api/video?id=' + id);
  }
}
