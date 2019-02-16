<template>
  <v-layout align-center justify-center column fill-height>
    <h2>Nome: {{customer.name}}</h2>
    <h3>Endereço: {{customer.address}}</h3>
    <h3>Email: {{customer.email}}</h3>
    <h3>Celular: {{customer.cel}}</h3>
    <h3>CPF: {{customer.cpf}}</h3>
    <business-table/>
    <v-btn>
      <router-link to="/register_business">Cadastrar Business</router-link>
    </v-btn>
  </v-layout>
</template>

<script>
const axios = require("axios");
import BusinessTable from "../Business/BusinessTable";

export default {
  // TO DO: FAZER VALIDACOES INFORMACOES CLIENTE
  // TO DO: CONFIRMAR INFORMACOES CLIENTES
  data: function() {
    return {};
  },
  props: {
    customer: Object
  },
  methods: {
    submit() {}
  },
  components: {
    BusinessTable
  }

  // mounted() {
  //   // console.log(this.client);
  //   // var self = this;
  //   // axios
  //   //   .get("http:://api.com/client")
  //   //   .then(function(response) {
  //   //     self.client = response;
  //   //     console.log(self.client);
  //   //   })
  //   //   .catch(function(error) {
  //   //     console.log(error);
  //   //   });
  // }
};
</script>

<style>
</style>
