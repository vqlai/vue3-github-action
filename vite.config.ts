// import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

import { viteMockServe } from 'vite-plugin-mock'

import { resolve } from 'path'

/** 路径查找 */
const pathResolve = (dir: string): string => {
  return resolve(__dirname, '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig((config: ConfigEnv) => {
  const { command, mode } = config
  const env = loadEnv(mode, process.cwd())

  return {
    base: './',
    plugins: [
      vue(),
      vueJsx(),
      viteMockServe({
        mockPath: 'mock',
        // 只在开发阶段开启 mock 服务,mock和后端服务器接口能共存，可以通过配置来区分
        localEnabled: command === 'serve',
      }),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
    ],
    resolve: {
      alias: {
        // 写法一
        // '@': fileURLToPath(new URL('./src', import.meta.url)), // 路径别名
        // 写法二
        '@': pathResolve('src'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/assets/styles/variable.scss";',
        },
      },
    },
    server: {
      host: '0.0.0.0',
      port: Number(env.VITE_APP_PORT),
      // proxy 是 'http-proxy'的实例
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: 'http://10.76.49.3:8081/', // 服务器ip，走mock数据，则baseUrl要加上/mock
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/dev-api/, ''),
          // configure: (proxy, options) => {},
        },
        // 代理websockets或socket.io 写法：ws://locakhost:5173/socket.io -> ws://localhost:5174/socket.io
        // '/socket.io': {
        //   target: '',
        //   ws: true,
        // }
      },
    },
    // vite打包时压缩代码有两种：1.eshuild 2.terser，默认启动的是eshuild，比terser快很多
    esbuild: {
      pure: ['console.log'], // 删除console.log
      drop: ['debugger'], // 删除debugger
    },
  }
})
