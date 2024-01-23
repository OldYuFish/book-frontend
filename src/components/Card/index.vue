<template>
  <ElCard :body-style="{ padding: '0px' }">
    <template v-if="props.cardType === 'book'">
      <img :src="props.image" class="image" />
      <CardText
        :title="props.title"
        :info="props.info"
        :detail-id="props.detailId"
        :page-route="props.pageRoute"
      />
    </template>
    <template v-else-if="props.cardType === 'payment'">
      <ElRow justify="center">
        <ElAvatar style="margin-top: 12px" shape="circle" size="large" :src="props.image" />
      </ElRow>
      <CardText
        :title="props.title"
        :info="props.info"
        :detail-id="props.detailId"
        :page-route="props.pageRoute"
      />
    </template>
    <template v-else-if="props.cardType === 'activity'">
      <ElRow>
        <ElCol :span="8">
          <img style="margin: 6px" :src="props.image" class="image" />
        </ElCol>
        <ElCol :span="16">
          <CardText
            :title="props.title"
            :info="props.info"
            :detail-id="props.detailId"
            :page-route="props.pageRoute"
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
  pageRoute: {
    type: String,
    default: ''
  },
  cardType: {
    type: String,
    default: ''
  }
});
</script>