<template>
  <div>
    <v-data-table :headers="headers" :items="customers" class="elevation-1">
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.email }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  data: function() {
    return {
      customers: [],
      headers: [
        { text: "Name", value: "name" },
        { text: "Endereço", value: "address" },
        { text: "Email", value: "email" },
        { text: "Telefone", value: "cel" },
        { text: "CPF", value: "cpf" }
      ]
    };
  },
  methods: {
    changePage() {
      //this.$router.push({})
    }
  },
  created() {
    var self = this;
    axios
      .get("http://localhost:3000/customers")
      .then(function(response) {
        self.customers = response.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style>
</style>
