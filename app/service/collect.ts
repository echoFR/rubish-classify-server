import { Service } from 'egg';
const table = 'user_collect_history'

export default class CollectService extends Service {
  // 获取用户收藏
  public async getCollect (name) {
    const { ctx, app } = this;
    const { state: { user: { openid } } } = ctx;
    let sql = `select * from ${table} where openid = '${openid}' and type = ${0}`;
    if (name) sql += ` and name= '${name}'`
    return await app.mysql.query(sql);
  }

  public async addCollect (data) {
    const { ctx, app } = this;
    const { state: { user: { openid } } } = ctx;
    return await app.mysql.insert(table, {
      ...data,
      openid,
      type: 0
    });
  }
  // 删除单个收藏
  public async delectCollect (name: string) {
    const { ctx, app } = this;
    const { state: { user: { openid } } } = ctx;
    const sql = `delete from ${table} where openid = '${openid}' and type = ${0} and name = '${name}'`;
    return await app.mysql.query(sql)
  }
  // 删除全部收藏
  public async delectCollectAll () {
    const { ctx, app } = this;
    const { state: { user: { openid } } } = ctx;
    const sql = `delete from ${table} where openid = '${openid}' and type = ${0}`;
    return await app.mysql.query(sql)
  }
}
