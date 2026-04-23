/*
 * @Author: 赖伟强
 * @Date: 2023-04-04
 * @Description: 状态管理
 */

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
// 持久化缓存state
pinia.use(piniaPluginPersistedstate)

export default pinia
