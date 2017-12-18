<template>
  <section class="authentication-page indigo darken-4">
    <v-container fluid grid-list-xl>
      <v-layout row justify-center>
        <v-flex xs5>
          <v-card light color="white">
            <v-card-text>
              <router-view/>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
  export default {
    name: 'authentication'
  }
</script>

<style lang="sass">
  @import './Authentication'
</style>
