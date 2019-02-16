<template>
<div>
      <h2 class="display-1" style="margin-bottom: 20px; color: #C9D010;">Informações básicas do Cliente: {{customer.name}}</h2>
    <v-flex xs12>
      <v-card>
        <v-card-title primary-title>
          <div>
            <div><strong>Email:</strong> {{customer.email}}</div>
            <div><strong>CPF:</strong> {{customer.cpf}}</div>
            <div><strong>Endereço:</strong>{{customer.address}}</div>
            <div><strong>Celular:</strong>{{customer.cel}}</div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  
    <h2 class="display-1" style="margin: 20px 0px; color: #C9D010;">Lista de Negócios</h2>
  <v-layout fill-height>
    <business-table/>
    <v-btn>
      <router-link to="/register_business">Cadastrar Business</router-link>
    </v-btn>
  </v-layout>
</div>
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
