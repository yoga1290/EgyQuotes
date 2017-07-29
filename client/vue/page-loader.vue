<template lang="jade">
#page-loader
	.overlay
	i.animated.icon signal
</template>

<style lang="stylus" scoped>
#page-loader
	visibility: hidden;
#page-loader.active
	visibility: visible;

#page-loader
	text-align: center;

#page-loader > i.icon
	font-size: 200px;
	-webkit-animation: fadeInUp 1s ease;
	animation: fadeInUp 1s ease;
	-webkit-animation-iteration-count: infinite;
	animation-iteration-count: infinite;
	position: fixed;
	z-index: 10;
	top: 30%;
	height: 100%;
	left: 0px;
	width: 100%;
	alignment-baseline: central;
	color: white;

#page-loader .overlay
	background-color: rgba(0,0,0,0.6);
	top: 0px;
	left: 0px;
	position: fixed;
	width: 100%;
	height: 100%;
	z-index: 10;
</style>

<script>

export default {
  data () {
    return {
    }
  },

  created () {
  },

  methods: {
  },

  // https://vuejs.org/v2/guide/components.html#Prop-Validation
  props: {
  },

  components: {
  }
}
</script>
