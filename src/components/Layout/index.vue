<template>
  <UseWindowSize v-slot="{ height }">
    <ElConfigProvider :locale="zh">
      <ElContainer :style="{ height: `${height}px` }">
        <ElAside class="relative w-56 bg-white" style="background-color: rgb(60, 160, 255)">
          <GkAside :height="height - 90" />
        </ElAside>
        <ElContainer style="background-color: #f5f5f5;">
          <ElHeader class="box-content p-0 header bg-white h-16">
            <GkHeader />
          </ElHeader>
          <ElScrollbar :style="{ height: `${height - 90}px` }" class="w-full">
            <ElMain>
              <RouterView v-slot="{ Component, route }">
                <Transition
                  v-if="route.meta.keepAlive"
                  :name="route.meta.transition || 'fade'"
                  mode="out-in"
                  appear
                >
                  <KeepAlive :max="5">
                    <Component :is="Component" :key="route.meta.key || route.name" />
                  </KeepAlive>
                </Transition>
                <Transition
                  v-if="!route.meta.keepAlive"
                  :name="route.meta.transition || 'fade'"
                  mode="out-in"
                  appear
                >
                  <Component :is="Component" :key="route.meta.key || route.name" />
                </Transition>
              </RouterView>
            </ElMain>
          </ElScrollbar>
        </ElContainer>
      </ElContainer>
    </ElConfigProvider>
  </UseWindowSize>
</template>
  
<script lang="ts" setup>
import zh from 'element-plus/es/locale/lang/zh-cn'
import { UseWindowSize } from '@vueuse/components'
import { RouterView } from 'vue-router'
import GkHeader from './Header.vue'
import GkAside from './Aside.vue'
</script>
  
<style lang="scss" scoped>
.header {
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
  z-index: 1;
}
</style>
  