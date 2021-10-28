/*
 * @Author: fuzhenghao
 * @Date: 2021-10-11 09:22:56
 * @LastEditTime: 2021-10-28 16:18:02
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_manage\config\routes.ts
 *
 */

export default [
  {
    path: '/',
    component: '@/pages/index.tsx',
    layouts: '@/pages/layouts',
    routes: [
      {
        path: '/index',
        redirect: '/',
      },
    ],
  },
];
