/*
 * @Author: 赖伟强
 * @Date: 2023-04-04
 * @Description: 静态路由
 */

import { RouteRecordRaw } from 'vue-router'
import { HOME_URL, LOGIN_URL } from '@/config/index'

const LAYOUT = () => import('@/layout/index.vue')

/**
 * @description 静态路由
 */
export const staticRoutes: RouteRecordRaw[] = [
  {
    path: LOGIN_URL,
    name: 'login',
    meta: {
      isHide: true, // 是否sidebar展示
    },
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/404',
    name: '404',
    meta: {
      isHide: true,
    },
    component: () => import('@/views/error/404.vue'),
  },
  {
    path: '/',
    name: 'LAYOUT',
    component: LAYOUT,
    redirect: HOME_URL,
    meta: {
      title: '首页',
      icon: 'HomeFilled',
    },
    children: [
      {
        path: '/index',
        name: 'Index',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          icon: 'HomeFilled',
          affix: true, // 是否tabsbar固定
        },
      },
      {
        path: '/test',
        name: 'Test',
        component: () => import('@/views/test/index.vue'),
        meta: {
          title: '测试',
          icon: 'HomeFilled',
        },
      },
    ],
  },
  // 此路由防止控制台出现No match found for location with path的警告
  {
    path: '/:catchAll(.*)',
    meta: {
      isHide: true,
    },
    component: () => import('@/views/error/404.vue'), //这个是我自己的路径
  },
]

/**
 * @description 路由未找到
 */
export const notFoundRouter = {
  path: '/:pathMatch(.*)*',
  name: 'notFound',
  redirect: '404',
}
