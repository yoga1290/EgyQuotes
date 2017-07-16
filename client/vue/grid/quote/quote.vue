<template lang="jade">
.quote.quotemenu.fadeInUp.animated.clickable(v-if="quote", :style="{backgroundImage: thumbnail}", :class="{active: isActive}", @click="click(quote)")
  .date {{date}}
  .author-name(v-if="quote.person") {{quote.person.name}}
  i.icon.quote.right
  p.body {{quote.quote}}
  i.icon.quote.left
  img.logo.img-circle.col-xs-3(:src="logo")
</template>

<script>
// import quoteMenu from './quote/menu.vue'

var quoteSvc =  require('../../svc/quoteSvc.js')

var v = {}
var $set = (k, v)=>{}
var init = {
  name: '',
  airedTime: '',
  quote: '',
  person: {
    name: ''
  }
}

function getThumbnailAndLogo(v, quote) {
  var d = new Date(quote.airedTime)
  d = d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear()
  v.$set(v.$data, 'date', d)

  quoteSvc.getVideoData(quote.video.id)
  .success(function(response) {
    v.$set(v.$data, 'thumbnail', 'url("'+ response.thumbnail + '")' )
    quoteSvc.getChannelData(response.channelId)
    .success(function(data) {
        v.$set(v.$data, 'logo', data.logo)
    });
  });
}

module.exports = {
  data () {
    return {
      date: '',
      logo: '',
      // https://vuejs.org/v2/guide/class-and-style.html#Object-Syntax-1
      thumbnail: ''
    }
  },

  methods: {
  },

  created () {

      v = this;
      $set = function(key, value) {
        v.$set(v.$data, key, value)
      }

    if (v.$props.quote)
      getThumbnailAndLogo(this, v.$props.quote)
  },

  mounted () {
    //console.log('mounted')
    //getThumbnailAndLogo(this, this.$props.quote)
  },

  updated () {
    //console.log('updated', this.$props.quote)
    if (v.$props.quote)
      getThumbnailAndLogo(this, this.$props.quote)
  },

  components: {
  },

  props: {
      quote: {
          type: Object,
          default () {
            return init;
          }
      },
      click: {
          type: Function,
          default () {
            return ()=>{};
          }
      },
      isActive: {
          type: Boolean,
          default () {
            return false;
          }
      }
  }
}
</script>

<style lang="stylus" scoped>
.quote
     background-position-x: 50%;
     background-position-y: 50%;

     position: relative;
     border-bottom: 3px solid #606060;
     font-size: 32px;
     color: rgb(202, 202, 202);
     background-color: #fff;
     min-height: 80px;
     cursor: pointer;

     transition: 0.5s cubic-bezier(0.27, 0.25, 1, 1.51);

.quote.panel
    margin-bottom: 0px;

.quote.body:hover
    border-color: black;
    box-shadow: 2px 0px  10px black;
    -moz-box-shadow: 2px 0px  10px black;
    -webkit-box-shadow: 2px 0px  10px black;
.quote:hover, .active.quote
    color: white;
    background: rgb(96, 96, 96) !important;
.quote .icon:hover, .active.quote .icon
    border: none;
    position: absolute;
    z-index: 1;
    background: transparent !important;

.quote.icon.right
    float: right;
    right: 0px;
    margin-top: -26px;
.quote.icon.right:after
  content: '\e6c3'
.quote.icon.left
  /*transform: rotate(180deg);
  ms-transform: rotate(180deg);
  -webkit-transform: rotate(180deg);*/
  float: left;
  margin-top: -36px;
.quote.icon.left:after
  content: '\e6c2'
.quote.icon
    border: none;
    position: absolute;
    z-index: 1;
    font-size: 36px;
    background-color: transparent;

.quote .body
    color: black;
    background-color: rgba(240, 240, 240, 0.5);
    z-index: 2;
    position: relative;


.quote .logo
    position: absolute;
    bottom: 10px;
    right: 0px;
    z-index: 0;
    max-width: 100px;

.date
  font-size: 18px;

</style>
