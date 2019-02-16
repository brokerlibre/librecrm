<template>
<div>
      <v-card>
<v-container>
                  <h3 class="headline mb-0" style="color: yellow;">Novo cliente</h3>
</v-container>
<v-container grid-list-md text-xs-center>
  <v-layout row wrap>
   <v-flex xs6>
                <v-text-field v-model="customer.name" label="Nome Completo" required></v-text-field>
                <v-text-field v-model="customer.address" label="Endereço"></v-text-field>
                <v-text-field v-model="customer.email" label="Email"></v-text-field>
                <v-text-field v-model="customer.cel" label="Telefone"></v-text-field>
   </v-flex>
   <v-flex xs6>
                <v-text-field v-model="customer.cpf" label="CPF"></v-text-field>
                <v-text-field v-model="customer.telegram" label="Telegram"></v-text-field>
                <v-text-field v-model="customer.facebook" label="Facebook"></v-text-field>
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
        cel: "",
        cpf: "",
        telegram: "",
        facebook: ""
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
