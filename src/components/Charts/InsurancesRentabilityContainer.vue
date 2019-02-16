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
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Bar Component",
          data: [20, 20, 30, 40, 50, 60]
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