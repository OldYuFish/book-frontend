<template>
  <Search
    :page-config="{ pageIndex: pageConfig.pageIndex, pageSize: pageConfig.pageSize }"
    @getResponseData="getData"
  />
  <ElCard>
    <Table
      v-show="alertLists"
      class="px-6"
      :data="alertLists"
      :page-config="pageConfig"
      @pageChange="pageChange"
    >
      <template #tableColumn>
        <ElTableColumn type="selection" />
        <ElTableColumn label="序号" prop="id" />
        <ElTableColumn label="标题名称" prop="title" />
        <ElTableColumn label="推送渠道" prop="pushChannel" />
        <ElTableColumn label="提醒频率" prop="frequency" />
        <ElTableColumn label="接收对象" prop="role" />
        <ElTableColumn label="状态" prop="status" />
        <ElTableColumn label="创建时间" prop="createDate" />
        <ElTableColumn label="操作" prop="operate" align="right">
          <template #default>
            <ElButton class="m-1" type="primary" link>查看</ElButton>
            <ElButton class="m-1" type="primary" link>编辑</ElButton>
            <ElButton class="m-1" type="danger" link>禁用</ElButton>
            <ElButton class="m-1" type="danger" link>删除</ElButton>
          </template>
        </ElTableColumn>
      </template>
    </Table>
  </ElCard>
</template>

<script lang="ts" setup>
import Table from "@/components/Table/index.vue"

const alertLists = ref<any[]>([]);
const pageConfig = ref<IPagination>({
  pageIndex: 1,
  pageSize: 10,
  total: 0
});
const getData = (responseDatas) => {
  alertLists.value = responseDatas.alertList;
  pageConfig.value = responseDatas.pagination;
};
const pageChange = (pageIndex: number, pageSize: number) => {
  pageConfig.value.pageIndex = pageIndex;
  pageConfig.value.pageSize = pageSize;
}
</script>