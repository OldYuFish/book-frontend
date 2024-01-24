<template>
  <ElRow>
    <ElCol v-for="cardData of cardDatas" :span="6">
      <ElCard style="height: 120px" :body-style="{ padding: '0px' }">
        <ElRow class="mt-3 ml-6">
          <ElText size="large">今日{{ cardData.title }}</ElText>
        </ElRow>
        <ElRow class="mt-3 ml-6">
          <ElIcon class="mr-6"><UserFilled /></ElIcon>
          <ElText size="large">{{ cardData.num }}</ElText>
        </ElRow>
        <ElRow class="mt-3 ml-6">
          <ElText size="large">日环比：{{ cardData.day }}% 周同比：{{ cardData.week }}%</ElText>
        </ElRow>
      </ElCard>
    </ElCol>
  </ElRow>
  <ElRow>
    <ElCol :span="16">
      <ElRow>
        <ElCard style="width: 100%">
          <LinesChart />
        </ElCard>
      </ElRow>
      <ElRow>
        <ElCol :span="12">
          <ElCard>
            <template #header>
              <div class="card-header">
                <ElText>待处理事项</ElText>
                <ElButton type="primary" class="button" link>更多</ElButton>
              </div>
            </template>
            <ElEmpty :image-size="60" description="暂无数据" />
          </ElCard>
        </ElCol>
        <ElCol :span="12">
          <ElCard>
            <template #header>
              <div class="card-header">
                <ElText>待收费用</ElText>
                <ElButton type="primary" class="button" link>更多</ElButton>
              </div>
            </template>
            <ElEmpty :image-size="60" description="暂无数据" />
          </ElCard>
        </ElCol>
      </ElRow>
    </ElCol>
    <ElCol :span="8">
      <ElCard style="height: 100%">
        <ElRow v-for="pieData of pieDatas">
          <ElCol :span="12">
            <PieChart :text="pieData.text" :sum="pieData.sum" />
          </ElCol>
          <ElCol :span="12" class="mt-12">
            <ElRow justify="center">
              <ElText>本月{{ pieData.title }}数量</ElText>
            </ElRow>
            <ElRow justify="center">
              <ElText>{{ pieData.text }}</ElText>
            </ElRow>
            <ElRow justify="center">
              <ElText>环比（上月） {{ pieData.rate }}%</ElText>
            </ElRow>
          </ElCol>
        </ElRow>
      </ElCard>
    </ElCol>
  </ElRow>
</template>

<script lang="ts" setup>
import LinesChart from "@/components/Echart/Lines.vue"
import PieChart from "@/components/Echart/Pie.vue";
import { UserFilled } from "@element-plus/icons-vue";

const cardDatas = [
  { title: '新增用户', num: 168, day: 8, week: 8 },
  { title: '客流访问量', num: 9168, day: 5, week: 7 },
  { title: '借出图书数', num: 688, day: 5, week: 7 },
  { title: '归还图书数', num: 168, day: 5, week: 7 },
];
const pieDatas = [
  { text: '2168', sum: 2892, title: '新增图书', rate: 12 },
  { text: '8788', sum: 14650, title: '借出图书', rate: 3 },
  { text: '5777', sum: 11560, title: '归还图书', rate: 5 },
];
</script>
<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>