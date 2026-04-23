/*
 * @Author: 赖伟强
 * @Date: 2023-04-04
 * @Description: axios请求封装
 */
import axios from 'axios'
import type {
  AxiosInstance,
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/modules/user'
import { resultEnum } from '@/config/index'
import { resultData } from './type'
import { LOGIN_URL } from '@/config/index'
import { resetStore } from '../reset'
import router from '@/router'

const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: resultEnum.TIMEOUT as number,
})

/**
 * @description: 请求拦截器
 * @returns {*}
 */
service.interceptors.request.use(
  (config) => {
    const userStore = useUserStore()
    const token = userStore.token
    if (token) {
      config.headers.token = token
    }
    return config
  },
  (error: AxiosError) => {
    ElMessage.error(error.message)
    return Promise.reject(error)
  },
)
/**
 * @description: 响应拦截器
 * @returns {*}
 */
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const { data, config } = response
    // 文件流，直接放过
    if (config.responseType === 'blob') {
      return response
    }
    // * 登陆失效（code == 203）
    if (data.code === resultEnum.EXPIRE) {
      resetStore()
      ElMessage.error(data.message || resultEnum.ERRMESSAGE)
      router.replace(LOGIN_URL)
      return Promise.reject(data)
    }

    if (data.code && data.code !== resultEnum.SUCCESS) {
      ElMessage.error(data.message || resultEnum.ERRMESSAGE)
      return Promise.reject(data)
    }
    return data
  },
  (error: AxiosError) => {
    // 处理 HTTP 网络错误
    let message = ''
    // HTTP 状态码
    const status = error.response?.status
    switch (status) {
      case 401:
        message = 'token 失效，请重新登录'
        break
      case 403:
        message = '拒绝访问'
        break
      case 404:
        message = '请求地址错误'
        break
      case 500:
        message = '服务器故障'
        break
      default:
        message = '网络连接故障'
    }

    ElMessage.error(message)
    return Promise.reject(error)
  },
)

/**
 * @description: 导出封装的请求方法
 * @returns {*}
 */
const http = {
  get<T>(
    url: string,
    params?: object,
    config?: AxiosRequestConfig,
  ): Promise<resultData<T>> {
    return service.get(url, { params, ...config })
  },

  post<T>(
    url: string,
    data?: object,
    config?: AxiosRequestConfig,
  ): Promise<resultData<T>> {
    return service.post(url, data, config)
  },

  put<T>(
    url: string,
    data?: object,
    config?: AxiosRequestConfig,
  ): Promise<resultData<T>> {
    return service.put(url, data, config)
  },

  delete<T>(
    url: string,
    data?: object,
    config?: AxiosRequestConfig,
  ): Promise<resultData<T>> {
    return service.delete(url, { data, ...config })
  },
}

export default http
