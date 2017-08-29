<template lang="jade">
.quote-container
  page-loader
  quote(:isActive="true", :quote="quote", :click="click2")
</template>

<script>
import { QuoteSvc } from 'services'
import Quote from './grid/quote/quote.vue'
import PageLoader from './page-loader.vue'

var v = {}
var $set = (k, v)=>{}
var init = {
  name: '',
  airedTime: '',
  quote: '',
  video: {
    id: null
  },
  person: {
    name: ''
  }
}

export default {

  data () {
    return {
      quote: init
    }
  },

  beforeMount () {

      v = this;
      $set = (key, value) => {
        this.$set(this.$data, key, value)
      }
      QuoteSvc.findById(v.$props.params[1]).success((quote)=>{
        this.quote = quote;
        $set('quote', quote)
      })

  },

  components: {
    Quote,
    PageLoader
  },

  props: {
      params: {
          type: Array,
          default () {
            return ['', ''];
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
</style>
