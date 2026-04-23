/* 登录接口参数类型 */
export interface loginData {
  username: string
  password: string
}

export interface userRes {
  userId?: string
  name: string
  avatar: string
  buttons: string[]
  roles: string[]
  routes: string[]
}

/** 用户权限数据类型 */
export interface authInfo {
  buttons: string[]
  roles: string[]
  routes: string[]
}

/* 用户信息接口返回值类型 */
export interface userInfo {
  userId?: string
  name: string
  avatar: string
}
