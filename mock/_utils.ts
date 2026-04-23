/*
 * @Author: 赖伟强
 * @Date: 2023-04-10
 * @Description: Mock工具函数
 */

import { resultEnum } from '../src/config/index'

/**
 * @description: 错误响应结构
 * @returns {*}
 */
export function resultError(
  message = 'Request failed',
  { code = resultEnum.ERROR, data = null } = {},
) {
  return {
    code,
    data,
    message,
    type: 'error',
  }
}

/**
 * @description: 成功响应结构
 * @returns {*}
 */
export function resultSuccess<T>(data: T, { message = 'ok' } = {}) {
  return {
    code: resultEnum.SUCCESS,
    data,
    message,
    type: 'success',
  }
}

export interface requestParams {
  method: string
  body: any
  headers?: { token?: string }
  query: any
}

/**
 * @description 本函数用于从request数据中获取token，请根据项目的实际情况修改
 * @return token
 */
export function getRequestToken({
  headers,
}: requestParams): string | undefined {
  return headers?.token
}
