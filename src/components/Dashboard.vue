<template>
  <v-container fluid>
    <v-layout align-center justify-center row fill-height>
      <v-flex md-6 xs-12>
        <insurances-container :sales="this.sales"/>
      </v-flex>
      <v-flex md-6 xs-12>
        <insurances-sell-container :sales="this.sales"/>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center row fill-height>
      <v-flex md-6 xs-12>
        <insurances-rentability-container :sales="this.sales"/>
      </v-flex>
      <v-flex md-6 xs-12>
        <insurances-sell-container :sales="this.sales"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import InsurancesContainer from "./Charts/InsurancesContainer";
import InsurancesSellContainer from "./Charts/InsurancesSellContainer";
import InsurancesRentabilityContainer from "./Charts/InsurancesRentabilityContainer";
export default {
  components: {
    InsurancesContainer,
    InsurancesSellContainer,
    InsurancesRentabilityContainer
  },
  data: () => ({ sales: [] }),
  mounted() {
    this.loaded = false;
    var self = this;
    axios
      .get("https://libreapi.temposerver.ml/api/sale/")
      .then(function(response) {
        self.sales = response.data;
        this.loaded = true;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style>
</style>
