<template>
  <Search
    :page-config="{ pageIndex: pageConfig.pageIndex, pageSize: pageConfig.pageSize }"
    @getResponseData="getData"
  />
  <ElCard>
    <ElRow>
      <ElCol v-for="activityList of activityCardInfo" :span="12">
        <Card
          :title="activityList.title"
          :image="'/img/4.png'"
          :info="activityList.info"
        />
      </ElCol>
    </ElRow>
    <ElEmpty v-show="!activityCardInfo.value" :image-size="160" description="暂无数据" />
    <ElPagination
      v-model:currentPage="pageConfig.pageIndex"
      v-model:pageSize="pageConfig.pageSize"
      background
      layout="total, prev, pager, next, sizes, jumper"
      :pageSizes="[10, 20, 30, 50, 70, 100, 150, 200, 300, 500, 1000]"
      :total="pageConfig.total"
      :hideOnSinglePage="true"
      @currentChange="currentChange"
      @sizeChange="currentSizeChange"
    />
  </ElCard>
</template>

<script lang="ts" setup>
import Search from "@/components/Search/index.vue";
import Card from "@/components/Card/index.vue";

const activityLists = ref<any[]>([]);
const pageConfig = ref<IPagination>({
  pageIndex: 1,
  pageSize: 10,
  total: 0
});
const getData = (responseDatas) => {
  activityLists.value = responseDatas.activityList;
  pageConfig.value = responseDatas.pagination;
};
const activityCardInfo = ref<Object[]>([]);
watch(
  () => activityLists.value,
  () => {
    activityLists.value.forEach((val: any) => {
      activityCardInfo.value.push({
        title: val.title,
        image: val.image,
        info: {
          "活动时间": val.activityStartDate+'-'+val.activityEndDate,
          "活动地点": val.address,
          "报名时间": val.applicationStartDate+'-'+val.applicationEndDate,
          "参加条件": "查看详情",
          "活动状态": "进行中"
        }
      });
    });
  }
);
const currentChange = (pageIndex: number) => {
  pageConfig.value.pageIndex = pageIndex;
}
const currentSizeChange = (pageSize: number) => {
  pageConfig.value.pageSize = pageSize;
}
</script>