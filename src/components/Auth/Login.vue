<template>
  <v-layout align-center justify-center row>
    <v-flex mb-5 xs12>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="email" label="Email" required></v-text-field>
        <v-text-field v-model="password" label="Senha" required></v-text-field>
        <v-btn @click="submit">Login</v-btn>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({ email: "", password: "" }),
  methods: {
    submit() {
      console.log(this.email, this.password);
    }
  }
};
</script>

<style>
</style>
