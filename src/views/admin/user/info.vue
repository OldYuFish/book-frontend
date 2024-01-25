<template>
  <Search
    :page-config="{ pageIndex: pageConfig.pageIndex, pageSize: pageConfig.pageSize }"
    @getResponseData="getData"
  />
  <ElCard>
    <Table
      v-show="userLists"
      class="px-6"
      :data="userLists"
      :page-config="pageConfig"
      @pageChange="pageChange"
    >
      <template #tableColumn>
        <ElTableColumn type="selection" />
        <ElTableColumn label="序号" prop="id" />
        <ElTableColumn label="用户编号" prop="userId" />
        <ElTableColumn label="用户姓名" prop="realName" />
        <ElTableColumn label="性别" prop="sex" />
        <ElTableColumn label="会员级别" prop="vipLevel" />
        <ElTableColumn label="积分" prop="score" />
        <ElTableColumn label="当前可借书数量" prop="couldBorrow" />
        <ElTableColumn label="当前在借书数量" prop="hasBorrowed" />
        <ElTableColumn label="消费金额" prop="amount" />
        <ElTableColumn label="注册时间" prop="registerDate" />
        <ElTableColumn label="操作" prop="operate" align="right">
          <template #default>
            <ElButton class="m-1" type="primary" link>查看</ElButton>
            <ElButton class="m-1" type="primary" link>编辑</ElButton>
            <ElButton class="m-1" type="danger" link>停用</ElButton>
            <ElButton class="m-1" type="danger" link>删除</ElButton>
          </template>
        </ElTableColumn>
      </template>
    </Table>
  </ElCard>
</template>

<script lang="ts" setup>
import Table from "@/components/Table/index.vue"

const userLists = ref<any[]>([]);
const pageConfig = ref<IPagination>({
  pageIndex: 1,
  pageSize: 10,
  total: 0
});
const getData = (responseDatas) => {
  userLists.value = responseDatas.userList;
  pageConfig.value = responseDatas.pagination;
};
const pageChange = (pageIndex: number, pageSize: number) => {
  pageConfig.value.pageIndex = pageIndex;
  pageConfig.value.pageSize = pageSize;
}
</script>