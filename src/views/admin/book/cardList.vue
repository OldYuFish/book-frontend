<template>
  <ElRow>
    <div v-for="bookList of bookCardInfo">
      <ElCol :span="4">
        <Card
          :title="bookList.title"
          :image="bookList.image"
          :info="bookList.info"
        />
      </ElCol>
      <ElCol :span="1"></ElCol>
    </div>
  </ElRow>
  <ElEmpty v-show="!bookCardInfo.value" :image-size="160" description="暂无数据" />
  <ElPagination
    v-model:currentPage="props.pageConfig.pageIndex"
    v-model:pageSize="props.pageConfig.pageSize"
    background
    layout="total, prev, pager, next, sizes, jumper"
    :pageSizes="[10, 20, 30, 50, 70, 100, 150, 200, 300, 500, 1000]"
    :total="props.pageConfig.total"
    :hideOnSinglePage="true"
    @currentChange="currentChange"
    @sizeChange="currentSizeChange"
  />
</template>
<script lang="ts" setup>
import { PropType } from "vue";
import Card from "@/components/Card/index.vue";

const props = defineProps({
  bookLists: {
    type: Object as PropType<any[]>,
    default() {
      return []
    }
  },
  pageConfig: {
    type: Object as PropType<IPagination>,
    default: () => {
      return {
        pageIndex: 1,
        pageSize: 10,
        total: 0,
      }
    },
  },
});
const emits = defineEmits({
  pageChange: (_pageIndex: number, _pageSize: number) => true,
});
const bookLists = ref<any[]>([]);
const bookCardInfo = ref<Object[]>([]);
watch(
  () => bookLists.value,
  () => {
    bookLists.value.forEach((val: any) => {
      bookCardInfo.value.push({
        title: val.title,
        image: val.image,
        info: {
          "作者": val.author,
          "出版社": val.press,
          "初版日期": val.publicDate,
          "借阅次数": val.borrowTimes,
          "库存": val.number
        }
      });
    });
  }
);
const currentChange = (pageIndex: number) => {
  emits('pageChange', pageIndex, props.pageConfig.pageSize!)
}
const currentSizeChange = (pageSize: number) => {
  emits('pageChange', 1, pageSize!)
}
</script>