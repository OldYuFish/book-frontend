<template>
<ElScrollbar :style="{ height: `${height}px` }" class="mt-6">
    <ElText style="font-size: x-large; color: white">图书借阅管理</ElText>
    <ElMenu
        class="aside-wrap border-r-0 my-3 w-278"
        background-color="rgb(60, 160, 255)"
        text-color="white"
        :defaultActive="state.defaultActive"
        :defaultOpeneds="state.defaultOpeneds"
    >
        <template v-for="menu of state.menus" :key="menu.id">
            <template v-if="menu.isLeaf">
                <ElMenuItem
                    :class="{ 'pl-12': menu.noLeaf }"
                    :index="menu.id"
                    @click="triggerMenuItem($event, menu)"
                >
                    <template #title>
                    <!-- <i class="gokuer text-lg mr-2 mb-1" :class="menu.icon" /> -->
                    <SvgIcon :icon-class="menu.icon" />
                    <span :data-cy="menu.name" style="font-weight: bold" class="text-base">{{ menu.title }}</span>
                    </template>
                </ElMenuItem>
            </template>
            <ElSubMenu v-else-if="!menu.isLeaf" :index="menu.id">
                <template #title>
                        <i class="gokuer text-lg mr-2 mb-1" :class="menu.icon" />
                        <span :data-cy="menu.name" class="text-base">{{ menu.title }}</span>
                </template>
                <template v-for="item of menu.children" :key="item.id">
                    <ElMenuItem class="pl-12" :index="item.id" @click="triggerMenuItem($event, item)">
                        <span :data-cy="item.name">{{ item.title }}</span>
                    </ElMenuItem>
                </template>
            </ElSubMenu>
        </template>
    </ElMenu>
</ElScrollbar>
</template>
  
<script lang="ts" setup>
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { IRouterRecord } from '@/models'
import SvgIcon from "@/components/SvgIcon/index.vue";

defineProps({
    height: {
        type: Number,
        default: 0,
    },
});

const route = useRoute();
const router = useRouter();

let menuSource: IRouterRecord[] = [
  {
    id: '11',
    icon: 'home',
    name: 'home-info',
    /* markRaw(Setting), */ title: '系统首页',
    isLeaf: true,
    noLeaf: true,
    path: '/admin/home',
    children: [],
  },
  {
    id: '21',
    icon: 'book',
    name: 'book-information',
    /* markRaw(Setting), */ title: '图书管理',
    isLeaf: true,
    noLeaf: true,
    path: '/admin/book/information',
    children: [],
  },
  {
    id: '31',
    icon: 'user',
    name: 'user-information',
    /* markRaw(Setting), */ title: '用户管理',
    isLeaf: true,
    noLeaf: true,
    path: '/admin/user/information',
    children: [],
  },
  {
    id: '41',
    icon: 'borrow',
    name: 'borrow-info',
    /* markRaw(Setting), */ title: '借阅管理',
    isLeaf: true,
    noLeaf: true,
    path: '/admin/borrow',
    children: [],
  },
  {
    id: '51',
    icon: 'payment',
    name: 'payment-information',
    /* markRaw(Setting), */ title: '支付管理',
    isLeaf: true,
    noLeaf: true,
    path: '/admin/payment/information',
    children: [],
  },
  {
    id: '61',
    icon: 'activity',
    name: 'activity-information',
    /* markRaw(Setting), */ title: '活动管理',
    isLeaf: true,
    noLeaf: true,
    path: '/admin/activity/information',
    children: [],
  },
  {
    id: '71',
    icon: 'alert',
    name: 'alert-information',
    /* markRaw(Setting), */ title: '提醒设置',
    isLeaf: true,
    noLeaf: true,
    path: '/admin/alert/information',
    children: [],
  },
]

const filterMenu = (tree: IRouterRecord[]) => {
    const treeTmp: IRouterRecord[] = []
    tree.forEach((node: IRouterRecord) => {
        treeTmp.push(Object.assign(node, { children: filterMenu(node.children) }))
    })
    return treeTmp
}

const state = reactive({
    defaultActive: '11',
    defaultOpeneds: [],
    menus: filterMenu(menuSource),
})

const triggerMenuItem = (el: any, menu: IRouterRecord) => {
    state.defaultActive = menu.id
    router.push(menu.path!)
}

state.defaultActive = route.meta.relation as string;
</script>
  
<style lang="scss" scoped>
.w-278 {
    width: 278px;
}

.aside-wrap {
    :deep(.el-sub-menu__title:hover) {
        background-color: #002270;
        color: #ffffff;
    }

    :deep(.el-sub-menu__title:active) {
        background-color: #002270;
        color: #ffffff;
    }

    :deep(.el-menu-item:hover) {
        background-color: #002270;
        color: #ffffff;
    }

    :deep(.el-menu-item:active) {
        background-color: #002270;
        color: #ffffff;
    }

    :deep(.el-menu-item.is-active) {
        background-color: #003296;
        color: #ffffff;
    }
}

.pl-12 {
    padding-left: 48px !important;
}
</style>
  