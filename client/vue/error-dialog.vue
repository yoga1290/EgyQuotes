<template lang="jade">
#error-dialog.animated.fadeInDown.col-xs-12
	.error.c0
		i.icon.plug
		| Connection lost
	.error.c401(@click="onLogin()")
		i.icon.key
		| unauthorized
	i.icon.exit(@click="exit()")
</template>

<style lang="stylus" scoped>
#error-dialog
	display: none;
	position: fixed;
	left: 0px;
	width: 100%;
	height: 54px;
	background-color: red;
	color:  #ccc; /*#606060;*/
	font-size: 32px;
	z-index: 10;

#error-dialog.active
	display: block;

#error-dialog i.icon.exit
	font-size: 54px;
	right: 0px;
	cursor: pointer;
	top:0px;
	position: absolute;
#error-dialog i.icon.exit:after
	content: '\e7ad';

#error-dialog .error
	display: none;
#error-dialog .error.active
	display: block;

#error-dialog .error.c0 i.icon
	font-size: 54px;
	float: left;
#error-dialog .error.c0 i.icon:after
	content: '\e66a';

#error-dialog .error.c401
	cursor: pointer;
#error-dialog .error.c401 i.icon
	font-size: 54px;
	float: left;
#error-dialog .error.c401 i.icon:after
	content: '\e6ab'


</style>

<script>

export default {
  methods: {
		exit() {
			$('#error-dialog').removeClass('active')
		}
  },
  // https://vuejs.org/v2/guide/components.html#Prop-Validation
  props: {
		onLogin: {
				type: Function,
				default () {
					return ()=>{}
				}
		}
  }
}
</script>
