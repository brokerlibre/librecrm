<template>
  <v-layout align-space-around column fill-height>
    <v-btn fixed bottom large>
      <router-link to="/client">Cadastrar Cliente</router-link>
    </v-btn>

    <v-flex mb12>
      <h2>Clientes</h2>
    </v-flex>
    <v-flex mb12>
      <customers_table/>
    </v-flex>
  </v-layout>
</template>
<script>
import CustomersTable from "./CustomersTable";

export default {
  components: {
    customers_table: CustomersTable
  }
};
</script>

<style>
</style>
