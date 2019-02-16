<template>
  <v-layout align-center justify-center row>
    <v-flex mb-5 xs12>
      <v-form ref="form">
        <h3>Novo Cliente</h3>
        <v-text-field v-model="customer.name" label="Nome Completo" required></v-text-field>
        <v-text-field v-model="customer.address" label="Endereço"></v-text-field>
        <v-text-field v-model="customer.email" label="Email"></v-text-field>
        <v-text-field v-model="customer.cel" label="Telefone"></v-text-field>
        <v-text-field v-model="customer.cpf" label="CPF"></v-text-field>
        <v-btn @click="submit">Adicionar Cliente</v-btn>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
import ShowClient from "./ShowClient";
const axios = require("axios");

export default {
  // TO DO: FAZER VALIDACOES INFORMACOES CLIENTE
  // TO DO: CONFIRMAR INFORMACOES CLIENTES
  data: function() {
    return { customer: { name: "", address: "", email: "", cel: "", cpf: "" } };
  },
  components: {
    show_customer: ShowClient
  },
  methods: {
    submit() {
      var self = this;
      axios
        .post("http://localhost:3000/customers", self.customer)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
      var self = this;
      this.$router.push({
        name: "ShowClient",
        params: { customer: self.customer }
      });
    }
  }
};
</script>

<style>
</style>
