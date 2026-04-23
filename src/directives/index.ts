/*
 * @Author: 赖伟强
 * @Date: 2023-04-04
 * @Description: 自定义指令
 */

import { App, Directive } from 'vue'
import auth from './modules/auth'

const directivesList: any = {
  auth,
}

const directives = {
  install: (app: App<Element>) => {
    Object.keys(directivesList).forEach((key) => {
      // 注册指令
      // app.directive(key, directivesList[key])
      app.directive(key, (directivesList as { [key: string]: Directive })[key])
    })
  },
}

export default directives
