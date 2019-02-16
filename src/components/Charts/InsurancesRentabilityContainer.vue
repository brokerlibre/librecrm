<template>
  <div class="container" fluid>
    <horizontal-bar-chart :chartdata="chartdata"/>
  </div>
</template>

<script>
import HorizontalBarChart from "./HorizontalBarChart";

export default {
  name: "InsurancesRentabilityContainer",
  components: { HorizontalBarChart },
  data: () => ({
    loaded: false,
    chartdata: {
      labels: ["Vida", "Habitação", "Automóvel", "Saúde"],
      datasets: [
        {
          label: "Rentabilidade por tipo de Apólice",
          data: [850, 600, 400, 350],
          backgroundColor: [
            "#f9e140",
            "#ffdf60",
            "#eae9e5",
            "#ffce56",
            "#777671"
          ]
        }
      ]
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