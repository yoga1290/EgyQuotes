import $http from './http.js'
import CONFIG from '../config.js'

function searchByName(name, page, size) {
  return $http.get(CONFIG.BASE_URL + '/channel/searchByName?name=' + encodeURIComponent(name) +'&page=' + page + '&size=' + size);
}


export default {
  searchByName
}
