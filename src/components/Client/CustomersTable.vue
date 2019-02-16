<template>
  <div>
    <v-data-table :headers="headers" :items="customers" class="elevation-1">
      <template slot="items" slot-scope="props">
        <tr @click="changePage(props.item)">
          <td>{{ props.item.name }}</td>
          <td>{{ props.item.address }}</td>
          <td>{{props.item.email}}</td>
          <td>{{props.item.cellphone}}</td>
          <td>{{props.item.cpf}}</td>
          <td>{{props.item.telegram}}</td>
          <td>{{props.item.facebook}}</td>
          <td>{{props.item.income}}</td>
          <td>{{props.item.birthdate}}</td>
        </tr>
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
        { text: "Telefone", value: "cellphone" },
        { text: "CPF", value: "cpf" },
        { text: "Telegram", value: "telegram" },
        { text: "Facebook", value: "facebook" },
        { text: "Renda", value: "income" },
        { text: "Data de Nascimento", value: "birthdate" }
      ]
    };
  },
  methods: {
    changePage(customer) {
      console.log(customer);
      this.$router.push({
        name: "ShowClient",
        params: { customer: customer }
      });
    }
  },
  created() {
    var self = this;
    axios
      .get("https://libreapi.temposerver.ml/api/customer/")
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
