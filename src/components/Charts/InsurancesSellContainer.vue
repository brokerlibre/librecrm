<template>
  <div class="container">
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
          label: "Valor Arrecadado",
          data: [8065, 5048],
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
  })
};
</script>