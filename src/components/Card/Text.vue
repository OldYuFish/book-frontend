<template>
  <div style="padding: 14px">
    <span>{{ props.title }}</span>
    <div class="bottom">
      <ElRow v-for="{ value, key } in props.info">
        <ElText size="small">{{ key }}：{{ value }}</ElText>
      </ElRow>
      <template v-if="props.detailId !== 0">
        <ElRow>
          <ElButton type="primary" size="small" link @click="router.push(goto)">查看详情</ElButton>
        </ElRow>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
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
  detailId: {
    type: Number,
    default: 0
  }
});

const router = useRouter();
const route = useRoute();
const getPath = (path: string) => {
  const index = path.indexOf('-');
  return path.slice(0, index);
}
const pageRoute = getPath(route.name as string);
const goto: string = `/admin/${pageRoute}/detail/${props.detailId}`;
</script>