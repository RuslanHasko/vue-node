<template>
  <section class="sign-in-module">
    <v-form v-model="valid">
      <v-text-field
        label="E-mail"
        v-model="email"
        required>
      </v-text-field>
      <v-text-field
        label="Enter your password"
        hint="At least 8 characters"
        v-model="password"
        min="8"
        :append-icon="e1 ? 'visibility' : 'visibility_off'"
        :append-icon-cb="() => (e1 = !e1)"
        :type="e1 ? 'password' : 'text'"
        counter>
      </v-text-field>
      <v-btn color="primary" flat @click="handleSubmit">Submit</v-btn>
    </v-form>
  </section>
</template>

<script>
  export default {
    name: 'sign-in',
    data () {
      return {
        valid: true,
        email: '',
        password: '',
        e1: 'password'
      }
    },
    methods: {
      handleSubmit () {
        console.log(this.email + '\n' + this.password)
      }
    }
  }
</script>
