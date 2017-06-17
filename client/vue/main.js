require('../js/1_jquery.js')
var Vue = require('vue')
var App = require('./app.vue')

const routes = {
  '/': require('./app.vue'),
  '/search': require('./search/search.vue')
}

new Vue({
  el: '#app',

  // https://vuejs.org/v2/guide/routing.html#Simple-Routing-From-Scratch
  data: {
    currentRoute: '/' //window.location.pathname
  },

  methods: {
    getQueryStringObj() {
      result = {}
      window.location.search.substring(1).split('&').forEach((q)=>{
        q = q.split('=')
        result[q[0]] = decodeURIComponent(q[1])
      })
      return result
    }
  },
  render (createElement) {
    // https://vuejs.org/v2/guide/render-function#createElement-Arguments
    return createElement(routes[this.currentRoute] || routes['/'],
              {props: this.getQueryStringObj()})
  }
})
