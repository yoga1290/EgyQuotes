<template lang="jade">
#menu(:class="{xs: screen.xs, sm: !screen.xs}")
	.overlay(v-if="!screen.xs && hover==1")
		.menu-tooltip My playlists
	i.icon.playlist(v-on:mouseover="hover=1", @click="onPlaylistClick()")
	.overlay(v-if="!screen.xs && hover==2")
		.menu-tooltip Search or Youtube link
	i.icon.search(@click="openSearch()", v-on:mouseover="hover=2")
	.overlay(v-if="!screen.xs && hover==3")
		.menu-tooltip My account
	i.icon.user(@click="onLogin", v-on:mouseover="hover=3")
</template>

<script>
//import Quote from '../grid/quote/quote.vue'

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
			screen: detectScreenWidth()
    }
  },

  created () {
    v = this
    $props = this.$props
    $set = (key, value) => {
      this.$set(this.$data, key, value);
    }

  },

  updated () {
    console.log('preview.updated', this.playlist)

  },
  mounted () {
		console.log('preview.mounted', this.playlist)
    //console.log($props.items)
  },

  methods: {
		openSearch () {
			$('#search-panel').addClass('active')
			window.scrollTo(0, 0)
			$('#search #query').focus()
		}
  },

  computed: {
  },

  components: {
  },

  props: {
		onPlaylistClick: {
				type: Function,
				default () {
					return ()=>{};
				}
		},
		onLogin: {
				type: Function,
				default () {
					return ()=>{};
				}
		}
  }
}
</script>

<style lang="stylus" scoped>
.menu-tooltip
  position: absolute;
  padding: 5px;
  margin: 10px;
  margin-left: 80px;
  border: 1px solid;
  min-width: 220px;
  text-align: center;
  border-radius: 5px;
  font-size: 32px;
  color:white;
  background-color: rgba(0,0,0,0.5);
#menu
  margin: 20px;
  background-color: #606060;

i.icon
	font-size: 46px;
	padding: 10px;
	cursor: pointer;
	margin-bottom: 10px;
	border-bottom: 5px solid #ccc;
	transition: .3s cubic-bezier(0.86, 0, 0.07, 1)
i.icon:hover
	color: white;

i.icon.playlist
	border-color: #fea400;
	color: #fea400;
i.icon.playlist:hover
	background-color: #fc8b00;
i.icon.playlist:before
	content: '\e962';

i.icon.search
	border-color: #298343;
	color: #298343;
i.icon.search:after
	content: '\e805';
i.icon.search:hover
	background-color: #13a93e;

i.icon.user
	border-color: #0b346f;
	color: #0b346f;
i.icon.user:after
	content: '\e61a';
i.icon.user:hover
	border-color: #37beff;
	color: #37beff;
	background-color: #0b346f;

#menu.xs
	border-top: 5px solid #ccc;
	padding-top: 10px;
	width: 100%;
	z-index: 10;
	margin: 0;
	position: fixed;
	bottom: 0px;
	padding-bottom: 5px;
#menu.xs i.icon
	border: 0px;
	font-size: 36px;

#menu.sm
	width: 80px;
	margin: 0px;
	height: 100%;
	top: 0;
	padding-top: 70px;
	z-index: 2;
	position: fixed;
	border-right: 5px solid #ccc;

#menu.sm i.icon
	display: block;
	border: 0px;

.overlay
	position: relative;
</style>
