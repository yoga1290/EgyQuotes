var PersonSvc = require('../svc/PersonSvc.js')
var ChannelSvc = require('../svc/ChannelSvc.js')

// import {PersonSvc2, ChannelSvc2} from '../svc'
// console.log(PersonSvc2, ChannelSvc2)
var PeopleList = require('./people.vue')
var ChannelsList = require('./channels.vue')

// https://vuejs.org/v2/guide/events.html#Key-Modifiers
// https://vuejs.org/v2/guide/render-function.html#Event-amp-Key-Modifiers
function closeSearchOverlay() {
  $('#search-overlay').removeClass('visible')
}
function openSearchOverlay() {
  $('#search-overlay').addClass('visible')
}

function outerClick(e) {
  pass = true
  Array.from($(e.target).parents()).forEach((p)=>{
    if(p.id === 'search') {
      pass = false;
    }
    // console.log(p)
  });
  if (pass) {
    closeSearchOverlay()
  }
}
document.addEventListener('click', outerClick, true)
document.addEventListener('touchstart', outerClick, true)

var searchDTO = {
  page: 0,
  size:  30,
  tags:   [],
  channelIds: [],
  start: 0,
  end: new Date().getTime(),
  personIds: []
};

var v = this;
var $set = function(key, value) {
  //v.$set(v.$data, key, value);
}

function updateDTO() {
  // $set('selectedPeopleById', selectedPeopleById)
  // $set('selectedChannelsById', selectedChannelsById)
  v.$props.onQueryChange(searchDTO)
  $set('searchDTO', searchDTO)
}

function setPeople(personIds) {
  searchDTO.personIds = personIds
  updateDTO()
}

function setChannels(channelIds) {
  searchDTO.channelIds = channelIds
  updateDTO()
}

var lastPersonReq = {xhr: { abort () {} }}
var lastChannelReq = {xhr: { abort () {} }}
function query(str) {

  // cancel old requests
  lastPersonReq.xhr.abort()
  lastChannelReq.xhr.abort()

  lastPersonReq = PersonSvc.findByName(str)
  .success((people)=>{
    $set('people', people)
    var personById = {}
    people.forEach((person)=>{
      personById[person.id] = person
      console.log(person)
    })
    $set('personById', personById)
  })

  lastChannelReq = ChannelSvc.searchByName(str, 0, 10)
  .success((channels)=>{
      $set('channels', channels)
      var channelById = {}
      channels.forEach((channel)=>{
        channelById[channel.id] = channel
      })
      $set('channelById', channelById)
  })

  $('#search-overlay').addClass('visible')

}

function selectChannel(channelId) {
  var i = v.searchDTO.channelIds.indexOf(channelId)

  if (i > -1) {
    v.searchDTO.channelIds.splice(i, 1)
  }
}

function selectPerson(personId) {
  var i = v.searchDTO.personIds.indexOf(personId)

  if (i > -1) {
    v.searchDTO.personIds.splice(i, 1)
  }
}


module.exports = {
  data () {
    return {
      searchDTO: searchDTO,
      setPeople: setPeople,
      channelById: {},
      personById: {},
      field: '',
      translation: {
        SEARCH: {CHANNELS: 'channels'}
      },
      channels: [],
      people: []
    }
  },

  created () {
    v = this;
    $set = function(key, value) {
      v.$set(v.$data, key, value);
    }
  },

  methods: {
    onFocus() {
      console.log('onFocus')
      openSearchOverlay()
    },

    onKeypress(e) {

      console.log(e.target.value)
      query(e.target.value)

    },

    setPeople(personIds) {
      setPeople(personIds)
    },

    selectChannel (id) {
      selectChannel(id)
    },
    selectPerson (id) {
      selectPerson(id)
    },

    setChannels (id) {
      setChannels(id)
    },

    closeSearchOverlay () {
      closeSearchOverlay()
    },

  },

  // /*
  props: {
      channelIds: {
          type: String,//Object,
          default () {
            return '';
          }
      },
      personIds: {
          type: String,//Object,
          default () {
            return '';
          }
      },
      onQueryChange: {
          type: Function,
          default () {
            return '';
          }
      }
  },
  //*/

  components: {
    PeopleList,
    ChannelsList
  }
}
