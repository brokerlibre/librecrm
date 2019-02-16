<template>
  <v-layout align-center justify-center row>
    <v-flex mb-5 xs12>
      <v-form ref="form">
        <h3>Novo Cliente</h3>
        <v-text-field v-model="name" label="Nome Completo" required></v-text-field>
        <v-text-field v-model="address" label="Endereço"></v-text-field>
        <v-text-field v-model="email" label="Email"></v-text-field>
        <v-text-field v-model="cel" label="Telefone"></v-text-field>
        <v-text-field v-model="cpf" label="CPF"></v-text-field>
        <v-btn @click="submit">Adicionar Cliente</v-btn>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
const axios = require("axios");

export default {
  // TO DO: FAZER VALIDACOES INFORMACOES CLIENTE
  // TO DO: CONFIRMAR INFORMACOES CLIENTES
  data: () => ({ name: "", address: "", email: "", cel: "", cpf: "" }),
  methods: {
    submit() {
      var client = {
        name: this.name,
        address: this.address,
        email: this.email,
        cel: this.cel,
        cpf: this.cpf
      };
      // axios
      //   .post("http:://api.com/client", client)
      //   .then(function(response) {
      //     console.log(response);
      //
      //   })
      //   .catch(function(error) {
      //     console.log(error);
      //   });
      this.$router.push({
        name: "ClientsDashboard"
      });
    }
  }
};
</script>

<style>
</style>
