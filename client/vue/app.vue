<template lang="jade">
#app
  .visible-print-block
  mmenu(:onPlaylistClick="onPlaylistClick")
  search.hidden-print(:onQueryChange="onQueryChange", :onYoutubeVideoIdDetected="onYoutubeVideoIdDetected")
  video-player.hidden-print(v-if="showVideo", :quote="selectedQuote", :close="closeVideo", :videoId="videoId")
  playlist(v-if="showPlaylist", :onQuoteSelect="onSelectQuote")
  grid(:items="items", :onQuoteSelect="onSelectQuote", :class="{noscroll: !scroll}")
  pageLoader.hidden-print
</template>

<script>
import mmenu from './menu.vue'
import grid from './grid/grid.vue'
import search from './search/search.vue'
import pageLoader from './page-loader.vue'
import VideoPlayer from './video/video.vue'
import Playlist from './playlist/playlist.vue'
var quoteSvc =  require('./svc/quoteSvc.js')

// https://vuejs.org/v2/guide/list.html#Caveats
// https://vuejs.org/v2/guide/reactivity.html#Change-Detection-Caveats
var v = {}
var $set = (k, v) => {}

var req = {xhr: { abort () {} }}

var isLoading = false
function onQueryChange(searchDTO) {
  req.xhr.abort()
  isLoading = true
  req = quoteSvc.search(searchDTO)
          .success((response) => {
            //console.log(response)
            // //TODO: NEEDS FIX
            /*
            response.forEach((quote)=>{
              quote.person = {name: 'author'};
            })//*/
            $set('items', response)
            //closeVideo()

            window.scrollTo(1,1)
            isLoading = false

            var newQueryString = '/?channelIds=' + searchDTO.channelIds.join(',')
              + '&start=' + searchDTO.start
              + '&end=' + searchDTO.end
              + '&personIds=' + searchDTO.personIds.join(',');
            //window.history.replaceState(null, null, newQueryString);
          })

}

function loadMore() {
  //TODO: use offset = pageSize * 1.5
  searchDTO.page++
  onQueryChange(searchDTO)
}

function loadLess() {
  //TODO: use offset = pageSize * -1.5
  if (searchDTO.page <= 1) return;
  searchDTO.page--
  onQueryChange(searchDTO)
}

/*
var tmp=
  $('<div>')
  .css('top','0px')
  .css('visibility','hidden')
  .css('height','100%')
  .appendTo('body');
var windowH = window.screen.height || tmp.height();
  tmp.css('display','none').remove();
console.log('windowH', windowH)

$(document).scroll(function() {

  if (isLoading) return;

  var H=$(document).height();
  var scrollTop=$(document).scrollTop();

  console.log('scrollBottom', scrollTop+windowH)
  console.log('H', H)
  if(scrollTop+windowH>H) {
    loadMore();
  } else if (scrollTop<0) {
    loadLess();
  }
});
// */

$(document).scroll(function() {
  if (isLoading) return;

  if(document.body.scrollTop === 0) {
    console.log('TOP');
    loadLess();
  } else if( document.body.scrollTop + window.screen.height - document.body.scrollHeight > 100) {
    console.log('BOTTOM');
    loadMore();
  }
});

function onSelectQuote(quote) {
  //console.log('app.onSelectQuote', quote)
  $set('scroll', false)
  $set('selectedQuote', quote)
  $set('showVideo', true)

//  window.history.replaceState(null, null, '/#/quote/' + quote.id);
//  window.history.replaceState(null, null, '/og/q/' + quote.id);
}

function closeVideo() {
  $set('scroll', true)
  $set('showVideo', false)
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

module.exports = {
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
    onQueryChange (searchDTO) {
      onQueryChange(searchDTO)
    },

    onSelectQuote (quote) {
      onSelectQuote(quote)
    },

    closeVideo () {
      //$set('scroll', true)
      //$set('showVideo', false)
      closeVideo()
    },

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

  created () {
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
      size:  v.size || 30,
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
    mmenu,
    search,
    Playlist,
    pageLoader,
    VideoPlayer
  }
}
</script>

<style lang="stylus">
#app
  background-color: #606060;
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
