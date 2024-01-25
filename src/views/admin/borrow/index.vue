<template>
  <Search
    :page-config="{ pageIndex: pageConfig.pageIndex, pageSize: pageConfig.pageSize }"
  />
  <ElCard>
    <Table
      v-show="borrowLists[pageConfig.pageIndex-1]"
      class="px-6"
      :data="borrowLists[pageConfig.pageIndex-1]"
      :page-config="pageConfig"
      @pageChange="pageChange"
    >
      <template #tableColumn>
        <ElTableColumn type="selection" />
        <ElTableColumn label="序号" prop="id" />
        <ElTableColumn label="图书编号" prop="bookId" />
        <ElTableColumn label="图书名称" prop="title" />
        <ElTableColumn label="所属分类" prop="category" />
        <ElTableColumn label="出版社" prop="press" />
        <ElTableColumn label="借阅时间" prop="borrowDate" />
        <ElTableColumn label="应还时间" prop="returnDate" />
        <ElTableColumn label="续借次数" prop="times" />
        <ElTableColumn label="借阅人" prop="username" />
        <ElTableColumn label="借阅状态" prop="status" />
        <ElTableColumn label="操作" prop="operate" align="right">
          <template #default>
            <ElButton class="m-1" type="primary" link>查看</ElButton>
            <ElButton class="m-1" type="primary" link>续借</ElButton>
            <ElButton class="m-1" type="danger" link>删除</ElButton>
          </template>
        </ElTableColumn>
      </template>
    </Table>
  </ElCard>
</template>

<script lang="ts" setup>
import Table from "@/components/Table/index.vue"
import { borrowLists } from "./borrowLists";

const pageConfig = ref<IPagination>({
  pageIndex: 1,
  pageSize: 10,
  total: 15
});
const pageChange = (pageIndex: number, pageSize: number) => {
  pageConfig.value.pageIndex = pageIndex;
  pageConfig.value.pageSize = pageSize;
}
</script>
