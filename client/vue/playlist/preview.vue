<template lang="jade">
.preview.col-xs-12
	quote(v-for="quote in quotes", :quote="quote", :click="onQuoteSelect")
</template>

<script>
import Quote from '../grid/quote/quote.vue'
import PlaylistSvc from '../svc/PlaylistSvc.js'
import QuoteSvc from '../svc/quoteSvc.js'

var v = {}
var $props = {}
var $set = (k, v)=>{}

function update(v, playlist) {
	if (playlist) {
		var quotes = [];
		playlist.quotes.forEach((quoteId) => {
			QuoteSvc.findById(quoteId).success((quote) => {
				quotes.push(quote)
				$set('quotes', quotes)
			})
		})
	}
}

export default {
  data () {
    return {
			quotes: []
    }
  },

  created () {
    v = this
    $props = this.$props
    $set = (key, value) => {
      this.$set(this.$data, key, value);
    }
		console.log('preview.created', this.playlist)

		if (this.$props.playlist) {
			update(this, this.$props.playlist)
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
  },

  computed: {
  },

  components: {
		Quote
  },

  props: {
		playlist: {
				type: Object,
				default () {
					return {};
				}
		},
		onQuoteSelect: {
				type: Function,
				default () {
					return ()=>{
						console.log('no preview.onQuoteSelect')
					};
				}
		}
  },
	watch: {
		// https://laracasts.com/discuss/channels/vue/vuejs-change-component-prop-from-outside
	  playlist: function (playlist, oldVal) {
			 update(this, playlist)
	  }
	}
}
</script>

<style lang="stylus" scoped>
/*.preview
	background-color: #474747;*/
</style>
