<template lang="jade">
#page-loader-footer.col-xs-offset-5
	i.icon.arrow
	| See more
</template>

<style lang="stylus" scoped>
#page-loader-footer
	padding: 16px 30px;
	position: relative;
	text-decoration: none !important;
	font-size: 32px;
	width: 200px;
	display: inline-block;
	background-color: #333;
	color: #606060;
	border-radius: 20px;
	padding-top: 60px;
	margin-bottom: 70px;

#page-loader-footer i.icon.arrow
	font-size: 84px;
	position: absolute;
	top: -15px;
	left: 56px;
#page-loader-footer i.icon.arrow:after
	content: '\e6f0';
</style>

<script>

module.exports = {
  data () {
    return {
    }
  },

  created () {
  },

	mounted () {

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
