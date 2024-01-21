<template>
  <ElMenu
    class="el-menu-demo bg-image h-16"
    mode="horizontal"
    :ellipsis="false"
    text-color="white"
    active-text-color="black"
  >
    <ElMenuItem index="0" @click="router.push('/home')">
      <img src="/images/label.png" style="height: 64px;" />
    </ElMenuItem>
    <ElMenuItem index="1" class="pb-1 pt-1 ml-6 mr-6" @click="router.push('/home')" style="font-size: x-large; font-weight: bold;">
      单学位项目硕士研究生预报名系统
    </ElMenuItem>
    <template v-if="roleId === 1 && year !== ''">
      <ElMenuItem class="pt-1 pb-1" style="font-size: large; font-weight: bold;">招生年度：{{ year }}</ElMenuItem>
    </template>
    <template v-else-if="roleId === 2 || roleId === 3">
      <ElMenuItem class="mx-3 px-0">
        <ElSelect size="large" v-model="year" filterable placeholder="请设置系统年份">
          <ElOption
            v-for="item in yearOptions"
            :key="item.year"
            :label="item.year"
            :value="item.year"
          ></ElOption>
        </ElSelect>
        <ElButton class="ml-6" size="large" type="primary" @click="submit">提交</ElButton>
      </ElMenuItem>
    </template>
    <div class="flex-grow" />
    <ElMenuItem class="pb-1 pt-1" index="2" @click="router.push('/center')" style="font-size: large; font-weight: bold;">个人中心</ElMenuItem>
    <ElSubMenu index="3">
      <template #title>{{ store.getters["userInfo"].userName }}</template>
      <ElMenuItem index="3-1" @click="logout">注销</ElMenuItem>
    </ElSubMenu>
  </ElMenu>
</template>

<script lang="ts" setup>
import { ElMessage } from "element-plus";
import store from "@/store";
import { YearInfo } from "@/models";
import { login, approveTable, user } from "@/api";

const roleId = store.getters["userInfo"].roleId;
const yearOptions = ref<YearInfo[]>([]);
const router = useRouter();
const year = ref("");

const logout = async () => {
  const { data } = await login.logout();
  if (data.code === 0) {
    ElMessage.success("注销成功!");
  }
  await router.push("/login");
};

const submit = async () => {
  const { data } = await approveTable.year({ year: year.value });
  if (data.code === 0) {
    ElMessage.success("年份设置成功！");
  }
};

const getYears = async () => {
  const { data } = await approveTable.yearList();
  if (data.code === 0) {
    data.data.years.forEach((y) => {
      if (y !== "") {
        yearOptions.value.push({ year: y });
      }
    })
  }
}

const getSelectedYear = async () => {
  const { data } = await user.year();
  if (data.code === 0) {
    year.value = data.data.year;
  }
}

if (roleId === 2 || roleId === 3) {
  getYears();
}

getSelectedYear();
</script>

<style>
.header > div {
  align-items: center;
  justify-content: center;
  height: 100%;
}

.bg-image {
  background: url('/images/bg-header.png');
}
</style>
