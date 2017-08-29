<template lang="jade">
#playlist-panel
	.col-xs-12.col-sm-11.no-padding
		.playlist.col-sm-6.no-padding
			i.icon.title
			.item(v-for="item in items", @click="selectPlaylist(item)")
				i.icon.arrow-right
				{{item.name}}
				span.footer(v-if="item.quotes")
					i.icon.quotes-count
					{{item.quotes.length}}
		.col-xs-12.col-sm-6.no-padding(v-if="showPreview", :class="{overlay:screen.xs}")
			.list-header
				i.icon.preview
				| {{selectedPlaylist ? selectedPlaylist.name:''}}
				i.icon.arrow-left(@click="showPreview=false")
			preview(:playlist="selectedPlaylist", :onQuoteSelect="onQuoteSelect")
</template>

<script>
//import gridQuote from './quote/gridQuote.vue'
import Preview from './preview.vue'
import { PlaylistSvc } from 'services'

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
			items: [],
			showPreview: false,
			selectedPlaylist: {},
			screen: detectScreenWidth()
    }
  },

  created () {
    v = this
    $props = this.$props
    $set = (key, value) => {
      this.$set(this.$data, key, value);
    }

		PlaylistSvc.list(0, 50).success((playlists)=>{
			$set('items', playlists)
		})
  },

  updated () {
    //console.log('grid.updated', $props.items)
    //$set('screen', detectScreenWidth())
  },
  mounted () {
    //console.log($props.items)
  },

  methods: {
		selectPlaylist (playlist) {
			this.$set(this.$data, 'selectedPlaylist', playlist)
			this.$set(this.$data, 'showPreview', true)
		}
  },

  computed: {
  },

  components: {
		Preview
  },

  props: {
		onQuoteSelect: {
				type: Function,
				default () {
					return ()=>{
						console.log('no playlist.onQuoteSelect')
					};
				}
		}
  }
}
</script>

<style lang="stylus" scoped>
@media (min-width:768px)
	#playlist-panel .col-xs-12.col-sm-11.no-padding
		margin-left: 80px;

#playlist-panel .col-xs-12
	background-color: #333;
	z-index: 1;

.item
	border-bottom: 5px solid #ccc;
	margin-bottom: 5px;
	cursor: pointer;
	font-size: 54px;
	color: #ccc;
span.footer
	font-size: 24px;
	margin-left: 10px;
i.icon.quotes-count
	font-size: 24px;
	margin: 5px;
i.icon.quotes-count:after
	content: '\e76a'

i.icon.arrow-right, i.icon.arrow-left
	position: relative;
	cursor: pointer;
	margin-top: 10px;
	font-size: 56px;
	float: right;
i.icon.arrow-right:after
	content: '\e7ca'
i.icon.arrow-left:after
	content: '\e7c8'

i.icon.title
	font-size: 56px;
	color: #ccc;
i.icon.title:after
	content: '\e962'

i.icon.preview
	font-size: 54px;
	color: #ccc;
i.icon.preview:after
	content: '\e76a'

.no-padding
	padding: 0px;

.list-header
	font-size: 56px;
	color: #ccc;
.overlay
	background-color: #606060;
	position: absolute;
	top: 0px;
	left: 0px;
	height: 100%;
</style>
