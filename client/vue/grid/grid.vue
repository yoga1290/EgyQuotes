<script>
import gridQuote from './quote/gridQuote.vue'

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

module.exports = {
  data () {
    return {
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

  updated () {
    console.log('grid.updated', $props.items)
    $set('screen', detectScreenWidth())
  },
  mounted () {
    console.log($props.items)
  },

  methods: {
  },

  computed: {
  },

  components: {
    gridQuote
  },

  props: {
      items: {
          type: Array,
          default () {
            return [];
          }
      }
  }//*/
}
</script>

<template lang="jade">
.col-md-11.col-sm-9.col-xs-12.section(style="padding:0px;")
	#quoteLoader.col-sm-offset-1
		{{screen}}
		.hidden-xs.hidden-sm(v-if="screen.other")
			.col-md-3.clickable
				grid-quote(v-for="quote, $index in items", v-if="$index%4==0", :quote="quote")
			.col-md-3.clickable
				grid-quote(v-for="quote, $index in items", v-if="$index%4==1", :quote="quote")
			.col-md-3.clickable
				grid-quote(v-for="quote, $index in items", v-if="$index%4==2", :quote="quote")
			.col-md-3.clickable
				grid-quote(v-for="quote, $index in items", v-if="$index%4==3", :quote="quote")
		.visible-sm(v-if="screen.sm")
			.col-xs-6.clickable
				grid-quote(v-for="quote, $index in items", v-if="$index%2==0", :quote="quote")
			.col-xs-6.clickable
				grid-quote(v-for="quote, $index in items", v-if="$index%2==1", :quote="quote")
		.visible-xs.col-xs-12.clickable(v-if="screen.xs")
			grid-quote(v-for="quote, $index in items", :quote="quote")
</template>

<style lang="stylus" scoped>
#map
  z-index: 2;
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
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
  border-left: 3px solid white;
</style>
