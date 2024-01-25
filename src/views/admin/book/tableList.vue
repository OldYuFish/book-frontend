<template>
  <Table
    v-show="props.bookLists"
    class="px-6"
    :data="props.bookLists"
    :page-config="props.pageConfig"
    @pageChange="pageChange"
  >
    <template #tableColumn>
      <ElTableColumn type="selection" />
      <ElTableColumn label="序号" prop="id" />
      <ElTableColumn label="图书编号" prop="bookId" />
      <ElTableColumn label="图书名称" prop="title" />
      <ElTableColumn label="所属分类" prop="category" />
      <ElTableColumn label="作者" prop="author" />
      <ElTableColumn label="出版日期" prop="publicDate" />
      <ElTableColumn label="出版社" prop="press" />
      <ElTableColumn label="当前库存" prop="number" />
      <ElTableColumn label="图书状态" prop="status" />
      <ElTableColumn label="添加时间" prop="updateTime" />
      <ElTableColumn label="操作" prop="operate" align="right">
        <template #default="{ row }">
          <ElButton
            class="m-1"
            type="primary"
            link
            @click="router.push(`/admin/${pageRoute}/detail/${row.id}`)"
          >
            查看
          </ElButton>
          <ElButton class="m-1" type="primary" link>编辑</ElButton>
          <ElButton class="m-1" type="danger" link>删除</ElButton>
        </template>
      </ElTableColumn>
    </template>
  </Table>
</template>
<script lang="ts" setup>
import { PropType } from "vue";

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
  tablePageChange: (_pageCfg: IPagination) => true,
});

const router = useRouter();
const route = useRoute();
const getPath = (path: string) => {
  const index = path.indexOf('-');
  return path.slice(0, index);
}
const pageRoute = getPath(route.name as string);
const pageCfg = ref<IPagination>({
  pageIndex: 1,
  pageSize: 10,
  total: 0
});
watch(
  () => props.pageConfig,
  () => {
    pageCfg.value = props.pageConfig;
  }
);
const pageChange = (pageIndex: number, pageSize: number) => {
  pageCfg.value.pageIndex = pageIndex;
  pageCfg.value.pageSize = pageSize;
};
watch(
  () => pageCfg.value,
  () => {
    emits('tablePageChange', pageCfg.value);
  }
);
</script>