<script>
import { HorizontalBar } from "vue-chartjs";

export default {
  extends: HorizontalBar,

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
