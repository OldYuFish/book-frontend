<template>
  <Search
    :page-config="{ pageIndex: pageConfig.pageIndex, pageSize: pageConfig.pageSize }"
    @getResponseData="getData"
  />
  <ElCard>
    <ElTabs v-model="activeName" class="demo-tabs" type="border-card">
      <ElTabPane name="card">
        <template #label>
          <ElIcon><Menu /></ElIcon>
        </template>
        <CardList
          :book-lists="bookLists.value"
          :page-config="pageConfig.value"
          @pageChange="pageChange"
        />
      </ElTabPane>
      <ElTabPane name="table">
        <template #label>
          <ElIcon><Fold /></ElIcon>
        </template>
        <TableList :book-lists="bookLists.value" />
      </ElTabPane>
    </ElTabs>
  </ElCard>
</template>

<script lang="ts" setup>
import { Menu, Fold } from "@element-plus/icons-vue";
import CardList from "./cardList.vue";
import TableList from "./tableList.vue";

const bookLists = ref<any[]>([]);
const pageConfig = ref<IPagination>({
  pageIndex: 1,
  pageSize: 10,
  total: 0
});
const getData = (responseDatas) => {
  bookLists.value = responseDatas.bookList;
  pageConfig.value = responseDatas.pagination;
};
const activeName = ref("card");
const pageChange = (pageIndex: number, pageSize: number) => {
  pageConfig.value.pageIndex = pageIndex;
  pageConfig.value.pageSize = pageSize;
}
</script>