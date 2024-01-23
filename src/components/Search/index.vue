<template>
  <ElRow>
    <ElCol :span="10">
      <ElInput
        v-model="input"
        placeholder="请输入"
        class="input-with-select"
      >
        <template #prepend>
          <ElSelect v-model="option" placeholder="请选择" style="width: 115px">
            <ElOption
              v-for="query of queryOptions[props.pageRoute]"
              :key="query.value"
              :label="query.name"
              :value="query.value"
            />
          </ElSelect>
        </template>
        <template #append>
          <ElButton :icon="Search" @click="queryAPI[props.pageRoute]" />
        </template>
      </ElInput>
      <ElRadioGroup>
        <ElRadioButton label="选取时间" disabled />
        <ElRadioButton label="今天" />
        <ElRadioButton label="最近7天" />
        <ElRadioButton label="最近1个月" />
      </ElRadioGroup>
    </ElCol>
    <ElCol :span="4" offset></ElCol>
    <ElCol :span="2">
      <ElButton type="primary" plain @click="queryAPI[props.pageRoute]">搜索</ElButton>
      <ElButton type="primary" plain>高级搜索</ElButton>
      <ElButton type="primary" plain>批量导出</ElButton>
      <ElButton type="primary" @click="router.push(`/admin/${ props.pageRoute }/add`)">新增{{ routeToPage[props.pageRoute] }}</ElButton>
      <ElButton type="danger">批量删除</ElButton>
    </ElCol>
  </ElRow>
</template>

<script lang="ts" setup>
import router from "@/router";
import { bookManage, userManage, activityManage, alertManage } from "@/api"
import { ActivityQuery, AlertQuery, BookQuery, UserQuery } from "@/models";
import { Search } from "@element-plus/icons-vue";

const props = defineProps({
  pageRoute: {
    type: String,
    default: ''
  },
});
const emits = defineEmits({
  getResponseData: (_responseData: {}) => true,
});
const routeToPage = {
  "book": "图书",
  "user": "用户",
  "activity": "活动",
  "alert": "设置"
};
const input = ref('');
const option = ref('');
const bookQueryOptions = [
  { name: "题名", value: "title" },
  { name: "作者", value: "author" },
  { name: "类型", value: "type" },
  { name: "出版社", value: "press" },
  { name: "ISBN/ISSN", value: "isbnIssn" },
];
const borrowQueryOptions = [
  { name: "题名", value: "title" },
  { name: "作者", value: "author" },
  { name: "类型", value: "type" },
  { name: "出版社", value: "press" },
  { name: "借阅人", value: "username" },
];
const queryOptions = {
  "book": bookQueryOptions,
  "user": [{ name: "用户姓名", value: "username" }],
  "borrow": borrowQueryOptions,
  "payment": [{ name: "用户姓名", value: "username" }],
  "activity": [{ name: "活动名称", value: "title" }],
  "alert": [{ name: "标题名称", value: "title" }],
};
const bookQuery: BookQuery = reactive({
  title: '',
  author: '',
  type: '',
  press: '',
  isbnIssn: ''
});
const userQuery: UserQuery = reactive({
  username: '',
});
const activityQuery: ActivityQuery = reactive({
  title: '',
});
const alertQuery: AlertQuery = reactive({
  title: '',
});
watch(
  () => option.value,
  () => { input.value = ''; },
);
watch(
  () => input.value,
  () => {
    if (props.pageRoute === 'book') bookQuery[option.value] = input.value;
    else if (props.pageRoute === 'user') userQuery[option.value] = input.value;
    else if (props.pageRoute === 'activity') activityQuery[option.value] = input.value;
    else if (props.pageRoute === 'alert') alertQuery[option.value] = input.value;
  },
);
const responseData = ref({});
const bookQueryFunction = async () => {
  const { data } = await bookManage.query({ bookQuery, pageIndex: 1, pageSize: 10 });
  if (data.code === 0) {
    responseData.value = data.data;
  }
};
const userQueryFunction = async () => {
  const { data } = await userManage.query({ userQuery, pageIndex: 1, pageSize: 10 });
  if (data.code === 0) {
    responseData.value = data.data;
  }
};
const activityQueryFunction = async () => {
  const { data } = await activityManage.query({ activityQuery, pageIndex: 1, pageSize: 10 });
  if (data.code === 0) {
    responseData.value = data.data;
  }
};
const alertQueryFunction = async () => {
  const { data } = await alertManage.query({ alertQuery, pageIndex: 1, pageSize: 10 });
  if (data.code === 0) {
    responseData.value = data.data;
  }
};
const queryAPI = {
  "book": bookQueryFunction,
  "user": userQueryFunction,
  "activity": activityQueryFunction,
  "alert": alertQueryFunction,
};
watch(
  () => responseData.value,
  () => {
    emits('getResponseData', responseData.value)
  },
);
</script>