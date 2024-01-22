import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { useAuthGuard } from "./guard";

const routes: readonly RouteRecordRaw[] = [
  {
    path: '',
    name: 'layout',
    component: () => import('@/components/Layout/index.vue'),
    children: [
      {
        path: '/admin',
        name: 'admin',
        meta: { key: 'admin' },
        children: [
          {
            path: 'center',
            name: 'user-center',
            meta: { key: 'user-center', title: '个人中心', to: '/admin/center' },
            component: () => import('@/views/admin/center/index.vue'),
          },
          {
            path: 'home',
            name: 'home-info',
            meta: { key: 'home-info', relation: '11', title: '系统首页', to: '/admin/home' },
            component: () => import('@/views/admin/home/index.vue'),
          },
          {
            path: 'book',
            name: 'book',
            meta: { key: 'book', relation: '2' },
            children: [
              {
                path: 'information',
                name: 'book-information',
                meta: { key: 'book-information', relation: '21', title: '图书管理', to: '/admin/book/information' },
                component: () => import('@/views/admin/book/info.vue'),
              },
              {
                path: 'detail/:aid',
                name: 'book-detail',
                meta: { key: 'book-detail', relation: '211', title: '书籍详情', to: '' },
                component: () => import('@/views/admin/book/detail.vue'),
              },
            ],
          },
          {
            path: 'user',
            name: 'user',
            meta: { key: 'book', relation: '3' },
            children: [
              {
                path: 'information',
                name: 'user-information',
                meta: { key: 'user-information', relation: '31', title: '用户管理', to: '/admin/user/information'},
                component: () => import('@/views/admin/user/info.vue'),
              },
              {
                path: 'add',
                name: 'user-add',
                meta:  {key: 'user-add', relation: '311', title: '新增用户', to: '/admin/user/add' },
                component: () => import('@/views/admin/user/add.vue'),
              },
            ],
          },
          {
            path: 'borrow',
            name: 'borrow-info',
            meta: { key: 'borrow-info', relation: '41', title: '借阅管理', to: '/admin/borrow' },
            component: () => import('@/views/admin/borrow/index.vue'),
          },
          {
            path: 'payment',
            name: 'payment',
            meta: { key: 'payment', relation: '5' },
            children: [
              {
                path: 'information',
                name: 'payment-information',
                meta: { key: 'payment-information', relation: '51', title: '支付管理', to: '/admin/payment/information'},
                component: () => import('@/views/admin/payment/info.vue'),
              },
              {
                path: 'detail/:aid',
                name: 'payment-detail',
                meta:  {key: 'payment-detail', relation: '511', title: '支付详情', to: '' },
                component: () => import('@/views/admin/payment/detail.vue'),
              },
            ],
          },
          {
            path: 'activity',
            name: 'activity',
            meta: { key: 'activity', relation: '6' },
            children: [
              {
                path: 'information',
                name: 'activity-information',
                meta: { key: 'activity-information', relation: '61', title: '活动管理', to: '/admin/activity/information'},
                component: () => import('@/views/admin/activity/info.vue'),
              },
              {
                path: 'add',
                name: 'activity-add',
                meta:  {key: 'activity-add', relation: '611', title: '新增活动', to: '/admin/activity/add' },
                component: () => import('@/views/admin/activity/add.vue'),
              },
            ],
          },
          {
            path: 'alert',
            name: 'alert',
            meta: { key: 'alert', relation: '7' },
            children: [
              {
                path: 'information',
                name: 'alert-information',
                meta: { key: 'alert-information', relation: '71', title: '提醒设置', to: '/admin/alert/information'},
                component: () => import('@/views/admin/alert/info.vue'),
              },
              {
                path: 'add',
                name: 'alert-add',
                meta:  {key: 'alert-add', relation: '711', title: '新增提醒', to: '/admin/alert/add' },
                component: () => import('@/views/admin/alert/add.vue'),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    meta: { title: '登录' },
    component: () => import('@/views/common/login/index.vue'),
  },
  {
    path: '/exception',
    name: 'exception',
    children: [
      {
        path: '/403',
        name: 'Forbidden',
        meta: { title: 'Forbidden' },
        component: () => import('@/views/common/exception/403.vue'),
      },
      {
        path: '/404',
        name: 'NotFound',
        meta: { title: 'NotFound' },
        component: () => import('@/views/common/exception/404.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)',
    name: 'non-exist',
    redirect: '/404',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

new useAuthGuard(router);

export default router;
