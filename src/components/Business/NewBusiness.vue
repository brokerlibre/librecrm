<template>
  <v-layout align-center justify-center row>
    <v-flex mb-5 xs12>
      <v-form ref="form">
        <h3>Nova Apólice</h3>
        <v-radio-group v-model="business.name" row>
          <v-radio value="Automóvel" label="Automóvel"></v-radio>
          <v-radio value="Habitação" label="Habitação"></v-radio>
          <v-radio value="Vida" label="Vida"></v-radio>
          <v-radio value="Celular" label="Celular"></v-radio>
          <v-radio value="Outros" label="Outros"></v-radio>
        </v-radio-group>
        <v-text-field v-model="business.insurer" label="Seguradora"></v-text-field>
        <v-text-field v-model="business.totalvalue" label="Valor"></v-text-field>
        <v-checkbox v-model="confirmed_sale" label="Já fechou negócio?"></v-checkbox>
        <div v-if="confirmed_sale">
          <v-date-picker v-model="business.paymentdate" color="green lighten-1"></v-date-picker>
          <v-date-picker v-model="business.startdate" color="green lighten-1"></v-date-picker>
          <v-text-field v-model="business.enddate" label="Vencimento" type="number"></v-text-field>
          <v-text-field v-model="business.share" label="% de ganho" type="number"></v-text-field>
        </div>
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
  data: function() {
    return {
      business: {
        name: "",
        insurer: "",
        totalvalue: "",
        paymentdate: "",
        startdate: "",
        enddate: "",
        share: 0,
        broker: 1,
        customer: 1
      },
      confirmed_sale: false
    };
  },
  components: {
    show_business: ShowBusiness
  },
  methods: {
    submit() {
      var self = this;
      axios
        .post("https://libreapi.temposerver.ml/api/sale/", self.business)
        .then(function(response) {
          self.$router.push({
            name: "ShowBusiness",
            params: { business: self.business }
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style>
</style>
