<template>
<ElScrollbar :style="{ height: `${height}px` }">
    <ElMenu
        class="aside-wrap border-r-0 my-3 w-278"
        :defaultActive="state.defaultActive"
        :defaultOpeneds="state.defaultOpeneds"
    >
        <template v-for="menu of state.menus" :key="menu.id">
            <template v-if="menu.isLeaf">
                <ElMenuItem
                    :class="{ 'pl-12': !menu.noLeaf }"
                    :index="menu.id"
                    @click="triggerMenuItem($event, menu)"
                >
                    <template #title>
                    <i class="gokuer text-lg mr-2 mb-1" :class="menu.icon" />
                    <span :data-cy="menu.name" class="text-base">{{ menu.title }}</span>
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
import store from '@/store'
import type { IRouterRecord } from '@/models'

defineProps({
    height: {
        type: Number,
        default: 0,
    },
});

const route = useRoute();
const router = useRouter();
const roleId = store.getters["userInfo"].roleId;

let menuSource: IRouterRecord[] = [];
if (roleId === 1) {
    menuSource = [
        {
            id: '1',
            icon: '',
            name: 'apply',
            /* markRaw(Notebook), */ title: '报名系统',
            isLeaf: false,
            children: [
                {
                    id: '11',
                    icon: '',
                    name: 'submit-apply',
                    /* markRaw(Lock), */ title: '提交报名信息',
                    path: '/student/apply/save',
                    isLeaf: true,
                    children: [],
                },
                {
                    id: '21',
                    icon: '',
                    name: 'apply-result',
                    /* markRaw(Lock), */ title: '我的申请',
                    path: '/student/result/information',
                    isLeaf: true,
                    children: [],
                },
            ],
        },
    ]
} else if (roleId === 2 || roleId === 3) {
    menuSource = [
        {
            id: '11',
            icon: '',
            name: 'user-manage',
            /* markRaw(Setting), */ title: '用户管理',
            isLeaf: true,
            noLeaf: true,
            path: '/auditor/user',
            children: [],
        },
        {
            id: '2',
            icon: '',
            name: 'approval',
            /* markRaw(Notebook), */ title: '报名管理',
            isLeaf: false,
            children: [
                {
                    id: '21',
                    icon: '',
                    name: 'apply-info',
                    /* markRaw(Lock), */ title: '报名信息',
                    path: '/auditor/approve/manage',
                    isLeaf: true,
                    children: [],
                },
                {
                    id: '22',
                    icon: '',
                    name: 'batch-setting',
                    /* markRaw(Share), */ title: '批次设置',
                    path: '/auditor/approve/batch',
                    isLeaf: true,
                    children: [],
                },
                {
                    id: '23',
                    icon: '',
                    name: 'system-logging',
                    /* markRaw(Share), */ title: '报名日志',
                    path: '/auditor/approve/log',
                    isLeaf: true,
                    children: [],
                },
            ],
        },
    ]
}

const filterMenu = (tree: IRouterRecord[]) => {
    const treeTmp: IRouterRecord[] = []
    tree.forEach((node: IRouterRecord) => {
        treeTmp.push(Object.assign(node, { children: filterMenu(node.children) }))
    })
    return treeTmp
}

const state = reactive({
    defaultActive: '',
    defaultOpeneds: ['1', '2'],
    menus: filterMenu(menuSource),
});

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
  