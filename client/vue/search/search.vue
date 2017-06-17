<script>
module.exports = require('./search.js')
</script>

<template lang="jade">
#search-panel
	.overlay
	#search.stickable
		input#query(type="text", @click="onFocus()", v-on:focus="onFocus()", @keyup="onKeypress", @keyup.enter="closeSearchOverlay", v-model="field", ng-keyup="query();", placeholder="search")
		i.material-icons search
		#search-overlay.animated.bounceInDown.col-xs-12.col-sm-8.col-sm-offset-2
			.badge(v-for="personId in searchDTO.personIds", @click="selectPerson(personId)") {{personById[personId].name}}
			.badge(v-for="channelId in searchDTO.channelIds", @click="selectChannel(channelId)") {{channelById[channelId].name}}
			#search-result.col-xs-12
				channelsList(:channels="channels", :onChannelsChange="setChannels")
				peopleList(:people="people", :onPeopleChange="setPeople")
</template>

<style lang="stylus" scoped>
#search
  z-index: 3;
  width: 100%;
#search input
  text-align: center;
  font-size: 32px;
  /*border: none;*/
  border: 1px solid #b2b2b2;
  border-radius: 5px;
  position: relative;
  background-color: rgba(255, 255, 255, 0.5);
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
  z-index: 3;
  visibility: hidden;
  margin-top: 15px;
  background: #b2b2b2; //rgba(0, 0, 0, 0.7);
  border: 1px solid white;
  position: absolute;
  border-radius: 10px;
  -moz-box-shadow: 0 0 15px #b2b2b2;
  -webkit-box-shadow: 0 0 15px #b2b2b2;
  box-shadow: 0 0 15px #b2b2b2;

#search-overlay.visible
  visibility: visible;

#search input:focus,
#search input:focus + i.material-icons
  /* position: fixed !important;
  top: 0px !important;
  left: 0px !important; */

#search input:focus
  /* background-color: white !important; */

#search i.material-icons
  font-size: 48px;
  margin-top: -45px;
  z-index: 5;
  position: relative;
  float: right;

#search-overlay .badge
  border-radius: 20px;
  margin-top: 10px;
  margin-left: 5px;
  font-size: 24px;
  cursor: pointer;
  background-color: #777;
</style>
