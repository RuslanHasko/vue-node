<template>
  <section class="sign-up-container">
    <v-layout row justify-space-around align-center>
      <v-flex xs12 sm6 md4>
        <v-card class="v-center elevation-10">
          <v-form
            v-model="validLoginForm"
            @submit.prevent="handleSubmit">
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Sign Up</h3>
                <p class="mb-0 pt-2">Already have an account? Please
                  <router-link
                    class="link indigo--text darken-4 body-2"
                    to="sign_in">Sign In</router-link>
                </p>
              </div>
            </v-card-title>
            <v-card-text class="pt-0">
              <v-text-field
                label="Name"
                v-model="name"
                :rules="nameRules"
                :counter="3"
                required
              ></v-text-field>
              <v-text-field
                name="email"
                label="E-mail"
                v-model="email"
                :rules="[rules.required, rules.email]"
                required>
              </v-text-field>
              <v-text-field
                name="password"
                label="Enter your password"
                hint="At least 8 characters"
                v-model="password"
                min="8"
                :append-icon="e1 ? 'visibility' : 'visibility_off'"
                :append-icon-cb="() => (e1 = !e1)"
                :type="e1 ? 'password' : 'text'"
                :rules="[rules.required, rules.password]"
                counter
                required>
              </v-text-field>
              <v-text-field
                name="passwordconfirm"
                label="Re-enter your password"
                hint="At least 8 characters"
                v-model="matchpass"
                min="8"
                :append-icon="e2 ? 'visibility' : 'visibility_off'"
                :append-icon-cb="() => (e2 = !e2)"
                :type="e2 ? 'password' : 'text'"
                :rules="[rules.required, rules.matchpass]"
                counter
                required>
              </v-text-field>
            </v-card-text>
            <v-card-actions class="py-3">
              <v-btn
                type="submit"
                @click.native="handleSubmit"
                :class="{ 'd-none hide-btn': !validLoginForm}"
                transition="slide-y-transition"
                class="elevation-10"
                color="pink"
                dark
                absolute
                bottom
                right
                fab >
                <v-icon>arrow_forward</v-icon>
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'sign-up',
    data () {
      return {
        validLoginForm: true,
        e1: true,
        e2: true,
        name: '',
        password: '',
        matchpass: '',
        email: '',
        nameRules: [
          (v) => !!v || 'Name is required',
          (v) => (v.length >= 3 && v.length <= 30) || 'Name must be between 3 and 30 characters'
        ],
        rules: {
          required: (value) => !!value || 'Required.',
          email: (value) => {
            // eslint-disable-next-line
            const emailPattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            return emailPattern.test(value) || 'Invalid e-mail.'
          },
          password: (value) => {
            // eslint-disable-next-line
            const passPattern = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
            return passPattern.test(value) || 'Password must contains minimum 8 characters, at least 1 letter, 1 number and 1 special character'
          },
          matchpass: (value) => {
            return value === this.password || 'Passwords doesn`t match'
          }
        }
      }
    },
    methods: {
      ...mapActions(['SignUp']),
      handleSubmit () {
        let payload = {
          username: this.name,
          email: this.email,
          password: this.password
        }
        this.SignUp(payload)
          .then(data => this.$router.push({ name: 'Home' }))
      }
    }
  }
</script>

<style lang="sass" scoped>
  .sign-up-container
    display: flex
    flex: 1 1 auto

    .link
      text-decoration: none
      transition: color .3s ease-out
      &:hover
        color: #e91e63 !important

    .hide-btn
      bottom: 5px
</style>
