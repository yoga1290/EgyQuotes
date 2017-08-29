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
  '/\\$' : App, // require('./video/video.vue'), //
  '/q/([^/]*)\$' : require('./quotePreview.vue')
}

new Vue({
  el: '#app',

  // https://vuejs.org/v2/guide/routing.html#Simple-Routing-From-Scratch
  data () {
    var route = null;
    var params = '';
    console.log('window.location.hash.substring(1)', window.location.hash.substring(1))
    for (var k in routes) {
      var m = window.location.hash.substring(1).match(k);
      if (m !== null) {
        route = routes[k]
        console.log('k', k, m)
        params = m
      }
    }

    if (!route) {
      route = App
    }
    
    return {
      route,
      params
    }
  },
  // data: {
  //   currentRoute: window.location.hash.length >1 ? window.location.hash.substring(1): window.location.pathname
  // },

  methods: {
    getQueryStringObj () {
      console.log('params:', this.params)
      let result = {}
      window.location.search.substring(1).split('&').forEach((q)=>{
        q = q.split('=')
        if (q[0] === 'access_token') {
          window.localStorage.setItem('access_token', q[1])
        } else {
          result[q[0]] = decodeURIComponent(q[1])
        }
      })
      result['params'] = this.params
      return result
    }
  },
  render (createElement) {
    //console.log(this.currentRoute)
    // https://vuejs.org/v2/guide/render-function#createElement-Arguments
    return createElement(this.route, //routes[this.currentRoute] || routes['/'],
              {props: this.getQueryStringObj()})
  }
})
