<script>
module.exports = require('./search.js')
</script>

<template lang="jade">
#search-panel
	.overlay
	#search.stickable
		input#query(type="text", @click="onFocus()", v-on:focus="onFocus()", @keyup="onKeypress", @keyup.enter="closeSearchOverlay", v-model="field")
		i.icon(@click="onFocus()") search
		#search-overlay.animated.bounceInDown.col-xs-12.col-sm-8.col-sm-offset-2
			.badge(v-for="personId in searchDTO.personIds", @click="selectPerson(personId)")
				| {{selectedPersonById[personId] ? selectedPersonById[personId].name:''}}
				i.icon close
			.badge(v-for="channelId in searchDTO.channelIds", @click="selectChannel(channelId)")
				| {{selectedChannelById[channelId] ? selectedChannelById[channelId].name:''}}
				i.icon close
			#search-result.col-xs-12
				channelsList(:channels="channels", :onChannelsChange="setChannels")
				peopleList(:people="people", :onPeopleChange="setPeople")
</template>

<style lang="stylus" scoped>
#search
  z-index: 9;
  width: 100%;
#search input
  text-align: center;
  font-size: 32px;
  /*border: none;*/
  border: 1px solid #b2b2b2;
  border-radius: 5px;
  position: relative;
  z-index: 9;
  background-color: rgba(255, 255, 255, 0);
  width:100%;

#search-overlay::before
  position: relative;
  width: 0;
  content: '';
  border-right: 20px solid transparent;
  border-bottom: 20px solid #ccc;
  /* margin-bottom: -3px; */
  border-left: 20px solid transparent;
  border-radius: 5px;
  top: -19px;
  float: right;
#search-overlay
  z-index: 9;
  display: none;
  margin-top: 15px;
  background: #b2b2b2; //rgba(0, 0, 0, 0.7);
  border: 1px solid white;
  position: absolute;
  border-radius: 10px;
  -moz-box-shadow: 0 0 15px #b2b2b2;
  -webkit-box-shadow: 0 0 15px #b2b2b2;
  box-shadow: 0 0 15px #b2b2b2;

#search-panel.active #search-overlay
  display: block;

#search input
  background-color: rgba(255, 255, 255, 0.5);

#search i.icon
  font-size: 48px;
  margin-top: -49px;
  z-index: 5;
  position: relative;
  float: right;
  margin-right: 20px;
  cursor: pointer;

#search-overlay .badge
  border-radius: 20px;
  margin-top: 10px;
  margin-left: 5px;
  font-size: 24px;
  cursor: pointer;
  background-color: #777;

#search-overlay .badge i.icon
  margin-left: 5px;
  margin-top: 0px;
  font-size: 28px;
  border-left: 1px solid white;

#search-panel
	/*width: 80px;*/
	display: none;
#search-panel.active
	width: 100%;
	display: block;
</style>
