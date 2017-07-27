<template lang="jade">
#page-loader-footer.col-xs-offset-5(@click="click()", :class="{active: active}")
	i.icon.arrow
	| See more
</template>

<style lang="stylus" scoped>
#page-loader-footer
	padding: 16px 30px;
	position: relative;
	text-decoration: none !important;
	font-size: 32px;
	display: inline-block;
	background-color: #606060;
	color: #333;
	border-radius: 20px;
	padding-top: 60px;
	margin-bottom: 70px;
	cursor: pointer;

#page-loader-footer i.icon.arrow
	font-size: 84px;
	position: absolute;
	top: -15px;
	left: 56px;
	-webkit-transition: 1s cubic-bezier(.86, 0, .07, 1);
	-moz-transition: 1s cubic-bezier(.86, 0, .07, 1);
	-o-transition: 1s cubic-bezier(.86, 0, .07, 1);
	transition: 1s cubic-bezier(.86, 0, .07, 1);
#page-loader-footer i.icon.arrow:after
	content: '\e6f0';

#page-loader-footer.active i.icon.arrow
	color: #ccc;
	transform: rotate(180deg);
	-o-transform: rotate(180deg);
	-moz-transform: rotate(180deg);
	-webkit-transform: rotate(180deg);
</style>

<script>

let unregister
let pass = 0

export default {
  data () {
    return {
			active: false
    }
  },

  created () {

  },

	beforeDestroy () {
		console.log('BOTTOM', 'destroy')
		unregister.off()
	},

	mounted () {
		pass = 0
		this.active = false
		console.log('BOTTOM', 'mount')

		unregister = $(document).scroll(() => {
		  if( document.body.scrollTop + window.screen.height - document.body.scrollHeight > 100) {
				console.log('BOTTOM', this.enable)
				if (this.enable) {
					if (pass < 1) {
						this.active = true
						pass = 1
						setTimeout(()=>{
							pass = 2
						}, 1000)
					} else if (pass >= 2) {
						this.onload(()=>{
							this.active = false
							pass = 0
						})
					}
				} else {
					pass = 0
					this.active = false
				}


		  }
		});
	},

  methods: {
		click() {
			this.onload(()=>{
				this.active = false
				pass = 0
			})
		}
  },

  // https://vuejs.org/v2/guide/components.html#Prop-Validation
  props: {
		onload: {
				type: Function,
				default () {
					return ()=>{};
				}
		},
		enable: {
				type: Boolean,
				default () {
					return true;
				}
		}
  },

  components: {
  }
}
</script>
