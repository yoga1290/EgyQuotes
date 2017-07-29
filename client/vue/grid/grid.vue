<template lang="jade">
#grid.col-md-11.col-sm-9.col-xs-12.section
	.col-xs-12(:class="{noscroll: show}")
		.hidden-xs.hidden-sm(v-if="screen.other")
			.col-1.col-md-3.clickable
				grid-quote(v-for="quote, $index in items", v-if="$index%4==0", :quote="quote", :click="onQuoteSelect")
			.col-2.col-md-3.clickable
				grid-quote(v-for="quote, $index in items", v-if="$index%4==1", :quote="quote", :click="onQuoteSelect")
			.col-3.col-md-3.clickable
				grid-quote(v-for="quote, $index in items", v-if="$index%4==2", :quote="quote", :click="onQuoteSelect")
			.col-4.col-md-3.clickable
				grid-quote(v-for="quote, $index in items", v-if="$index%4==3", :quote="quote", :click="onQuoteSelect")
		.visible-sm(v-if="screen.sm")
			.col-1.col-sm-6.clickable
				grid-quote(v-for="quote, $index in items", v-if="$index%2==0", :quote="quote", :click="onQuoteSelect")
			.col-2.col-sm-6.clickable
				grid-quote(v-for="quote, $index in items", v-if="$index%2==1", :quote="quote", :click="onQuoteSelect")
		.visible-xs.col-xs-12.clickable(v-if="screen.xs")
			grid-quote(v-for="quote, $index in items", :quote="quote", :click="onQuoteSelect")
</template>

<script>
import gridQuote from './quote/gridQuote.vue'
//import YtVideo from '../video/video.vue'
// 		yt-video(v-if="show", :quote="selectedQuote", :close="closeVideo")
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
			show: false,
			// selectedQuote: undefined,
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
    //console.log('grid.updated', $props.items)
    //$set('screen', detectScreenWidth())
  },
  mounted () {
    //console.log($props.items)
  },

  methods: {
/*
		onQuoteSelect (quote) {
			//console.log('grid', quote)
			this.$set(this.$data, 'selectedQuote', quote)
			this.$set(this.$data, 'show', true)
			$set('show', true)
		},//*/

		/*closeVideo () {
			//console.log('grid')
			$set('show', false)
		}//*/
  },

  computed: {
  },

  components: {
		//YtVideo,
    gridQuote
  },

  props: {
      items: {
          type: Array,
          default () {
            return [];
          }
      },
      onQuoteSelect: {
          type: Function,
          default () {
            return ()=>{};
          }
      }//*/
  }//*/
}
</script>

<style lang="stylus" scoped>
.title
  broder-bottom: 1px solid gray;
  margin-bottom: 5px;
input
  font-size: 24px;
  height: 64px;
  margin: 5px;
.well
  margin-top: 70px;
button#start
  font-size: 24px;
  float: right;

.hidden-xs.hidden-sm,
.hidden-xs.hidden-sm *,
.visible-sm,
.visible-sm *,
.visible-xs
  padding:0px;
  border-left: 3px solid #ccc; /*#606060;*/

#grid, #grid *
  padding: 0px;

#grid .col-xs-12 .hidden-xs
	margin-left: 70px;
#grid .col-xs-12 .visible-sm
	margin-left: 70px;

.noscroll
	/*position: fixed;*/

</style>
