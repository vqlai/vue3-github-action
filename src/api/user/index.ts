/*
 * @Author: 赖伟强
 * @Date: 2023-04-08
 * @Description: 系统用户登陆信息接口
 */
import http from '@/utils/http'
import type { loginData, userRes } from './types'

/**
 * 登录
 */
export function login(data: loginData) {
  return http.post<{ token: string }>('/user/login', data)
}

/**
 * 获取登录用户信息
 */
export function getUserInfo() {
  return http.get<userRes>('/user/info')
}

/**
 * 退出登陆
 */
export function logout() {
  return http.post<void>('/user/logout')
}
