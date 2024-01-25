<template>
  <Search
    :page-config="{ pageIndex: pageConfig.pageIndex, pageSize: pageConfig.pageSize }"
  />
  <ElCard>
    <ElRow>
      <template v-for="(paymentList, index) in paymentCardInfo[pageConfig.pageIndex-1]">
        <ElCol :span="6">
          <Card
            :title="paymentList.title"
            :image="paymentList.image"
            :info="paymentList.info"
            :detail-id="paymentList.id"
          />
        </ElCol>
      </template>
    </ElRow>
    <ElEmpty v-show="!paymentCardInfo" :image-size="160" description="暂无数据" />
    <ElPagination
      v-model:currentPage="pageConfig.pageIndex"
      v-model:pageSize="pageConfig.pageSize"
      background
      layout="total, prev, pager, next, sizes, jumper"
      :pageSizes="[10, 20, 30, 50, 70, 100, 150, 200, 300, 500, 1000]"
      :total="pageConfig.total"
      :hideOnSinglePage="true"
    />
  </ElCard>

</template>

<script lang="ts" setup>
import { paymentCardInfo } from "@/views/admin/payment/paymentCardInfo";

const pageConfig = ref<IPagination>({
  pageIndex: 1,
  pageSize: 10,
  total: 15
});
</script>