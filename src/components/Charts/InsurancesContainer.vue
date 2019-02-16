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
  data: () => ({
    loaded: false,
    chartdata: {
      datasets: [
        {
          data: [10, 20, 30, 40],
          backgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#23ce56"]
        }
      ],
      labels: ["Auto", "Habitação", "Vida", "Outros"]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),
  async mounted() {
    this.loaded = false;
    try {
      //   const { userlist } = await fetch("/api/userlist");
      // this.
      this.loaded = true;
    } catch (e) {
      console.error(e);
    }
  }
};
</script>