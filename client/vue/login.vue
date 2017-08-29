<template lang="jade">
#login
  .login-panel.col-xs-12.col-sm-8.col-sm-offset-2
      .col-xs-12.absolute
        i.icon.exit(@click="exit()")
      #key.col-xs-12.col-sm-3.col-sm-offset-5
        i.icon
      #expire.col-xs-12.col-sm-offset-5.col-sm-3
        i.icon
        | {{expire}}
      #social.col-xs-12.col-sm-offset-4
        i.icon.facebook(@click="facebook()")
      #email.col-xs-12.col-sm-8.col-sm-offset-2
        i.icon.email at
        input.email(type="text", v-model="mail", @keyup.enter="email()")
</template>

<script>
import CONFIG from 'configuration'

export default {
  data () {
    return {
      expire: '00:00',
      mail: ''
    }
  },

  created () {
    //TODO: refactor
    let access_token = window.localStorage.getItem('access_token')
    if (access_token) {
      let exp = JSON.parse(atob(access_token.split('.')[1])).exp * 1000 //JWT
      if (new Date().getTime() > exp) return

      let date = new Date(exp)
      let hours = ((date.getHours() + 100) +'').substring(1, 3)
      let minutes = ((date.getMinutes() + 100) +'').substring(1, 3)
      this.expire = hours + ':' + minutes
    }
  },

  methods: {
    exit () {
      $('#login').removeClass('active')
      this.close()
    },
    facebook() {
      window.location.href = CONFIG.OAuth.facebook.login;
    },
    email() {
      window.location.href = 'https://videoquotes.herokuapp.com/OAuth/email?email=' + encodeURIComponent(this.mail);
    }
  },

  props: {
      close: {
          type: Function,
          default () {
            return ()=>{}
          }
      }
  }
}
</script>

<style lang="stylus" scoped>
#login
  position: absolute;
  display: none;
  z-index: 2;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  color: #ccc;
  background-color: rgba(71, 71, 71, 0.9);
#login.active
  display: block;

#login .login-panel
  position: relative;
  padding-bottom: 20px;
  margin-top: 70px;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #474747;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
  box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
#login .login-panel .col-xs-12.absolute
  position: absolute;
#login .login-panel .col-xs-12.absolute i.icon.exit
  position: relative;

i.icon.exit
  font-size: 32px;
  float: right;
  color: #ccc;
  cursor: pointer;
i.icon.exit:after
  content: 'close'

#key
  padding-top: 32px;
  padding-bottom: 32px;
#key i.icon
  font-size: 52px;
  border: 5px solid #ccc;
  border-radius: 50px;
  padding: 12px;
  left: -24px;
#key i.icon:after
  content: '\e6ab'

#social
  padding-bottom: 10px;

#email
  position: relative;
  left: 10px;
#email i.icon
  position: absolute;
  font-size: 32px;
  margin: 5px;
  left: -24px;
#email input
  width: 100%;
  font-size: 24px;
  border: 2px solid #ccc;
  background-color: #333;

#expire
  font-size: 32px;
#expire i.icon
  font-size: 24px;
#expire i.icon:after
  content: '\e938'

i.icon.facebook
  font-size: 46px;
  cursor: pointer;
i.icon.facebook:after
  content: '\e69b';
</style>
