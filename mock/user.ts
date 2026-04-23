// mock/user.ts
import { resultError, resultSuccess, getRequestToken } from './_utils'

function createUserList() {
  return [
    {
      userId: 1,
      avatar: '/logo.png',
      username: 'admin',
      password: '111111',
      desc: '平台管理员',
      roles: ['平台管理员'],
      buttons: ['cuser.detail'],
      routes: ['Index', 'Test', 'Test1', 'Test2'],
      token: 'Admin Token',
    },
    {
      userId: 2,
      avatar: '/logo.png',
      username: 'system',
      password: '111111',
      desc: '系统管理员',
      roles: ['系统管理员'],
      buttons: ['cuser.detail', 'cuser.user'],
      routes: ['Test1', 'Test2'],
      token: 'System Token',
    },
  ]
}

export default [
  // 用户登录
  {
    url: '/dev-api/mock/user/login',
    method: 'post',
    response: ({ body }) => {
      const { username, password } = body
      const checkUser = createUserList().find(
        (item) => item.username === username && item.password === password,
      )
      if (!checkUser) {
        return resultError('Incorrect username or password！')
      }
      const { token } = checkUser
      return resultSuccess({
        token,
      })
    },
  },
  // 用户退出
  {
    url: '/dev-api/mock/user/logout',
    method: 'post',
    response: ({ body }) => {
      return resultSuccess({
        success: true,
      })
    },
  },
  // 获取用户信息
  {
    url: '/dev-api/mock/user/info',
    method: 'get',
    response: (request: any) => {
      const token = getRequestToken(request)
      const checkUser = createUserList().find((item) => item.token === token)
      console.log(checkUser)
      if (!checkUser) {
        return resultError(
          'The corresponding user information was not obtained!',
        )
      }
      return resultSuccess(checkUser)
    },
  },
  // 一个失败的请求
  {
    url: '/dev-api/mock/error',
    method: 'get',
    response: () => {
      return {
        code: 1,
        message: '密码错误',
        data: null,
      }
    },
  },
]
