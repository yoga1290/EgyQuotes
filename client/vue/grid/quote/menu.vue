<script>
module.exports = {
  data () {
    return {
    }
  },

  methods: {
  },

  components: {
  },

  props: {
      quote: {
          type: Object,
          default () {
            return {
              name: '',
              thumbnail: '',
              airedTime: '',
              quote: '',
              logo: '',
              person: {
                name: ''
              }
            };
          }
      }
  }
}
</script>

<template lang="jade">
div
</template>

<style lang="stylus" scoped>
</style>
