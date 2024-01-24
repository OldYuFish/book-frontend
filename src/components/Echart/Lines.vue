<template>
  <div ref="linesChart" style="width: 100%;height: 260px"></div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts';

type EChartsOption = echarts.EChartsOption;
const linesChart = ref(null);
onMounted(() => {
  let myChart = echarts.init(linesChart.value);
  const option: EChartsOption = {
    title: {
      text: '图书借阅情况'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'cross' }
    },
    legend: {},
    xAxis: {
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {},
    series: [
      {
        name: '借出',
        data: [225, 350, 175, 375, 300, 400, 390],
        type: 'line'
      },
      {
        name: '归还',
        data: [150, 225, 210, 125, 210, 120, 300],
        type: 'line'
      }
    ]
  };
  myChart.setOption<echarts.EChartsOption>(option);
});
</script>