<template>
  <section class="main-container indigo darken-4">
    <v-content fluid>
      <v-container class="content-container" fluid>
        <router-view/>
      </v-container>
    </v-content>
  </section>
</template>

<script>
  export default {
    name: 'authentication'
  }
</script>

<style lang="sass" scoped>
  .content-container
    display: flex
    flex: 1 1 auto
    height: 100%
</style>
