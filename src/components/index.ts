/*
 * @Author: 赖伟强
 * @Date: 2023-04-04
 * @Description: 自定义组件全局安装
 */
import type { App, Component } from 'vue'

import { svgIcon } from './svgIcon'
import { switchDark } from './switchDark'

const Components: {
  [propName: string]: Component
} = {
  svgIcon,
  switchDark,
}

export default {
  install: (app: App) => {
    Object.keys(Components).forEach((key) => {
      app.component(key, Components[key])
    })
  },
}
