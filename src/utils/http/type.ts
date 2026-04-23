// * 请求响应参数(不包含data)
export interface result {
  code: number
  message: string
  success?: boolean
}

// * 请求响应参数(包含data)
export interface resultData<T = any> extends result {
  data: T
}
