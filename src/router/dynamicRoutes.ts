/*
 * @Author: 赖伟强
 * @Date: 2023-04-06
 * @Description: 动态路由
 */

import { RouteRecordRaw } from 'vue-router'

const LAYOUT = () => import('@/layout/index.vue')

export const dynamicRoutes: RouteRecordRaw[] = [
  {
    name: 'Test',
    path: '/test',
    component: LAYOUT,
    redirect: '/test2',
    meta: {
      title: '测试1',
      icon: 'Lock',
    },
    children: [
      {
        path: '/test1',
        name: 'Test1',
        component: () => import('@/views/test/index.vue'),
        meta: {
          title: 'test1',
          icon: 'Menu',
          affix: false,
        },
      },
      {
        path: '/test2',
        name: 'Test2',
        component: () => import('@/views/test/index.vue'),
        meta: {
          title: 'test2',
          icon: 'Menu',
          affix: false,
        },
      },
    ],
  },
  // {
  //   name: 'Test2',
  //   path: '/test2',
  //   component: LAYOUT,
  //   redirect: '/test2',
  //   meta: {
  //     title: '测试2',
  //     icon: 'Goods',
  //   },
  //   children: [],
  // },
]
