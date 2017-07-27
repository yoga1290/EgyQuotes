import jQuery from 'jquery'
import Vue from 'vue'
import App from './app.vue'

window.$ = jQuery
// window.document.body.style.cssText = 'background-color: #606060';
window.document.body.style.cssText = 'background-color: #ccc';
/*
const views = {
  video: require('./video/video.vue'),
  search: require('./search/search.vue')
}
//*/

const routes = {
  '/': require('./app.vue'), // require('./video/video.vue'), //
  '/search': require('./search/search.vue'),
  '/playlist': require('./playlist/playlist.vue')
}

new Vue({
  el: '#app',

  // https://vuejs.org/v2/guide/routing.html#Simple-Routing-From-Scratch
  data: {
    currentRoute: window.location.hash.length >1 ? window.location.hash.substring(2): window.location.pathname
  },

  methods: {
    getQueryStringObj () {
      let result = {}
      window.location.search.substring(1).split('&').forEach((q)=>{
        q = q.split('=')
        result[q[0]] = decodeURIComponent(q[1])
      })
      return result
    }
  },
  render (createElement) {
    //console.log(this.currentRoute)
    // https://vuejs.org/v2/guide/render-function#createElement-Arguments
    return createElement(routes[this.currentRoute] || routes['/'],
              {props: this.getQueryStringObj()})
  }
})
