<template>
  <ElCard class="box-card">
    <template #header>
      <ElText style="font-size: x-large" tag="b">修改密码</ElText>
    </template>
    <ElForm class="pb-4" :model="form" size="large" ref="formRef" :rules="rules" label-position="right" label-width="120px">
      <ElFormItem label="旧密码" prop="oldPassword">
        <ElInput type="password" class="w-1/3" v-model.trim="form.oldPassword" placeholder="请输入旧密码"></ElInput>
      </ElFormItem>
      <ElFormItem label="新密码" prop="newPassword">
        <ElInput type="password" class="w-1/3" v-model.trim="form.newPassword" placeholder="请输入新密码"></ElInput>
      </ElFormItem>
      <ElFormItem label="重复密码" prop="repeatPassword">
        <ElInput type="password" class="w-1/3" v-model.trim="form.repeatPassword" placeholder="请确认新密码"></ElInput>
      </ElFormItem>
      <ElFormItem>
        <ElButton type="primary" @click="submit">提交</ElButton>
        <ElButton @click="router.push('/admin/home')">返回</ElButton>
      </ElFormItem>
    </ElForm>
  </ElCard>
</template>

<script lang="ts" setup>
import type { FormInstance, FormRules } from "element-plus";
import { ElMessage } from "element-plus";
import { self } from "@/api";

const router = useRouter();
const form = reactive({
  oldPassword: "",
  newPassword: "",
  repeatPassword: "",
});
const formRef = ref<FormInstance>();
const rules: FormRules = {
  oldPassword: [
    { required: true, message: "请输入旧密码", trigger: "blur" },
  ],
  newPassword: [
    { min: 6, max: 16, message: "密码长度为6-16位", trigger: "blur" },
  ],
  repeatPassword: [
    {
      validator: (_rule, value, callback) => {
        if (form.newPassword !== "" && value === "") {
          callback(new Error("请确认新密码"));
        } else if (value !== form.newPassword) {
          callback(new Error("两次输入密码不一致"));
        } else {
          callback();
        }
      },
      trigger: "blur",
    },
  ],
};

const submit = () => {
  formRef.value!.validate(async (valid) => {
    if (valid) {
      const params = {
        oldPassword: form.oldPassword,
        newPassword: form.newPassword,
      };
      const { data } = await self.updatePassword(params);
      if (data.code === 0) {
        ElMessage.success("修改成功！");
      }
    }
  })
};
</script>