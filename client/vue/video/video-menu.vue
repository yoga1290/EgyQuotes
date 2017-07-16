<template lang="jade">
.menu.col-md-1
  i.clickable.col-md-12.icon(@click="onQuoteEditor", ng-class="{'open':showEdit}") pencil
  i.clickable.col-md-12.icon.queue(@click="onAddToPlaylist", v-if="quote")
  i.clickable.close.icon.col-md-12(@click="close()") close
</template>

<script>
//import quote from '../grid/quote/gridQuote.vue'

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


module.exports = {
  data () {
    return {
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
  },

  computed: {
  },

  components: {
  },

  props: {
      quote: {
        type: Object,
        default () {
          return {
            airedTime: new Date().getTime(),
            quote: 'quote',
            person: {
              name: 'Author'
            }
          };
        }
      },
      onQuoteEditor: {
        type: Function,
        default () {
          return ()=>{};
        }
      },
      close: {
        type: Function,
        default () {
          return ()=>{};
        }
      },
      onAddToPlaylist: {
        type: Function,
        default () {
          return ()=>{};
        }
      }, //*/
      items: {
          type: Array,
          default () {
            return [];
          }
      }
  }//*/
}
</script>

<style lang="stylus" scoped>
.menu
    background-color: #474747;
    padding: 0px;
.clickable
  color: #b2b2b2;
.clickable:hover, .clickable.active
  color: #606060;
i.close
  float: right;
  right: 0px;
  margin-right: 0px;
.icon
    font-size: 62px;
    margin-right: 20px;
    cursor: pointer;
    transition: 0.3s cubic-bezier(0.86, 0, 0.07, 1);


.edit.btn-circle.material-icons
    font-size:62px;
    border-radius: 35px;
    border: solid green 5px;
    background: #cccccc;
    color: rgb(0, 188, 0);
/*    margin: 15px;*/

.edit.btn-circle.material-icons:hover
    background: #cccccc;
    color: green;

.favorites.btn-circle.material-icons
    border-color: rgb(254, 164, 0);
    color: rgb(254, 164, 0);
    font-size: 64px;

.favorites.btn-circle.material-icons:hover
    background-color: rgb(252, 139, 0);
    color: white;

.watch_later.btn-circle.material-icons
    border-color: rgb(41, 131, 67);
    color: rgb(41, 131, 67);

.watch_later.btn-circle.material-icons:hover
    background-color: rgb(19, 169, 62);
    color: white;
i.icon.queue:after
  content: '\e92e'
</style>
