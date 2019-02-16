<template>
  <div>
    Aqui contém as informações de um único cliente
    {{ customer }}
    {{ oi }}
    <v-btn>
      <router-link to="/register_business">Cadastrar Business</router-link>
    </v-btn>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  // TO DO: FAZER VALIDACOES INFORMACOES CLIENTE
  // TO DO: CONFIRMAR INFORMACOES CLIENTES
  data: function() {
    return {
      oi: this.customer
    };
  },
  props: {
    customer: Object
  },
  methods: {
    submit() {}
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
