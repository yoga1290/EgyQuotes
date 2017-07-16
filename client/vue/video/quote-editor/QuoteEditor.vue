<template lang="jade">
form.col-xs-12(name="quoteForm")

  .vmenu.col-xs-12
    i.icon.btn-circle(@click="onDecreasePlaybackRate()") backwards
    i.icon.btn-circle(@click="onIncreasePlaybackRate()") forward
    i.icon.btn-circle(@click="stopVideo()") pause
  quote-timer(:onChange="onTimerChange",:endTimePlaceholder="endTimePlaceholder")

  author-selector(:onAuthorSelect="onSelectAuthor")

  .col-xs-12(style="padding:0px;")
    #edit-tip
    textarea#quote.col-xs-12(:placeholder="translation.VIDEO.QUOTE",name="quote", v-model="quoteText", ng-class="{'has-error': (quoteForm.quote.$invalid)}")
    i.icon.quote.right(style="position: absolute;position: absolute;margin-left: -45px;z-index: 5;color: rgba(98, 98, 98, 0.6);")
    i.icon.quote.left(style="margin-top: 70px;left: 0px;z-index: 5;color: rgba(98, 98, 98, 0.6);")
  .btn-box.col-xs-12.col-sm-3.gray(@click="save()", ng-disabled="quoteForm.$invalid")
    i.icon paperplane
    | {{translation.VIDEO.SAVE}}
</template>
<script>
import AuthorSelector from './selector-author.vue'
import QuoteTimer from './timer.vue'
var PersonSvc = require('../../svc/PersonSvc.js')
var QuoteSvc = require('../../svc/quoteSvc.js')

//var Player = require('./player.js')
var Player = {}

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

var start = 0
var end = 0

function onTimerChange(startTime, endTime) {
  if (endTime <= startTime) {
    endTime = 1<<20
  } else {
    start = startTime
    end = endTime
  }
  Player.playAt(startTime, endTime)
}

var selectedAuthor = {}

module.exports = {
  data () {
    return {
      quote: {
        video: {
          id: 'Ub43wDzqPjg'
        },
        airedTime: new Date().getTime(),
        quote: 'quote',
        person: {
          name: 'Author'
        }
      },
      endTimePlaceholder: '0',
      quoteText: '',
      author: {
        name: ''
      },
      translation: {
        VIDEO: {
          AUTHOR: 'Author',
          QUOTE: 'QUOTE',
          SAVE: 'SAVE'
        }
      },
      quotes: [],
      screen: detectScreenWidth()
    }
  },

  created () {
    v = this
    $props = this.$props
    $set = (key, value) => {
      this.$set(this.$data, key, value);
    }
    Player = this.player
    Player.onTimeChange((time) => {
      $set('endTimePlaceholder', parseInt(time/60) + ':' + parseInt(time%60))
    })
  },

  methods: {
    onTimerChange (startTime, endTime) {
      onTimerChange(startTime, endTime)
    },

    onSelectAuthor (author) {
      selectedAuthor = author
      //console.log('QuoteEditor.onSelectAuthor', author)
    },

    onDecreasePlaybackRate () {
      Player.decreasePlaybackRate()
    },
    onIncreasePlaybackRate () {
      Player.increasePlaybackRate()
    },
    stopVideo () {
      Player.stopVideo()
    },

    save () {
      Player.getCurrentTime((currentTime) => {
        Player.getCurrentVideoId((videoId) => {
          var quote = {
            videoId: videoId,
            start: start || 0,
            end: end || currentTime,
            quote: this.quoteText,
            personId: selectedAuthor
          }
          QuoteSvc.insert(quote)

        })
      })



    }
  },

  components: {
    QuoteTimer,
    AuthorSelector
  },

  props: {
      player: {
          type: Object,
          default () {
            return {};
          }
      }
  }//*/
}
</script>

<style lang="stylus" scoped>
#edit-tip
    position: relative;
    width: 0px;
    content: '';
    border-right: 20px solid transparent;
    border-bottom: 20px solid #ccc;
    margin-bottom: -3px;
    border-left: 20px solid transparent;

textarea#quote
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    border: none;
    margin-bottom: 15px;
    height: 144px;
    font-size: 32px;
    color: black;
    background-color: #cccccc;

i.quote.icon
  position: absolute;
  font-size: 56px;
i.quote.left.icon
  bottom: 10px;
i.quote.left.icon:after
  content: '\e6c2'

i.quote.right.icon
  top: 13px;
  right: 3px;
i.quote.right.icon:after
  content: '\e6c3'

.has-error
    border: 1px solid red;

.btn-box:hover, .btn-box.active
    color: white;
    background-color: #155374;

.btn-circle
    border: solid #848484 5px;
    color: #848484;
    cursor: pointer;
    transition: 0.3s cubic-bezier(0.86, 0, 0.07, 1);
    font-size: 42px;
    margin-left: 5px;
    padding: 10px;
    border-radius: 55px;
.btn-circle:hover
    border: solid #b5b5b5 5px;
    color: #b5b5b5;
.btn-box
    border: 1px solid #ccc;
    color: #ccc;
    border-radius: 5px;
    /*height: 34px;*/
    margin-bottom: 5px;
    margin-left: 5px;
    padding: 7px;
    text-align: center;
    /*width: 174px;*/
    min-width: 174px;
    cursor: pointer;
    transition: 0.3s cubic-bezier(0.86, 0, 0.07, 1);

.vmenu
  margin: 15px;
</style>
