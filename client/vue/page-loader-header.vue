<template lang="jade">
#page-loader-header.col-xs-offset-5(@click="click()", :class="{active: active}")
	i.icon.arrow
	| See more
</template>

<style lang="stylus" scoped>
#page-loader-header
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

#page-loader-header i.icon.arrow
	font-size: 84px;
	position: absolute;
	top: -10px;
	left: 55px;
	-webkit-transition: 1s cubic-bezier(.86, 0, .07, 1);
	-moz-transition: 1s cubic-bezier(.86, 0, .07, 1);
	-o-transition: 1s cubic-bezier(.86, 0, .07, 1);
	transition: 1s cubic-bezier(.86, 0, .07, 1);
#page-loader-header i.icon.arrow:after
	content: '\e6f6';

#page-loader-header.active i.icon.arrow
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
		console.log('TOP', 'destroy')

		unregister.off()
	},

	mounted () {
		console.log('TOP', 'mount')
		pass = 0
		this.active = false

		unregister = $(document).scroll(() => {
		  if(document.body.scrollTop === 0) {
		    console.log('TOP', pass);

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
							console.log('header', pass)
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
