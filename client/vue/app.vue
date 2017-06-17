<template lang="jade">
div
  .visible-print-block
  .hidden-print
    search(:onQueryChange="onQueryChange")
    grid(:items="items")
    pageLoader
</template>
<script>
import grid from './grid/grid.vue'
import search from './search/search.vue'
import pageLoader from './page-loader.vue'
var quoteSvc =  require('./svc/quoteSvc.js')

// https://vuejs.org/v2/guide/list.html#Caveats
// https://vuejs.org/v2/guide/reactivity.html#Change-Detection-Caveats
var v = {}
var $set = (k, v) => {}

var req = {xhr: { abort () {} }}

function onQueryChange(searchDTO) {
  req.xhr.abort()
  req = quoteSvc.search(searchDTO)
          .success((response) => {
            $set('items', response)
          })
}

var searchDTO = {
  page: 0,
  size:  30,
  tags:   [],
  channelIds: [],
  start: 0,
  end: new Date().getTime(),
  personIds: []
};

module.exports = {
  data () {
    return {
      searchDTO: searchDTO,
      items: []
    }
  },

  created () {
   //TODO
  },
  methods: {
    onQueryChange (searchDTO) {
      onQueryChange(searchDTO)
    }

  },

  props: {
      channelIds: {
          type: String,//Object,
          default () {
            return '';
          }
      },
      personIds: {
          type: String,//Object,
          default () {
            return '';
          }
      }
  },

  created () {
    console.log('grid.created')
    v = this;
    $set = (key, value) => {
      v.$set(v.$data, key, value);
    }
    console.log(v.$props.channelIds)
    console.log(v.$props.personIds)
    searchDTO.channelIds = v.$props.channelIds
    searchDTO.personIds = v.$props.personIds
    $set('searchDTO', searchDTO)

  },

  components: {
    search,
    grid,
    pageLoader
  }
}
</script>

<style lang="stylus" scoped>
</style>
