<template lang="jade">
.col-xs-12.col-sm-6
	.title.col-xs-12
		i.material-icons(style="font-size: 48px;") face
		| YOYO
	.entity.col-xs-12(v-for="person in people", @click="selectPerson(person.id)")
		| {{person.name}}
</template>
<script>

var v = {}
var $set = function(key, value) {
}
////////////

var selectedPeopleById = {}
var personIds = []
function updateDTO() {
  v.$props.onPeopleChange(personIds);
}


function selectPerson(personId) {
  var i = personIds.indexOf(personId)

  if (i > -1) {
    personIds.splice(i, 1)
  } else {
    personIds.push(personId)
  }
  updateDTO()
}


module.exports = {
  data () {
    return {
      selectedPeopleById: {}
    }
  },

  created () {
    v = this;
    $set = function(key, value) {
      v.$set(v.$data, key, value);
    }
  },

  methods: {
    selectPerson (id) {
      selectPerson(id)
    }
  },

  // https://vuejs.org/v2/guide/components.html#Prop-Validation
  props: {
      people: {
          type: Array, //Function,
          default () {
            return '';
          }
      },
      onPeopleChange: {
          type: Function,
          default () {
            return '';
          }
      },
  },

  components: {
  }
}
</script>

<style lang="stylus" scoped>
i.material-icons
  font-size: 48px;
  margin-top: 0px;
  z-index: 5;
  position: relative;
  float: right;

.title
  border-bottom: 5px solid white;
  font-size: 32px;
  color: white;

.entity
  font-size: 24px;
  color: white;
  cursor: pointer;
  border-left: 5px solid;

.entity:hover
  border-bottom: 1px solid;
</style>
