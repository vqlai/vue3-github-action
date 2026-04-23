// 全局不动配置项 只读不修改

// * 首页地址（默认）
export const HOME_URL = '/index'

// * 登录页地址（默认）
export const LOGIN_URL = '/login'

// * 默认主题颜色
export const DEFAULT_PRIMARY = '#409EFF'

// * 路由白名单地址（必须是本地存在的路由 staticRouter.ts）
export const ROUTER_WHITE_LIST: string[] = ['login', '/404']

// * 高德地图 key
export const AMAP_MAP_KEY = ''

// * 百度地图 key
export const BAIDU_MAP_KEY = ''

/**
 * @description: 响应结果-http请求枚举值
 * @argument SUCCESS  请求成功
 * @argument EXPIRE   token请求失效或校验失败
 * @argument ERROR    请求错误
 * @argument TIMEOUT  请求超时
 * @argument TYPE     请求类型
 */
export enum resultEnum {
  SUCCESS = 200,
  EXPIRE = 203,
  ERROR = -1,
  ERRMESSAGE = '请求失败',
  TIMEOUT = 25000,
  TYPE = 'success',
}
