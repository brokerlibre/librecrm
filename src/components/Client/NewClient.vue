<template>
  <v-layout align-center justify-center row>
    <v-flex mb-5 xs12>
      <v-form ref="form">
        <h3>Novo Cliente</h3>
        <v-text-field v-model="customer.name" label="Nome Completo" required></v-text-field>
        <v-text-field v-model="customer.address" label="Endereço"></v-text-field>
        <v-text-field v-model="customer.email" label="Email"></v-text-field>
        <v-text-field v-model="customer.cellphone" label="Telefone"></v-text-field>
        <v-text-field v-model="customer.cpf" label="CPF"></v-text-field>
        <v-text-field v-model="customer.telegram" label="Telegram"></v-text-field>
        <v-text-field v-model="customer.facebook" label="Facebook"></v-text-field>
        <v-text-field v-model="customer.income" label="Renda" type="number"></v-text-field>
        <v-date-picker v-model="customer.birthdate" label="Data de Nascimento"></v-date-picker>
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
    return {
      customer: {
        name: "",
        address: "",
        email: "",
        cellphone: "",
        cpf: "",
        telegram: "",
        facebook: "",
        income: "",
        birthdate: null
      }
    };
  },
  components: {
    show_customer: ShowClient
  },
  methods: {
    submit() {
      var self = this;
      axios
        .post("https://libreapi.temposerver.ml/api/customer/", self.customer)
        .then(function(response) {
          console.log(response);
          self.$router.push({
            name: "ShowClient",
            params: { customer: self.customer }
          });
        })
        .catch(function(error) {
          console.log(error);
        });
      var self = this;
    }
  }
};
</script>

<style>
</style>
