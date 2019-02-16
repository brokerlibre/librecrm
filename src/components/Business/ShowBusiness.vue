<template>
  <v-layout align-center justify-center column fill-height>
    <h2>Nome: {{business.name}}</h2>
    <h3>Seguradora: {{business.insurer}}</h3>
    <h3>Valor Total: {{business.totalvalue}}</h3>
    <h3>Porcentagem em cima do valor: {{business.share}}</h3>
    <h3>CPF: {{business.paymentdate}}</h3>
    <h3>CPF: {{business.startdate}}</h3>
    <h3>CPF: {{business.enddate}}</h3>
  </v-layout>
</template>

<script>
const axios = require("axios");

export default {
  // TO DO: FAZER VALIDACOES INFORMACOES CLIENTE
  // TO DO: CONFIRMAR INFORMACOES CLIENTES
  props: {
    business: Object
  }
};
</script>

<style>
</style>
