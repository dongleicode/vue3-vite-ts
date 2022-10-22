<template>
  <div ref="chart" style="width: 100%; height: 300px"></div>
</template>
  <script>
import * as echarts from "echarts";
import { reactive, onMounted, toRefs, ref } from "vue";
export default {
  props: {
    color: {
      type: String,
    },
    type: {
      type: String,
    },
    data: {
      type: Array,
    },
  },
  setup(props) {
    const chart = ref(null);
    console.log(chart);
    //创建响应式数据对象
    const state = reactive({
      myChart: "",
    });
    console.log(props);
    const init = () => {
      //方法的定义
      if (chart) {
        var myChart = echarts.init(chart.value);
        // 指定图表的配置项和数据
        var option = {
          xAxis: {
            type: "category",
            boundaryGap: false,
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          },
          yAxis: {
            type: "value",
          },
          series: [
            {
              data: props.data,
              type: props.type,
              areaStyle: {},
            },
          ],
        };

        option && myChart.setOption(option);
        // 使用刚指定的配置项和数据显示图表。
        option && myChart.setOption(option);
      }
    };
    //生命周期 挂载完成
    onMounted(() => {
      init();
    });
    return {
      ...toRefs(state),
      chart,
    };
  },
};
</script>
  <style scoped>
</style>