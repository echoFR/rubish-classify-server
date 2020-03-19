import { Service } from 'egg';

export default class UserService extends Service {
  // wx 登录获取 openid
  public async getVXOpenId(code: string) {
    const { ctx, config: { vx: { AppID, AppSecret } } } = this;
    const code2SessionUrl = `https://api.weixin.qq.com/sns/jscode2session?appid=${AppID}&secret=${AppSecret}&js_code=${code}&grant_type=authorization_code`;
    const reslut = await ctx.curl(code2SessionUrl, {
      method: 'GET',
      dataType: 'json',
    });
    if (reslut.data.errcode === -1) {
      throw new Error('系统繁忙，请稍候再试');
    }
    if (reslut.data.errcode === 40029) {
      throw new Error('code 无效');
    }
    if (reslut.data.errcode === 45011) {
      throw new Error('频率限制，每个用户每分钟100次');
    }
    return reslut.data;
  }

  public async getUserByOpenId(openid: string) {
    const { app } = this;
    return await app.mysql.get('users', { openid });
  }

  public async addUser(data) {
    const { app } = this;
    return await app.mysql.insert('users', data);
  }
}
