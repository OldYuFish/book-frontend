<template>
  <ElMenu
    class="el-menu-demo bg-image h-16"
    mode="horizontal"
    background-color="rgb(60, 160, 255)"
    :ellipsis="false"
    text-color="white"
    active-text-color="black"
  >
    <div class="flex-grow" />
    <ElMenuItem index="1">
      <ElPopover
        placement="bottom"
        title="用户信息"
        :width="300"
        trigger="hover"
      >
        <template #default>
          <div>所在部门：研发中心</div>
          <div>所处岗位：系统管理员</div>
          <div>本次登录：2024-01-26 11:34:54</div>
          <div>登录地区：江西省景德镇市</div>
          <div>上次登录：2024-01-26 11:10:23</div>
          <ElButton type="primary" link @click="router.push('/admin/center')">修改密码</ElButton>
        </template>
        <template #reference>
          <ElIcon><UserFilled /></ElIcon>
        </template>
      </ElPopover>
    </ElMenuItem>
    <ElDivider direction="vertical" class="mt-6" />
    <ElMenuItem index="2" @click="router.push('/admin/home')">
      <ElTooltip
        class="box-item"
        effect="light"
        content="系统首页"
        placement="bottom"
      >
        <ElIcon><HomeFilled /></ElIcon>
      </ElTooltip>
    </ElMenuItem>
    <ElDivider direction="vertical" class="mt-6" />
    <ElSubMenu index="3">
      <template #title><ElIcon><Expand /></ElIcon></template>
      <ElMenuItem index="4-1" @click="router.push('/admin/home')">系统首页</ElMenuItem>
      <ElMenuItem index="4-2" @click="router.push('/admin/book/information')">图书管理</ElMenuItem>
      <ElMenuItem index="4-3" @click="router.push('/admin/user/information')">用户管理</ElMenuItem>
      <ElMenuItem index="4-4" @click="router.push('/admin/borrow')">借阅管理</ElMenuItem>
      <ElMenuItem index="4-5" @click="router.push('/admin/payment/information')">支付管理</ElMenuItem>
      <ElMenuItem index="4-6" @click="router.push('/admin/activity/information')">活动管理</ElMenuItem>
    </ElSubMenu>
    <ElDivider direction="vertical" class="mt-6" />
    <ElMenuItem index="4" @click="logout">
      <ElTooltip
        class="box-item"
        effect="light"
        content="退出登录"
        placement="bottom"
      >
        <ElIcon><SwitchButton /></ElIcon>
      </ElTooltip>
    </ElMenuItem>
  </ElMenu>
</template>

<script lang="ts" setup>
import { SwitchButton, Expand, HomeFilled, UserFilled } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
import { login } from "@/api";

const router = useRouter();

const logout = async () => {
  const { data } = await login.logout();
  if (data.code === 0) {
    ElMessage.success("注销成功！");
  }
  await router.push("/login");
};
</script>

<style>
.header > div {
  align-items: center;
  justify-content: center;
  height: 100%;
}

.el-menu:not(.el-menu--collapse) .el-sub-menu__title{
  padding-right: 12px;
  padding-left: 18px;
}

.el-sub-menu .el-sub-menu__icon-arrow{
  display: none;
}
</style>
