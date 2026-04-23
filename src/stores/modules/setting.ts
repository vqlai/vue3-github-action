/*
 * @Author: 赖伟强
 * @Date: 2023-04-04
 * @Description: 系统设置
 */

import { defineStore } from 'pinia'
import { DEFAULT_PRIMARY } from '@/config/index'

export interface settingState {
  collapse: boolean
  refresh: boolean
  themeConfig: themeConfigProps
}

export interface themeConfigProps {
  primary: string
  isDark: boolean
}

export const useSettingStore = defineStore({
  id: 'app-setting',
  state: (): settingState => ({
    collapse: false,
    refresh: false, // 刷新页面
    themeConfig: {
      primary: DEFAULT_PRIMARY,
      isDark: false,
    },
  }),

  actions: {
    changeCollapse() {
      this.collapse = !this.collapse
    },
    setRefresh() {
      this.refresh = !this.refresh
    },
    setThemeConfig(themeConfig: themeConfigProps) {
      this.themeConfig = themeConfig
    },
  },
  persist: true,
})
