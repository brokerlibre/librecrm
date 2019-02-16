<template>
  <div class="container">
    <pie-chart :chartdata="chartdata" :options="options"/>
  </div>
</template>

<script>
import PieChart from "./PieChart";

export default {
  name: "InsurancesContainer",
  components: { PieChart },
  props: {
    sales: Object,
    loaded: Boolean
  },
  data: function() {
    return {
      chartdata: {
        datasets: [
          {
            data: this.sales.data,
            backgroundColor: [
              "#f9e140",
              "#ffdf60",
              "#eae9e5",
              "#ffce56",
              "#777671"
            ]
          }
        ],
        labels: this.sales.labels
      },
      options: {
        responsive: true,
        legend: {
          labels: {
            // This more specific font property overrides the global property
            fontColor: "white"
          }
        },
        maintainAspectRatio: false
      }
    };
  },
  mounted: function() {
    console.log("MOUNTED INSURANCE CONATINER");
    console.log(this.sales.data);
  }
};
</script>