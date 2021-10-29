/*
 * @Author: fuzhenghao
 * @Date: 2021-10-11 09:22:56
 * @LastEditTime: 2021-10-29 11:55:53
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_manage\config\routes.ts
 *
 */

import route_login from '../src/pages/login/routes';

export default [
  route_login,
  {
    path: '/',
    // exact: true,
    component: '@/pages/layouts/index.tsx',
  },
  // { component: '@/pages/404' },
];
