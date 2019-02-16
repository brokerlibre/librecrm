<template>
  <v-layout align-center justify-center row>
    <v-flex mb-5 xs12>
      <v-form ref="form">
        <h3>Nova Apólice</h3>
        <v-radio-group v-model="business.type" row>
          <v-radio value="auto" label="Automóvel"></v-radio>
          <v-radio value="house" label="Habitação"></v-radio>
          <v-radio value="life" label="Vida"></v-radio>
          <v-radio value="gadgets" label="Gadgets"></v-radio>
          <v-radio value="other" label="Outros"></v-radio>
        </v-radio-group>
        <v-text-field v-model="business.insurer" label="Seguradora"></v-text-field>
        <v-text-field v-model="business.value" label="Valor"></v-text-field>
        <v-checkbox v-model="business.confirmed_sale" label="Já fechou negócio?"></v-checkbox>
        <div v-if="business.confirmed_sale">
          <v-text-field v-model="business.portions" label="Parcelas"></v-text-field>
          <v-date-picker v-model="business.date_payment" color="green lighten-1"></v-date-picker>
          <v-date-picker v-model="business.date_start" color="green lighten-1"></v-date-picker>
          <v-text-field v-model="business.due" label="Vencimento" type="number"></v-text-field>
          <v-text-field v-model="business.percentage" label="% de ganho" type="number"></v-text-field>
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
        type: "",
        insurer: "",
        value: "",
        confirmed_sale: false,
        date_payment: null,
        date_start: null,
        due: 0,
        percentage: 0
      }
    };
  },
  components: {
    show_business: ShowBusiness
  },
  methods: {
    submit() {
      var self = this;
      axios
        .post("http://localhost:3000/business", self.business)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
      var self = this;
      this.$router.push({
        name: "ShowBusiness",
        params: { business: self.business }
      });
    }
  }
};
</script>

<style>
</style>
