import PersonSvc from '../svc/PersonSvc.js'
import ChannelSvc from '../svc/ChannelSvc.js'
// import {PersonSvc2, ChannelSvc2} from '../svc'
// //console.log(PersonSvc2, ChannelSvc2)
import PeopleList from './people.vue'
import ChannelsList from './channels.vue'

// https://vuejs.org/v2/guide/events.html#Key-Modifiers
// https://vuejs.org/v2/guide/render-function.html#Event-amp-Key-Modifiers
function closeSearchOverlay() {
  $('#search-panel').removeClass('active')
}
function openSearchOverlay() {
  $('#search-panel').addClass('active')
}

function outerClick(e) {
  let pass = true
  Array.from($(e.target).parents()).forEach((p)=>{
    if(p.id === 'search') {
      pass = false;
    }
    // //console.log(p)
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

// people list callback
function setPeople(personIds) {
  searchDTO.personIds = personIds
  personIds.forEach((personId) => {
    selectedPersonById[personId] = personById[personId]
  })
  $set('selectedPersonById', selectedPersonById)
  updateDTO()
}

// channel list callback
function setChannels(channelIds) {
  searchDTO.channelIds = channelIds
  channelIds.forEach((channelId) => {
    selectedChannelById[channelId] = channelById[channelId]
  })
  $set('selectedChannelById', selectedChannelById)
  updateDTO()
}

var lastPersonReq = {xhr: { abort () {} }}
var lastChannelReq = {xhr: { abort () {} }}
var channelById = {}
var personById = {}
function query(v, str) {

  // cancel old requests
  lastPersonReq.xhr.abort()
  lastChannelReq.xhr.abort()

  lastPersonReq = PersonSvc.findByName(str)
  .success((people)=>{
    v.$set(v.$data, 'people', people)
    personById = {} //TODO: unless it's selected
    people.forEach((person)=>{
      personById[person.id] = person
      //console.log(person)
    })
  })

  lastChannelReq = ChannelSvc.searchByName(str, 0, 10)
  .success((channels)=>{
      v.$set(v.$data, 'channels', channels)
      channelById = {} //TODO: unless it's selected
      channels.forEach((channel)=>{
        channelById[channel.id] = channel
      })
  })

  $('#search-overlay').addClass('visible')

}

var selectedChannelById = {}
function selectChannel(v, channelId) {
  var i = v.searchDTO.channelIds.indexOf(channelId)
  selectedChannelById[channelId] = channelById[channelId]

  if (i > -1) {
    v.searchDTO.channelIds.splice(i, 1)
    delete selectedChannelById[channelId]
  }
  v.$set(v.$data, 'selectedChannelById', selectedChannelById)
}

var selectedPersonById = {}
function selectPerson(v, personId) {
  var i = v.searchDTO.personIds.indexOf(personId)
  // console.log(personById[personId])
  selectedPersonById[personId] = personById[personId]

  if (i > -1) {
    v.searchDTO.personIds.splice(i, 1)
    delete selectedPersonById[personId]
  }
  // console.log(selectedPersonById, v.selectedPersonById)
  v.$set(v.$data, 'selectedPersonById', selectedPersonById)
}


export default {
  data () {
    return {
      searchDTO: searchDTO,
      //setPeople: setPeople,
      selectedChannelById: {},
      selectedPersonById: {},
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
      //console.log('onFocus')
      openSearchOverlay()
    },

    onKeypress(e) {

      //console.log(e.target.value)
      var videoId = e.target.value.match(/(?:v\=)+([^&,^?]*)|(?:youtu\.be\/)+([^&,^?]*)|(?:channel\/)([^&,^?]*)/);
      if(videoId !== null) {
        var i = 1;
        if(videoId[i]===undefined) i++;
        if(videoId[i]!==undefined)  {
          closeSearchOverlay()
          e.target.value = ''
          this.onYoutubeVideoIdDetected(videoId[i])
        }
      } else {
        query(this, e.target.value)
      }

    },

    setPeople(personIds) {
      setPeople(personIds)
    },

    selectChannel (id) {
      selectChannel(this, id)
    },
    selectPerson (id) {
      selectPerson(this, id)
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
      },
      onYoutubeVideoIdDetected: {
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
