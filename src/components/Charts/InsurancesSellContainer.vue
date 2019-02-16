<template>
  <div class="container" fluid>
    <bar-chart :chartdata="chartdata"/>
  </div>
</template>

<script>
import BarChart from "./BarChart";

export default {
  name: "InsurancesSellContainer",
  components: { BarChart },
  data: () => ({
    loaded: false,
    chartdata: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          type: "bar",
          label: "Bar Component",
          data: [20, 20, 30, 40, 50, 60]
        },
        {
          type: "line",
          label: "Line Component",
          fill: false,
          data: [30, 30, 32],
          backgroundColor: ["#123"]
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