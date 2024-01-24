<template>
  <ElCard :body-style="{ padding: '0px' }">
    <template v-if="pageRoute === 'book'">
      <img :src="props.image" class="image" />
      <CardText
        :title="props.title"
        :info="props.info"
        :detail-id="props.detailId"
        :page-route="pageRoute"
      />
    </template>
    <template v-else-if="pageRoute === 'payment'">
      <ElRow justify="center">
        <ElAvatar style="margin-top: 12px" shape="circle" size="large" :src="props.image" />
      </ElRow>
      <CardText
        :title="props.title"
        :info="props.info"
        :detail-id="props.detailId"
        :page-route="pageRoute"
      />
    </template>
    <template v-else-if="pageRoute === 'activity'">
      <ElRow>
        <ElCol :span="8">
          <img style="margin: 6px" :src="props.image" class="image" />
        </ElCol>
        <ElCol :span="16">
          <CardText
            :title="props.title"
            :info="props.info"
            :detail-id="props.detailId"
            :page-route="pageRoute"
          />
        </ElCol>
      </ElRow>
    </template>
  </ElCard>
</template>

<script lang="ts" setup>
import CardText from "@/components/Card/Text.vue";

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
  detailId: {
    type: Number,
    default: 0
  },
});

const route = useRoute();
const getPath = (path: string) => {
  const index = path.indexOf('-');
  return path.slice(0, index);
}
const pageRoute = getPath(route.name as string);
</script>