<script>
// import quoteMenu from './quote/menu.vue'
var quoteSvc =  require('../../svc/quoteSvc.js')

var v = {}
var $set = (k, v)=>{}
var init = {
  name: '',
  thumbnail: '',
  airedTime: '',
  quote: '',
  logo: '',
  person: {
    name: ''
  }
}

function getThumbnailAndLogo(quote) {
  var d = new Date(quote.airedTime)
  d = d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear()
  $set('date', d)

  quoteSvc.getVideoData(quote.video.id)
  .success(function(response) {
    $set('style', 'background-image: url("' + response.thumbnail + '");')
    quoteSvc.getChannelData(response.channelId)
    .success(function(data) {
        $set('logo', data.logo)
    });
  });
}

module.exports = {
  data () {
    return {
      date: '',
      logo: '',
      style: ''
    }
  },

  methods: {
    onClick () {

    }
  },

  created () {

      v = this;
      $set = function(key, value) {
        v.$set(v.$data, key, value)
      }

    //  getThumbnailAndLogo(v.$props.quote)
  },

  mounted () {
    console.log('mounted')
  //  getThumbnailAndLogo(v.$props.quote)
  },

  updated () {
    console.log('updated')
//    getThumbnailAndLogo(v.$props.quote)
    var quote = v.$props.quote
    var d = new Date(quote.airedTime)
    d = d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear()
    $set('date', d)

    quoteSvc.getVideoData(quote.video.id)
    .success(function(response) {
      $set('style', 'background-image: url("' + response.thumbnail + '");')
      quoteSvc.getChannelData(response.channelId)
      .success(function(data) {
          $set('logo', data.logo)
      });
    });
  },

  components: {
  },

  props: {
      quote: {
          type: Object,
          default () {
            return init;
          }
      }
  }
}
</script>

<template lang="jade">
.quote.quotemenu.fadeInUp.animated.clickable(v-if="quote", :style="style", @click="onClick(quote)")
  .date {{date}}
  .author-name {{quote.person.name}}
  i.material-icons.quote.right format_quote
  p.body {{quote.quote}}
  i.material-icons.quote.left format_quote
  img.logo.img-circle.col-xs-3(:src="logo")
</template>

<style lang="stylus" scoped>
.quote
     background-position-x: 50%;
     background-position-y: 50%;

     position: relative;
     border-bottom: 3px solid white;
     font-size: 32px;
     color: rgb(202, 202, 202);
     background-color: #fff;
     min-height: 80px;
     cursor: pointer;

.quote.panel
    margin-bottom: 0px;

.quote.body:hover
    border-color: black;
    box-shadow: 2px 0px  10px black;
    -moz-box-shadow: 2px 0px  10px black;
    -webkit-box-shadow: 2px 0px  10px black;

.quote.material-icons.right
    font-size: 56px;
    float: right;
    right: 0px;
    top: -13px;
.quote.material-icons.left
  transform: rotate(180deg);
  ms-transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
  font-size: 56px;
  float: left;
  margin-top: -66px;
.quote.material-icons
    border: none;
    position: absolute;
    z-index: 1;
    background-color: transparent;
.quote.material-icons:hover
    border: none;
    position: absolute;
    z-index: 1;
    background: transparent !important;

.quote .body
    color: black;
    background-color: rgba(240, 240, 240, 0.5);
    z-index: 2;
    position: relative;

.quote:hover
    color: white;
    background: rgb(96, 96, 96) !important;

.quote .logo
    position: absolute;
    bottom: 10px;
    right: 0px;
    z-index: 0;
    max-width: 100px;

.date
  font-size: 18px;

</style>
