<template lang="jade">
.timer
  .col-xs-12
    .col-sm-6.col-xs-12
      i.left.icon
      input(type="tel", autocomplete="off", name="startTime", v-model="startTime", placeholder="0", @keyup="onStartTimeChange(startTime)", ng-class="{'has-error': (quoteForm.startTime.$invalid)}", ng-pattern="[/d]{1-2}[:]+[/d]{2}")
    .col-sm-6.col-xs-12
      i.col-sm-offset-6.col-xs-offset-12.right.icon
      input(type="tel", autocomplete="off", name="endTime", v-model="endTime", :placeholder="endTimePlaceholder", @keyup="onEndTimeChange(endTime)", ng-class="{'has-error': (quoteForm.endTime.$invalid)}",ng-pattern="[/d]{1-2}[:]+[/d]{2}")
</template>
<script>

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


function formatTime(str) {

  if (str.length > 8) {
    str = str.split('')
    str.splice(0, str.length - 8)
    str = str.join('')
  }

  var zeros = [48, 1632, 1776, 2406]

  /*
  // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation
  // see http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
  var zero = {}
  var locales = ['ak','ar','ay','az','bal','bik','bnc','bua','chm','cr','del','den','din','doi','et','fa','ff','gba','gn','gon','grb','hai','hmn','ik','iu','jrb','kg','kln','kok','kpe','kr','ku','kv','lah','luy','lv','man','mg','mn','ms','mwr','ne','no','oj','om','or','ps','qu','raj','rom','sc','sh','sq','sw','syr','tmh','uz','yi','za','zap','zh','zza']
  locales.forEach(function(locale) {
    zero[ new Intl.NumberFormat(locale).format(0).charCodeAt(0) ] = true
  })
  //*/

  var charCodeToNumber = {}
  zeros.forEach((charCode) => {
    for(var i = 0; i<10; i++) {
      charCodeToNumber[charCode + i] = i + ''
    }
  })

  var result = '', sep = 0;
  str.split('').forEach((ch)=>{
    if (charCodeToNumber[ch.charCodeAt(0)]) {
      if (result.length>0 && (result.length - sep)%2 === 0) {
        result += ':'
        sep++
      }

      result += charCodeToNumber[ch.charCodeAt(0)]
    }
  })
  return result
}

function formattedStringToSeconds(formattedString) {
  formattedString = formattedString.split(':')
  var seconds = 0
  var w = 1
  for(var i = formattedString.length - 1; i>=0; i--) {
    seconds += parseInt(formattedString[i]) * w
    w *= 60
  }
  return seconds
}

export default {
  data () {
    return {
      startTime: '',
      endTime: '',
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
    //console.log('grid.updated', $props.items)
    //$set('screen', detectScreenWidth())
  },
  mounted () {
    //console.log($props.items)
  },

  methods: {
    onStartTimeChange (startTime) {
      startTime = formatTime(startTime)
      this.startTime = startTime
      this.onChange(formattedStringToSeconds(this.startTime), formattedStringToSeconds(this.endTime))
    },

    onEndTimeChange (endTime) {
      endTime = formatTime(endTime)
      this.endTime = endTime
      this.onChange(formattedStringToSeconds(this.startTime), formattedStringToSeconds(this.endTime))
    }
  },

  computed: {
  },

  components: {
  },

  props: {
      onChange: {
          type: Function,
          default () {
            return ()=>{};
          }
      },
      endTimePlaceholder: {
        type: String,
        default () {
          return '';
        }
      }
  }//*/
}
</script>

<style lang="stylus" scoped>
.col-xs-12, .col-sm-6
    padding: 0px;
.timer
    position: relative;
    margin-top: 10px;
    margin-left: 10px;

.timer i.btn-circle
    color: #ccc;
    border-color: #ccc;

.timer input
    border: 1px solid #ccc;
    background-color: transparent;
    color: white;
    border-radius: 5px;
    margin-bottom: 5px;
    margin-left: 5px;
    padding: 7px;
    text-align: center;
    font-size: 32px;
    /*width: 48.5%;*/
    z-index: 2;
    width: 100%;
    min-height: 50px;

.timer i.icon
    color: rgba(255, 255, 255, 0.65);
    font-size: 45px;
    margin-top: 8px;

.timer i.left.icon
    position: absolute;
    /*left: 20px;*/
    margin-left: 20px;
.timer i.left.icon:after
  content: '\e939'

.timer i.right.icon
    position: absolute;
    /*left: 48.5%;*/
    margin-left: 20px;
.timer i.right.icon:after
  content: '\e938'
</style>
