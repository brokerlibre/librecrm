<template>
  <div class="container" fluid>
    <h5>Carteira de Apólices</h5>
    <pie-chart :chartdata="chartdata" :options="options"/>
  </div>
</template>

<script>
import PieChart from "./PieChart";

export default {
  name: "InsurancesContainer",
  components: { PieChart },
  props: {
    sales: Array
  },
  data: () => ({
    chartdata: {
      datasets: [
        {
          data: [10, 20, 30, 40],
          backgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#23ce56"]
        }
      ],
      labels: ["Automovel", "Habitação", "Vida", "Outros"]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),
  mounted() {
    var counts = {};
    for (var i = 0; i < this.sale.length; i++) {
      counts[this.sales[i]] = 1 + (counts[this.sales[i]] || 0);
    }
  }
};
</script>