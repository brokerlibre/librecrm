<template>
  <v-layout align-center justify-center row>
    <v-flex mb-5 xs12>
      <v-form ref="form">
        <h3>Nova apolice</h3>
        <v-text-field v-model="business.name" label="Nome da Apolice" required></v-text-field>
        <v-text-field v-model="business.address" label="Endereço"></v-text-field>
        <v-text-field v-model="business.email" label="Email"></v-text-field>
        <v-text-field v-model="business.cel" label="Telefone"></v-text-field>
	<v-text-field v-model="business.cpf" label="CPF"></v-text-field>
	<v-btn @click="submit">Adicionar Business</v-btn>

      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
import ShowBusiness from "./ShowBusiness";
const axios = require("axios");

export default {
  // TO DO: FAZER VALIDACOES INFORMACOES CLIENTE
  // TO DO: CONFIRMAR INFORMACOES CLIENTES
  data: function() { return { business: {name: "", address: "", email: "", cel: "", cpf: "" } } },
  components: {
    show_business: ShowBusiness
  },
  methods: {
    submit() {
      var self = this;
      axios
        .post("http://localhost:3000/business", self.business)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
      var self = this;
      this.$router.push({name: 'ShowBusiness', params: { business: self.business }})
    }
  }
};
</script>

<style>
</style>
