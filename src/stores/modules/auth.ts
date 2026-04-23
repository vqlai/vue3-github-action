import { defineStore } from 'pinia'

/** 用户权限数据类型 */
export interface authInfo {
  buttons: string[]
  roles: string[]
  routes: string[]
}

/* authState */
export interface authState {
  routeName: string
  roles: string[]
  authButtonList: string[]
  authMenuList: Menu.MenuOptions[]
  authRouterList: string[]
}

export const useAuthStore = defineStore({
  // id: 必须的，在所有 Store 中唯一
  id: 'app-auth',
  state: (): authState => ({
    // 当前页面的 router name，用来做按钮权限筛选
    routeName: '',
    // 后端返回的用户角色列表
    roles: [],
    // 后端返回的按钮权限列表
    authButtonList: [],
    // 后端返回的路由列表
    authRouterList: [],
    // 处理之后侧边栏菜单列表
    authMenuList: [],
  }),
  actions: {
    // setRouteName
    setRouteName(name: string) {
      this.routeName = name
    },

    resetAuth() {
      this.authRouterList = []
    },
    // 设置用户权限信息
    setAuth(authInfo: authInfo) {
      this.roles = authInfo.roles
      this.authButtonList = authInfo.buttons
      this.authRouterList = authInfo.routes
    },
    setAuthMenuList(list: Menu.MenuOptions[]) {
      this.authMenuList = list
    },
  },
})
