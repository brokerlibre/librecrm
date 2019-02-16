<script>
import { Line } from "vue-chartjs";

export default {
  data: function() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          labels: {
            // This more specific font property overrides the global property
            fontColor: "white"
          }
        }
      }
    };
  },
  extends: Line,
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
