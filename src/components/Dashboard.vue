<template>
  <v-container fluid>
    <v-layout align-center justify-center row fill-height>
      <v-flex md-6 xs-12>
        <insurances-container/>
      </v-flex>
      <v-flex md-6 xs-12>
        <insurances-sell-container/>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center row fill-height>
      <v-flex md-6 xs-12>
        <insurances-rentability-container/>
      </v-flex>
      <v-flex md-6 xs-12>
        <insurances-sell-container/>
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
  data: () => ({})
};
</script>

<style>
</style>
