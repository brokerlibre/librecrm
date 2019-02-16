<template>
  <div>
    <v-data-table :headers="headers" :items="this.business" class="elevation-1">
      <template slot="items" slot-scope="props">
        <tr @click="changePage(props.item)">
          <td>{{ props.item.name }}</td>
          <td>{{ props.item.insurer }}</td>
          <td>{{props.item.total}}</td>
          <td>{{props.item.share}}</td>
          <td>{{props.item.paymentdate}}</td>
          <td>{{props.item.startdate}}</td>
          <td>{{props.item.enddate}} Dias</td>
          <td>{{props.item.share}} %</td>
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
      business: [],
      headers: [
        { text: "Tipo da Apólice", value: "type" },
        { text: "Seguradora", value: "insurer" },
        { text: "Valor", value: "value" },
        { text: "Porcentagem %", value: "share" },
        { text: "Data do Pagamento", value: "paymentdate" },
        { text: "Data de início", value: "startdate" },
        { text: "Vencimento (dias)", value: "enddate" }
      ]
    };
  },
  methods: {
    changePage(business) {
      this.$router.push({
        name: "ShowBusiness",
        params: { business: business }
      });
    }
  },
  created() {
    var self = this;
    axios
      .get("https://libreapi.temposerver.ml/api/sale/")
      .then(function(response) {
        self.business = response.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style>
</style>
