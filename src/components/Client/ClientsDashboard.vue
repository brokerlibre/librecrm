<template>
  <v-layout align-center justify-center column fill-height>
    <h2>Clientes</h2>
    <div v-for="client in clients" :key="client.id">
      <h2>{{client.name}}</h2>
      <div v-for="sale in client.sales" :key="sale.id">
        <h2>{{sale.price}}</h2>
      </div>
    </div>
    <v-btn fixed bottom right>
      <router-link to="/client">Cadastrar Cliente</router-link>
    </v-btn>
  </v-layout>
</template>
<script>
import { mapState } from "vuex";

export default {
  data: () => ({}),
  computed: {
    ...mapState({
      clients: state => state.clients
    })
  }
};
</script>

<style>
</style>
