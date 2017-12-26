<template>
  <section class="main-container">
    <v-content fluid>
      <v-container class="content-container" fluid>
        <v-navigation-drawer
          class="aside-navigation"
          permanent
          dark
          hide-overlay
          :mini-variant.sync="mini">
          <v-toolbar flat class="transparent">
            <v-list class="pa-0">
              <v-list-tile avatar>
                <v-list-tile-avatar>
                  <img src="https://randomuser.me/api/portraits/men/85.jpg" />
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>John Leider</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-btn icon @click.native.stop="mini = !mini">
                    <v-icon>chevron_left</v-icon>
                  </v-btn>
                </v-list-tile-action>
              </v-list-tile>
            </v-list>
          </v-toolbar>
          <v-list class="pt-0" dense>
            <v-divider></v-divider>
            <v-list-tile v-for="item in items" :key="item.title" @click="">
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>
      </v-container>
    </v-content>
  </section>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        items: [
          { title: 'Todos', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ],
        mini: true,
        right: null
      }
    }
  }
</script>

<style lang="sass" scoped>
  .content-container
    padding: 0 !important
    display: flex
    flex: 1 1 auto
    height: 100%

  .aside-navigation
    background-color: #1a237e!important
</style>
