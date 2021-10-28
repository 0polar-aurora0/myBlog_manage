/*
 * @Author: fuzhenghao
 * @Date: 2021-10-27 15:26:02
 * @LastEditTime: 2021-10-28 15:22:58
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_manage\.umirc.ts
 */
import { defineConfig } from 'umi';
import routes from './config/routes';

export default defineConfig({
  mfsu: {
    development: {
      output: './.mfsu-dev',
    },
    production: {
      output: './.mfsu-prod',
    },
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  dynamicImport: { loading: '@/components/PreLoading/index' },
  proxy: {
    '/login': {
      target: 'http://192.168.20.115:7001',
      secure: false,
      changeOrigin: true,
    },
    '/logout': {
      target: 'http://192.168.20.115:7001',
      secure: false,
      changeOrigin: true,
    },
    '/api/*': {
      target: 'http://192.168.20.115:7001',
      secure: false, // 接受 运行在 https 上的服务
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    },
    '/sws/*': {
      target: 'http://192.168.20.115:7001',
      secure: false, // 接受 运行在 https 上的服务
      changeOrigin: true,
      pathRewrite: { '^/sws': '' },
      ws: true,
    },
  },
});
