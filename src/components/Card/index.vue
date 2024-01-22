<template>
  <ElCard :body-style="{ padding: '2px' }">

  </ElCard>
</template>

<script lang="ts" setup>
const props = defineProps({
  image: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  info: {
    type: Object,
    default: () => {
      return {}
    }
  },
});
</script>