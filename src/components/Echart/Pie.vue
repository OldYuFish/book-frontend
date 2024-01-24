<template>
  <div ref="pieChart" style="width:100%;height: 170px"></div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts';

const props = defineProps({
  text: {
    type: String,
    default: '0',
  },
  sum: {
    type: Number,
    default: 0,
  },
});

type EChartsOption = echarts.EChartsOption;
const pieChart = ref(null);
onMounted(() => {
  let myChart = echarts.init(pieChart.value);
  const option: EChartsOption = {
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
        radius: ['50%', '70%']
      }
    ]
  };
  myChart.setOption<echarts.EChartsOption>(option);
});
</script>