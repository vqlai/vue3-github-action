/**
 * @Author: 赖伟强
 * @Date：2023-03-11
 * @Description：缓存方法-长期localStorage，短期sessionStorage
 */

/**
 * @description 获取localStorage
 * @param {String} key Storage名称
 * @return string
 */
export function localGet(key: string) {
  const value = window.localStorage.getItem(key)
  try {
    return JSON.parse(value as string)
  } catch (error) {
    return value
  }
}

/**
 * @description 存储localStorage
 * @param {String} key Storage 名称
 * @param {any} value Storage值
 * @return void
 */
export function localSet(key: string, value: any) {
  window.localStorage.setItem(key, JSON.stringify(value))
}

/**
 * @description 删除某一项localStorage
 * @param {String} key Storage 名称
 * @return void
 */
export function localRemove(key: string) {
  window.localStorage.removeItem(key)
}

/**
 * @description 清除所有localSrorage
 * @return void
 */
export function localClear() {
  window.localStorage.clear()
}

/**
 * @description 获取sessionStorage
 * @param {String} key Storage名称
 * @return string
 */
export function sessionGet(key: string) {
  const value = window.sessionStorage.getItem(key)
  try {
    return JSON.parse(value as string)
  } catch (error) {
    return value
  }
}

/**
 * @description 存储sessionStorage
 * @param {String} key Storage 名称
 * @param {any} value Storage值
 * @return void
 */
export function sessionSet(key: string, value: any) {
  window.sessionStorage.setItem(key, JSON.stringify(value))
}

/**
 * @description 删除某一项sessionStorage
 * @param {String} key Storage 名称
 * @return void
 */
export function sessionRemove(key: string) {
  window.sessionStorage.removeItem(key)
}

/**
 * @description 清除所有sessionSrorage
 * @return void
 */
export function sessionClear() {
  window.sessionStorage.clear()
}
