<template>
  <section>
    <v-alert
      color="success"
      icon="check_circle"
      transition="slide-x-transition"
      origin="center center"
      :value="showAlert">
      {{ msg }}
    </v-alert>
  </section>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        showAlert: false
      }
    },
    mounted () {
      setTimeout(() => {
        this.showAlert = true
        setTimeout(() => { this.showAlert = false }, 5000)
      }, 1000)
    }
  }
</script>

<style lang="sass">
  @import './Home'
</style>
