<template>
  <div ref="chart" style="width: 100%; height: 150px;"></div>
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
    console.log(chart)
    //创建响应式数据对象
    const state = reactive({
      myChart: "",
    });
    console.log(props)
    const init = () => {
      //方法的定义
      if (chart) {
        var myChart = echarts.init(chart.value);
        // 指定图表的配置项和数据
        var option = {
          color: props.color,
          xAxis: {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          },
          yAxis: {
            type: "value",
          },
          grid: {
            //位置
            top: "15%",
            left: "5%",

            right: "5%",
            bottom: "0",
            containLabel: true,
          },
          series: [
            {
              name: "销量",
              type: props.type,
              data: props.data,
            },
          ],
        };
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