import { createApp } from 'vue'
import App from './App.vue'

import pinia from '@/stores/index'
import router from './router'
import 'virtual:svg-icons-register'
import customGlobComp from './components'
import directives from '@/directives/index'

import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue' // element-plus图标
import zhCn from 'element-plus/lib/locale/lang/zh-cn' //  element-plus中文

import 'element-plus/dist/index.css' // element默认主题
import '@/assets/styles/index.scss' // 公共样式

/** 加载异步路由 */
import '@/router/initDynamicRouter'

const app = createApp(App)

// 注册全部element-plus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 注册elementplus中文样式
app.use(ElementPlus, {
  locale: zhCn,
})

app.use(customGlobComp)

app.use(pinia)

app.use(router)

app.use(directives)

app.mount('#app')
