<template>
  <v-layout align-center justify-center row>
    <v-flex mb-5 xs12>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="name" label="Nome" required></v-text-field>
        <v-text-field v-model="email" label="Email" required></v-text-field>
        <v-text-field v-model="password" label="Senha" required></v-text-field>
        <v-text-field v-model="password_confirmation" label="Confirmar Senha" required></v-text-field>
        <v-btn @click="submit">Registrar</v-btn>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    valid: false
  }),
  methods: {
    submit() {
      if (!this.password_validation()) {
        alert("senha nao eh igual");
      } else {
        var response = {
          email: this.email,
          password: this.password,
          name: this.name,
          password_confirmation: this.password_confirmation
        };
        console.log(response);
      }
    },
    password_validation() {
      if (this.password == this.password_confirmation) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style>
</style>
