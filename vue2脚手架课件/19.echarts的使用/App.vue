<template>
  <div id="app">
    <div id="chart"></div>
  </div>
</template>

<script>
/* 
(import * as 对象A from 路径)的作用是引入所有变量,
并将变量作为对象A的属性
*/
//import * as myobj from "./obj.js";
import * as echarts from "echarts";
export default {
  data() {
    return {};
  },

  mounted() {
    //console.log('myobj:',myobj.a)
    //init:初始化echart并用选择器选择一个显示图表的容器
    let barChart = echarts.init(document.getElementById("chart"));
    // 指定图表的配置项和数据
    let option = {
      legend: {
        data: ["销量"],
      },
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    };

    // 使用刚指定的配置项和数据显示图表。
    barChart.setOption(option);
  },
};
</script>

<style lang="less">
#chart {
  width: 400px;
  height: 250px;
  background: skyblue;
}
</style>