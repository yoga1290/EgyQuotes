<template lang="jade">
.dialog.animated.fadeInDown.col-sm-offset-1.col-sm-11.col-xs-12
	.video-container
		.overlay
		videoMenu(:onQuoteEditor="onQuoteEditor", :onAddToPlaylist="onAddToPlaylist", :close="close")
		add-to-playlist.video-overlay.animated.slideInDown.col-xs-12.col-md-8(v-if="showAddToPlaylist", :quote="quote")
		.video-overlay.col-xs-12.col-md-offset-1.col-md-8.animated.slideInDown.ng-cloak(v-if="showQuoteEditor")
			quote-editor(:player="Player")

		.col-xs-12.col-md-8.embed-responsive.embed-responsive-16by9
			#video
		.padding0.col-xs-12.col-md-3
			quote.col-xs-12(v-if="quote", :quote="quote", :isActive="true")

		.col-xs-12.col-md-offset-2.col-md-6(v-if="otherQuote in quotes")
			.connector.col-md-offset-6
			quote.clickable(v-if="otherQuote.id!==quote.id", :quote="otherQuote")
</template>

<script>
import quote from '../grid/quote/quote.vue'
import addToPlaylist from './addToPlaylist.vue'
import QuoteEditor from './quote-editor/QuoteEditor.vue'
import videoMenu from './video-menu.vue'

import Player from '../player.js'
//let Player = window.YTPlayer //require('./player.js')

let v = {}
let $props = {}
let $set = (k, v)=>{}

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
      Player: Player,
      showQuoteEditor: false,
      showAddToPlaylist: false,
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
      quotes: [], //TODO
      screen: detectScreenWidth()
    }
  },

  created () {
    v = this
    $props = this.$props
    $set = (key, value) => {
      this.$set(this.$data, key, value);
    }
		window.scrollTo(0, 0)
    //console.log('video', $props)
    //console.log('video.created', this.videoId)
  },

	beforeDestroy () {
		Player.destroy()
	},

	updated () {
		//console.log('video.updated')
	},

  mounted () {
    //console.log($props.items)
		//console.log('video.mounted', this.quote, this.videoId)

		if (this.videoId) {
			Player.init('video', this.videoId)
		} else if (this.quote.video) {
			Player.init('video', this.quote.video.id, this.quote.start, this.quote.end)
		}

  },

  methods: {
    onQuoteEditor () {
      this.showQuoteEditor = !this.showQuoteEditor
    },

    onAddToPlaylist () {
      this.showAddToPlaylist = !this.showAddToPlaylist
    }

  },

  components: {
    videoMenu,
    quote,
    QuoteEditor,
    addToPlaylist
  },

	watch: {
		videoId (nVal, oVal) {
			//console.log('video.watch.videoId')
			Player.init('video', nVal)
		},
		quote (nVal, oVal) {
			console.log('video.watch.quote', nVal, oVal)
			this.quote = nVal
			Player.init('video', nVal.video.id, nVal.start, nVal.end)
		}
	},

  props: {
      quote: {
          type: Object,
          default () {
            return {
              video: {
                id: 'NONE'
              },
              airedTime: new Date().getTime(),
              quote: 'quote',
              person: {
                name: 'Author'
              }
            };
          }
      },
			close: {
          type: Function,
          default () {
            return ()=>{};
          }
      },
			videoId: {
          type: String,
          default () {
            return null;
          }
      }
  }//*/
}
</script>

<style lang="stylus" scoped>
@media (min-width:768px)
	.dialog
		margin-left: 70px;
.dialog
	/*position: relative;*/
	/* top: 0; */
	padding: 0px;
	z-index: 8;
	background-color: #333;/*#474747;*/
	position: absolute;
	top: 0px;
	left: 0px;
	height: 100%;

.dialog .video-container
	position: absolute;
	width: 100%;
	background-color: #333;/*#474747;*/
	left: 0px;

.video-overlay
	padding: 0px;
	position: absolute;
	z-index: 6;
	background-color: rgba(12, 12, 12, 0.68);
.padding0
	padding: 0px;
.connector
	height: 20px;
	border-left: 10px solid;
	border-color: white;

.isFavorite
	color: rgb(252, 139, 0);
	border-color: rgb(252, 139, 0);

</style>
