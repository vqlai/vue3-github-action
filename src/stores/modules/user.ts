import { defineStore } from 'pinia'
import { getUserInfo, logout } from '@/api'
import type { userInfo } from '@/api/user/types'
import { useAuthStore } from './auth'
import { resetStore } from '@/utils/reset'

export interface userState {
  userInfo: Nullable<userInfo>
  token?: string
}

export const useUserStore = defineStore({
  id: 'app-user',
  state: (): userState => ({
    token: '',
    userInfo: null,
  }),
  actions: {
    // setToken
    setToken(token: string) {
      this.token = token
    },
    // setUserInfo
    setUserInfo(userInfo: userInfo) {
      this.userInfo = userInfo
    },
    async getUserInfoAction() {
      const { data } = await getUserInfo()
      const { avatar, buttons, name, roles, routes } = data
      const authStore = useAuthStore()
      // 存储用户信息
      this.setUserInfo({ avatar, name })
      // 存储用户权限信息
      authStore.setAuth({ buttons, roles, routes })
    },
    async Logout() {
      await logout()
      resetStore()
    },
  },
  // 设置为true，缓存state
  persist: true,
})
