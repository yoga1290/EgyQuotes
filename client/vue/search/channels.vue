<template lang="jade">
.col-xs-12.col-sm-6
	.title.col-xs-12
		i.icon(style="font-size: 48px;")
		| Channels
	.entity.col-xs-12(v-for="channel in channels", @click="selectChannel(channel.id)")
		| {{channel.name}}
</template>
<script>

var v = {}
var $set = function(key, value) {
}
////////////

var channelIds = []
function updateDTO() {
  v.$props.onChannelsChange(channelIds);
}


function selectChannel(channelId) {
  var i = channelIds.indexOf(channelId)

  if (i > -1) {
    channelIds.splice(i, 1)
  } else {
    channelIds.push(channelId)
  }
  updateDTO()
}


export default {
  data () {
    return {
    }
  },

  created () {
    v = this;
    $set = function(key, value) {
      v.$set(v.$data, key, value);
    }
  },

  methods: {
    selectChannel (id) {
      selectChannel(id)
    }
  },

  // https://vuejs.org/v2/guide/components.html#Prop-Validation
  props: {
      channels: {
          type: Array, //Function,
          default () {
            return '';
          }
      },
      onChannelsChange: {
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
i.icon
  font-size: 48px;
  margin-top: 0px;
  z-index: 5;
  position: relative;
  float: right;
i.icon:after
	content: '\e6e5';
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
