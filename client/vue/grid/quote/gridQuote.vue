<template lang="jade">
.quote-container
  yt-video(v-if="show", :quote="quote")
  quote(:isActive="false", :quote="quote", :click="click2")
</template>

<script>
import Quote from './quote.vue'
import YtVideo from '../../video/video.vue'

var v = {}
var $set = (k, v)=>{}
var init = {
  name: '',
  airedTime: '',
  quote: '',
  person: {
    name: ''
  }
}

export default {
  data () {
    return {
      show: false
    }
  },

  methods: {
    click2 (quote) {
      //console.log('gridQuote.click2', this.quote)
//      this.$set(this.$data, 'show', true)
      this.click(quote)

    }
  },

  created () {

      v = this;
      $set = (key, value) => {
        this.$set(this.$data, key, value)
      }

  },

  mounted () {
    //console.log('mounted')
  },

  updated () {
  },

  components: {
    YtVideo,
    Quote
  },

  props: {
      quote: {
          type: Object,
          default () {
            return init;
          }
      },
      click: {
          type: Function,
          default () {
            return ()=>{};
          }
      }
  }
}
</script>

<style lang="stylus" scoped>
.quote-container
  position: relative;

.quote-container .dialog
  position: absolute;
  z-index: 8;
  background-color: #474747;

/*
.col-1 .quote-container .dialog
  left: 0px;
.col-2 .quote-container .dialog
  left: -102%;
.col-3 .quote-container .dialog
  left: -202%;
.col-4 .quote-container .dialog
  left: -302%;
*/
</style>
