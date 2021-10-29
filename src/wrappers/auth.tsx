/*
 * @Author: fuzhenghao
 * @Date: 2021-10-29 10:42:59
 * @LastEditTime: 2021-10-29 10:43:00
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_manage\src\wrappers\auth.ts
 */
import { Redirect } from 'umi';

export default (props) => {
  const { isLogin } = useAuth();
  if (isLogin) {
    return <div>{props.children}</div>;
  } else {
    return <Redirect to="/login" />;
  }
};

function useAuth(): { isLogin: any } {
  return { isLogin: false };
}
