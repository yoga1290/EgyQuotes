<template lang="jade">
#playlist.col-md-offset-1.col-xs-12
  .playlist.video-overlay.col-xs-12.col-md-offset-1.col-md-8.animated.slideInDown
    .col-xs-12
      input(type="text", v-model="query", @keyup="searchByName()")

      .item(v-for="item in list", @click="insert(item)")
        i.icon archive
        | {{item.name}}
      .item(v-if="query.length>0 && (!list.length || list.length < 1)", @click="insert(item)")
        i.icon.new
        | {{query}}
</template>

<script>
//import quote from '../grid/quote/gridQuote.vue'
import PlaylistSvc from '../svc/PlaylistSvc.js'

var v = {}
var $props = {}
var $set = (k, v)=>{}

function detectScreenWidth() {
  var width = $('body').width();
  return {
    xs: width < 768,
    sm: 768 <= width && width < 992,
    other: width >= 992
  }
}


export default {
  data () {
    return {
      query: '',
      /*quote: {
        airedTime: new Date().getTime(),
        quote: 'quote',
        person: {
          name: 'Author'
        }
      },//*/
      author: {
        name: ''
      },
      translation: {
        VIDEO: {
          AUTHOR: 'Author',
          QUOTE: 'QUOTE',
          SAVE: 'SAVE'
        }
      },
      list: [],
      screen: detectScreenWidth()
    }
  },

  created () {
    v = this
    $props = this.$props
    $set = (key, value) => {
      v.$set(v.$data, key, value);
    }
  },

  methods: {
    searchByName () {
      PlaylistSvc
        .findByNameAndExcludedQuoteId(this.query, this.$props.quote.id)
        .success((response) => {
          $set('list', response)
        })
    },

    insert (list) {
      PlaylistSvc
        .insert(this.query, [this.$props.quote.id])
        .success(() => {
          $set('list', [])
        })

    }
  },

  components: {
  },

  props: {
      quote: {
          type: Object,
          default () {
            return {
              airedTime: new Date().getTime(),
              quote: 'quote',
              person: {
                name: 'Author'
              }
            };
          }
      }
  }//*/
}
</script>

<style lang="stylus" scoped>
.item
  font-size: 32px;
  color: #ccc;
  cursor: pointer;
i.icon
  font-size:36px;
  color: #ccc;
i.icon.new:after
  content: '\e929'
.playlist input
    width: 100%;
    border: 1px solid #ccc;
    background-color: transparent;
    color: white;
    border-radius: 5px;
    margin-bottom: 5px;
    margin-left: 5px;
    padding: 7px;
    text-align: center;
    font-size: 32px;
</style>
