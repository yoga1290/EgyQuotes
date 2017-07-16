<template lang="jade">
.col-xs-12
  i.icon#author user
  input#author(:placeholder="translation.VIDEO.AUTHOR",name="author", v-model="authorName", @keyup="onAuthorNameChange(authorName)",required,ng-class="{'has-error': quoteForm.author.$invalid}")
  #author-list(v-if="suggestedAuthors.length && suggestedAuthors.length>0")
    .author(v-for="author in suggestedAuthors", @click="onSelectAuthor(author)") {{author.name}}
  {{suggestedAuthors.length}}
  #author-list(v-if="suggestedAuthors.length === 0 && authorName.length > 0")
    .author(@click="newAuthor(authorName)")
      i.icon.new-author
      | {{authorName}}
</template>

<script>
var PersonSvc = require('../../svc/PersonSvc.js')

var v = {}
var $props = {}
var $set = (k, v)=>{}

var lastReq = {xhr: {abort () {}}}
function onAuthorNameChange(authorName) {

  lastReq.xhr.abort()
  lastReq = PersonSvc.findByName(authorName)
    .success((response) => {
      //console.log(response)
      $set('suggestedAuthors', response)
    })
}

function newAuthor(authorName, callback) {
  PersonSvc.insert(authorName)
    .success((author) => {
      callback(author)
    })
}


module.exports = {
  data () {
    return {
      authorName: '',
      suggestedAuthors: [],
      translation: {
        VIDEO: {
          AUTHOR: 'Author',
          QUOTE: 'QUOTE',
          SAVE: 'SAVE'
        }
      }
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
    onSelectAuthor (author) {
      this.suggestedAuthors = []
      this.authorName = author.name
      this.onAuthorSelect(author)
    },

    onAuthorNameChange(authorName) {
      this.onAuthorSelect(null)
      onAuthorNameChange(authorName)
    },

    newAuthor (authorName) {
      newAuthor(authorName, this.onAuthorSelect)
    }
  },

  computed: {
  },

  components: {
  },

  props: {
      onAuthorSelect: {
          type: Function,
          default () {
            return ()=>{};
          }
      }
  }//*/
}
</script>

<style lang="stylus" scoped>
.col-xs-12, .col-sm-6
    padding: 0px;
i.icon#author
    position: absolute;
    margin-left: 5px;
    color: rgba(255, 255, 255, 0.65);
    font-size: 60px;

input#author
    width: 100%;
    border: 1px solid #ccc;
    background-color: transparent;
    color: white;
    border-radius: 5px;
    margin-bottom: 5px;
    margin-left: 5px;
    padding: 7px;
    text-align: center;
    font-size: 32px;

input#author:focus
    background-color: #ccc;
    color: black;
#author-list
    border: 1px solid #ccc;
    margin: 5px;
    padding: 5px;
    color: #ccc;
    border-radius: 5px;
    max-height: 200px;
    text-align: center;
    overflow-y: scroll;
    font-size: 20px;

#author-list .author
    color: #ccc;
    border-bottom: 1px solid white;
    cursor: pointer;

#author-list .author:hover
    color: black;
    background-color: #ccc;

i.icon.new-author:after
  content: '\e801'
</style>
