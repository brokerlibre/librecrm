<template>
  <div>
    Aqui contém as informações de um único negocio 
    {{ business }}
  </div>
</template>

<script>
const axios = require("axios");

export default {
  // TO DO: FAZER VALIDACOES INFORMACOES CLIENTE
  // TO DO: CONFIRMAR INFORMACOES CLIENTES
  props: {
    business: Object
  },
  mounted() {
    // console.log(this.client);
    // var self = this;
    // axios
    //   .get("http:://api.com/client")
    //   .then(function(response) {
    //     self.client = response;
    //     console.log(self.client);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
  }
};
</script>

<style>
</style>
