/*
 * @Author: 赖伟强
 * @Date: 2023-04-04
 * @Description: 路由入口文件
 */
import {
  createRouter,
  createWebHashHistory, // createWebHistory
  RouteRecordRaw,
} from 'vue-router'
import { staticRoutes } from './constantRoutes'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  // history: createWebHashHistory(),
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: staticRoutes as RouteRecordRaw[],
  scrollBehavior: () => ({ left: 0, top: 0 }), // 刷新时，滚动条位置还原
})

export default router
