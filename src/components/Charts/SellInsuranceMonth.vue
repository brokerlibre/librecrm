<template>
  <div class="container">
    <line-chart :chartdata="chartdata"/>
  </div>
</template>

<script>
import LineChart from "./LineChart";

export default {
  name: "InsurancesSellContainer",
  components: { LineChart },
  data: () => ({
    loaded: false,
    chartdata: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Número de Apólices",
          data: [12, 5],
          backgroundColor: ["#f9e140"],
          borderColor: ["#f9e140"],
          fill: null
        }
      ]
    }
  })
};
</script>