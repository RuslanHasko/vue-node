<template>
  <div id="app">
    <v-app>
      <router-view/>
    </v-app>
  </div>
</template>

<script>
  import('../node_modules/vuetify/dist/vuetify.min.css')

  export default {
    name: 'app'
  }
</script>

<style lang="sass">
  #app
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
</style>
