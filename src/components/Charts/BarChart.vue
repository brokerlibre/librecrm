<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,

  data: function() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false
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
