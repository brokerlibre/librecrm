<template>
  <v-container fluid>
    <router-view></router-view>
  </v-container>
</template>

<script>
import InsurancesContainer from "./Charts/InsurancesContainer";
import InsurancesSellContainer from "./Charts/InsurancesSellContainer";

export default {
  components: { InsurancesContainer, InsurancesSellContainer },
  data: () => ({})
};
</script>

<style>
</style>
