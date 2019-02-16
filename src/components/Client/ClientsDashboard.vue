<template>
  <v-layout align-center justify-center column fill-height>
    <v-btn>
      <router-link to="/client">Cadastrar Cliente</router-link>
    </v-btn>
    <h2>Clientes</h2>
    <customers_table />
  </v-layout>
</template>
<script>
import { mapState } from "vuex";
import CustomersTable from "./CustomersTable";

export default {
  components: {
    customers_table: CustomersTable
  }
};
</script>

<style>
</style>
