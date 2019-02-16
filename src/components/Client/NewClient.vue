<template>
<div>
      <h2 class="display-1" style="margin-bottom: 20px; color: #C9D010;">Cadastro de novo cliente</h2>
      <v-card>
<v-container grid-list-md text-xs-center>
  <v-layout row wrap>
   <v-flex xs6>
                <v-text-field v-model="customer.name" label="Nome Completo" required></v-text-field>
                <v-text-field v-model="customer.address" label="Endereço"></v-text-field>
                <v-text-field v-model="customer.email" label="Email"></v-text-field>
                <v-text-field v-model="customer.cel" label="Telefone"></v-text-field>
                <v-text-field v-model="customer.cpf" label="CPF"></v-text-field>
                <v-text-field v-model="customer.telegram" label="Telegram"></v-text-field>
                <v-text-field v-model="customer.facebook" label="Facebook"></v-text-field>
        <v-text-field v-model="customer.income" label="Renda" type="number"></v-text-field>
   </v-flex>
   <v-flex xs6 style="margin-top: 30px;">
        <v-date-picker v-model="customer.birthdate" label="Data de Nascimento"></v-date-picker>
   </v-flex>
 </v-layout>
            <v-btn @click="submit" style="color: yellow;">Adicionar Cliente</v-btn>
    </v-container>
      </v-card>
</div>
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
