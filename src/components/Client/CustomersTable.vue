<template>
  <div>
      <v-data-table
        :headers="headers"
        :items="customers"
        class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <td>{{ props.item.name }}</td>
          <td class="text-xs-right" :onclick="changePage">{{ props.item.email }}</td>
        </template>
      </v-data-table>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  data: function(){
    return {
        customers: [],
        headers: [
          {
            text: 'Name',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Email', value: 'email' },
        ],
    }
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
