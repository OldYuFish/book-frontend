<template>
  <div id="main" style="height: 400px"></div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts/core';
import {
  LineChart
} from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent
} from "echarts/components";
import { LabelLayout, UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import type {
  LineSeriesOption
} from "echarts/charts";
import type {
  TitleComponentOption,
  TooltipComponentOption,
  GridComponentOption,
  DatasetComponentOption
} from "echarts/components";
import type {
  ComposeOption
} from "echarts/core";

type ECOption = ComposeOption<
  | LineSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
>;

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LineChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
]);

const option: ECOption = {
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
let myChart = echarts.init(document.getElementById('main'));
window.addEventListener('resize', function() {
  myChart.resize();
});
myChart.setOption(option);
</script>