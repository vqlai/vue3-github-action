/*
 * @Author: 赖伟强
 * @Date: 2023-04-10
 * @Description: 重置用户信息
 */
import { useUserStore } from '@/stores/modules/user'
import { useAuthStore } from '@/stores/modules/auth'

export function resetStore() {
  const userStore = useUserStore()
  const authStore = useAuthStore()

  userStore.$reset()
  authStore.$reset()
  // 清除用户信息缓存
  localStorage.removeItem('app-user')
}
