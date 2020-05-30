import $http from './http.js'
//import CONFIG from 'configuration'
const { CONFIG } = window

function searchByName(name, page, size) {
  return $http.get(CONFIG.BASE_URL + '/channel/searchByName?name=' + encodeURIComponent(name) +'&page=' + page + '&size=' + size);
}


export default {
  searchByName
}
