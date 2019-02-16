<template>
  <v-layout align-center justify-center row>
    <v-flex mb-5 xs-12>
      <div>{{new_client}}</div>
    </v-flex>
  </v-layout>
</template>

<script>
const axios = require("axios");

export default {
  // TO DO: FAZER VALIDACOES INFORMACOES CLIENTE
  // TO DO: CONFIRMAR INFORMACOES CLIENTES
  data: function() {
    return {
      new_client: this.$route.params.client
    };
  },
  props: {
    client: Object
  },
  methods: {
    submit() {
      console.log(this.client);
    }
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
