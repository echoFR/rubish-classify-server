import { Controller } from 'egg';
export default class UserController extends Controller {
  public async login() {
    const { ctx, app, service: { user }, config: { jwt: {
      secret,
    } } } = this;
    const { payload } = ctx;
    const { code, userInfo } = payload;
    try {
      const vxOpenData = await user.getVXOpenId(code);
      const { openid } = vxOpenData;
      if (openid) {
        const userData = await user.getUserByOpenId(openid);
        // 用户不存在，添加
        if (!userData) {
          const res = await user.addUser({
            ...userInfo,
            openid,
          });
          if (res.affectedRows !== 1) {
            throw new Error('mysql 添加用户失败');
          }
        }
        // 设置 token
        const token = app.jwt.sign(
          { openid },
          secret,
        );
        ctx.body = {
          success: true,
          code: 200,
          data: {
            ...userInfo,
            token,
          },
          msg: '登录成功',
        };
      } else {
        throw new Error('用户验证失败，请重新登录');
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}
