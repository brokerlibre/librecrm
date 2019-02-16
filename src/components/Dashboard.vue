<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex md-6 xs6>
          <v-card>
            <v-card-title primary-title>
                <h3 class="headline mb-0">Porcentagem por tipo de apólice</h3>
                <insurances-container :sales="this.sales" v-if="this.loaded"/>
            </v-card-title>
          </v-card>
      </v-flex>
      <v-flex md-6 xs6>
          <v-card>
            <v-card-title primary-title>
                <h3 class="headline mb-0">Valor arrecadado por bens</h3>
                <insurances-sell-container/>
            </v-card-title>
          </v-card>
      </v-flex>
      <v-layout row wrap>
        <v-flex md-6 xs6>
          <v-card>
            <v-card-title primary-title>
                <h3 class="headline mb-0">Rentabilidade por tipo de seguro</h3>
                <insurances-rentability-container/>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex md-6 xs6>
          <v-card>
            <v-card-title primary-title>
                <h3 class="headline mb-0">Número de apólices vendidas por mês</h3>
                <sell-insurance-month/>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-layout>
    <v-layout align-center justify-center row fill-height></v-layout>
  </v-container>
</template>

<script>
import InsurancesContainer from "./Charts/InsurancesContainer";
import InsurancesSellContainer from "./Charts/InsurancesSellContainer";
import InsurancesRentabilityContainer from "./Charts/InsurancesRentabilityContainer";
import SellInsuranceMonth from "./Charts/SellInsuranceMonth";
const axios = require("axios");
export default {
  components: {
    InsurancesContainer,
    InsurancesSellContainer,
    InsurancesRentabilityContainer,
    SellInsuranceMonth
  },
  data: () => ({ sales: {}, loaded: false }),
  mounted() {
    this.loaded = false;
    var self = this;
    axios
      .get("https://libreapi.temposerver.ml/api/sale/")
      .then(function(response) {
        var arr = response.data.map(o => o.name);
        var counts = {};
        for (var i = 0; i < arr.length; i++) {
          counts[arr[i]] = 1 + (counts[arr[i]] || 0);
        }
        console.log(Object.keys(counts), Object.values(counts));
        self.sales = {
          labels: Object.keys(counts),
          data: Object.values(counts)
        };
        console.log(self.sales);
        self.loaded = true;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style>
</style>
