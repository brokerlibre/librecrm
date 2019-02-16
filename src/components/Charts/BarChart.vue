<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,

  data: function() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        },
        legend: {
          labels: {
            // This more specific font property overrides the global property
            fontColor: "white"
          }
        }
      }
    };
  },
  props: {
    chartdata: {
      type: Object,
      default: null
    }
  },
  mounted() {
    this.renderChart(this.chartdata, this.options);
  }
};
</script>
<style>
</style>
