<template>
  <div id="main" style="height: 400px"></div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts/core';
import {
  PieChart
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
  PieSeriesOption
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

const props = defineProps({
  text: {
    type: String,
    default: '0',
  },
  sum: {
    type: Number,
    default: 0,
  },
})

type ECOption = ComposeOption<
  | PieSeriesOption
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
  PieChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
]);

const option: ECOption = {
  title: {
    text: props.text,
    left: 'center',
    top: 'center'
  },
  series: [
    {
      type: 'pie',
      data: [
        {
          value: Number(props.text)
        },
        {
          value: props.sum-Number(props.text)
        }
      ],
      radius: ['30%', '40%']
    }
  ]
};
let myChart = echarts.init(document.getElementById('main'));
window.addEventListener('resize', function() {
  myChart.resize();
});
myChart.setOption(option);
</script>