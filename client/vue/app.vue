<template lang="jade">
#app(role='main')
  error-dialog(:onLogin="onLogin")
  mmenu(:onPlaylistClick="onPlaylistClick", :onLogin="onLogin")
  search.hidden-print(:onQueryChange="onQueryChange", :onYoutubeVideoIdDetected="onYoutubeVideoIdDetected")
  video-player.hidden-print(v-if="showVideo", :quote="selectedQuote", :close="closeVideo", :videoId="videoId")
  playlist(v-if="showPlaylist", :onQuoteSelect="onSelectQuote")
  page-loader-header(:onload="loadLess", :enable="scroll", v-if="searchDTO.page > 0", :class="{hide: !scroll}")
  grid(:items="items", :onQuoteSelect="onSelectQuote", :class="{noscroll: !scroll}")
  page-loader-footer(:onload="loadMore", :enable="scroll", v-if="items.length > 0", :class="{hide: !scroll}")
  login(:close="cancelLogin")
  page-loader.hidden-print
</template>

<script>
import mmenu from './menu.vue'
import login from './login.vue'
import grid from './grid/grid.vue'
import search from './search/search.vue'
import pageLoader from './page-loader.vue'
import VideoPlayer from './video/video.vue'
import Playlist from './playlist/playlist.vue'
import quoteSvc from './svc/quoteSvc.js'
import ErrorDialog from './error-dialog.vue'
import PageLoaderHeader from './page-loader-header.vue'
import PageLoaderFooter from './page-loader-footer.vue'
import CONFIG from './config.js'

// https://vuejs.org/v2/guide/list.html#Caveats
// https://vuejs.org/v2/guide/reactivity.html#Change-Detection-Caveats
var v = {}
var $set = (k, v) => {}

var req = {xhr: { abort () {} }}

function updateH5URI() {
  //TODO
  var pref = window.location.origin.match(/github.io/) ? '/VideoQuotes' : ''
  var newQueryString = pref + '/?channelIds=' + searchDTO.channelIds.join(',')
    + '&start=' + searchDTO.start
    + '&end=' + searchDTO.end
    + '&personIds=' + searchDTO.personIds.join(',');
  window.history.replaceState(null, null, newQueryString);
}

var isLoading = false
function onQueryChange(searchDTO, cb = ()=>{}) {
  req.xhr.abort()
  isLoading = true
  $set('scroll', false)
  req = quoteSvc.search(searchDTO)
          .success((response) => {
            //console.log(response)
            // //TODO: NEEDS FIX
            /*
            response.forEach((quote)=>{
              quote.person = {name: 'author'};
            })//*/
            $set('items', response)
            $set('searchDTO', searchDTO)

            $set('showPlaylist', false)
            $set('showVideo', false)
            $set('scroll', true)
            //closeVideo()

            window.scrollTo(1,1) //TODO
            isLoading = false
            cb()

            updateH5URI()
          })

}

function loadMore(cb) {
  //TODO: use offset = pageSize * 1.5
  if (isLoading) return;
  searchDTO.page++
  onQueryChange(searchDTO, cb)
}

function loadLess(cb) {
  //TODO: use offset = pageSize * -1.5
  if (isLoading) return;
  if (searchDTO.page <= 0) return;
  searchDTO.page--
  onQueryChange(searchDTO, cb)
}

function onSelectQuote(quote) {
  //console.log('app.onSelectQuote', quote)
  $set('scroll', false)
  $set('selectedQuote', quote)
  $set('showVideo', true)
  window.history.replaceState(null, null, CONFIG.OPEN_GRAPH.QUOTE + quote.id);
}

function onLogin() {
  $set('showPlaylist', false)
  $set('showVideo', false)
  $set('scroll', false)
  $('#login').addClass('active')
}
function cancelLogin() {
  $set('showPlaylist', false)
  $set('showVideo', false)
  $set('scroll', true)
}

function closeVideo() {
  $set('scroll', true)
  $set('showVideo', false)
  updateH5URI()
}

var searchDTO = {
  page: 0,
  size:  100,
  tags:   [],
  channelIds: [],
  start: 0,
  end: new Date().getTime(),
  personIds: []
};

export default {
  data () {
    return {
      showVideo: false,
      showPlaylist: false,
      selectedQuote: {},
      //*/
      videoId: null,
      scroll: true,
      searchDTO: searchDTO,
      items: []
    }
  },

  methods: {
    onQueryChange,
    onSelectQuote,
    cancelLogin,
    closeVideo,
    loadMore,
    loadLess,
    onLogin,

    onPlaylistClick () {
      //this.showPlaylist = true
      $set('showPlaylist', true)
      closeVideo()

    },

    onYoutubeVideoIdDetected (videoId) {
      $set('selectedQuote', null)
      $set('videoId', videoId)
      $set('showVideo', true)
      $set('scroll', false)
      console.log('onYoutubeVideoIdDetected', videoId)
    }

  },

  props: {
      channelIds: {
          type: String,//Object,
          default () {
            return '';
          }
      },

      page: {
          type: String,
          default () {
            return '';
          }
      },
      size: {
          type: String,
          default () {
            return '';
          }
      },
      tags: {
          type: String,
          default () {
            return '';
          }
      },
      channelIds: {
          type: String,
          default () {
            return '';
          }
      },
      start: {
          type: String,
          default () {
            return '';
          }
      },
      end: {
          type: String,
          default () {
            return '';
          }
      },
      personIds: {
          type: String,
          default () {
            return '';
          }
      }
  },

  mounted () {
    //console.log('grid.created')
    v = this;
    $set = (key, value) => {
      v.$set(v.$data, key, value);
    }
    //console.log(v.$props.channelIds)
    //console.log(v.$props.personIds)
    searchDTO.channelIds = v.$props.channelIds
    searchDTO.personIds = v.$props.personIds
    $set('searchDTO', searchDTO)

    searchDTO = {
      page: v.page || 0,
      size:  v.size || 50,
      tags:   v.tags ? v.tags.split(','):[],
      channelIds: v.channelIds ? v.channelIds.split(','):[],
      start: v.start || 0,
      end: v.end || new Date().getTime(),
      personIds: v.personIds ? v.personIds.split(','):[]
    }
    //TODO:
    onQueryChange(searchDTO)

  },

  components: {
    grid,
    login,
    mmenu,
    search,
    Playlist,
    pageLoader,
    VideoPlayer,
    ErrorDialog,
    PageLoaderHeader,
    PageLoaderFooter
  }
}
</script>

<style lang="stylus">
#app
  background-color: #ccc; /*#606060;*/
  height: 100%;
  width:100%;
/*
  position: absolute;
#grid
  position: fixed;
  width: 100%;
  height: 100%;
  overflow-y: auto;
*/
#grid.noscroll
  overflow-y: hidden;
  position: fixed;


.hidden-print *
  /*background-color: #606060 #cacaca */

/* https://vaadin.com/icons/download#download */
@font-face
    font-family: 'Vaadin-Icons';
    src: url('./Vaadin-Icons.eot');
    src: url('./Vaadin-Icons.eot?#iefix') format('embedded-opentype'),
         url('./Vaadin-Icons.woff') format('woff'),
         url('./Vaadin-Icons.ttf') format('truetype'),
         url('./Vaadin-Icons.svg#icomoon') format('svg');
.icon
   font-family: Vaadin-Icons;
   font-size: 16px;
   speak: none;
   font-weight: normal;
   font-variant: normal;
   font-style: normal;
   text-transform: none;
   line-height: 1;
   -webkit-font-smoothing: antialiased;

</style>
