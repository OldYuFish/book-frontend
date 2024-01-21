<template>
  <ElHeader height="160px"></ElHeader>
  <ElResult
    icon="error"
    title="403 Forbidden"
    sub-title="您的权限不足，请点击按钮或5s后自动返回主页"
  >
    <template #extra>
      <ElButton type="primary" @click="back" round plain>
        <ElCountdown
          format="s"
          :value="Date.now() + 1000 * 5"
          prefix="返回 "
          suffix="s"
          @finish="back"
        />
      </ElButton>
    </template>
  </ElResult>
</template>

<script lang="ts" setup>
const router = useRouter();

const back = () => {
  router.push({ path: "/admin/home" });
}
</script>
