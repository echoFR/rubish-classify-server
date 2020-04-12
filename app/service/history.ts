import { Service } from 'egg';

const table = 'user_collect_history'

export default class HistoryService extends Service {
  // 获取用户搜索记录
  public async getHistory () {
    const { ctx, app } = this;
    const { state: { user: { openid } } } = ctx;
    const sql = `select * from ${table} where openid = '${openid}' and type = ${1}`;
    return await app.mysql.query(sql);
  }

  public async updateHistory (list) {
    const { ctx, app } = this;
    const { state: { user: { openid } } } = ctx;
    await this.delectHistoryAll()
    const newList = list.map(item => ({
      ...item,
      openid,
    }));
    return await app.mysql.insert(table, newList);
  }
  // 删除全部搜索记录
  public async delectHistoryAll () {
    const { ctx, app } = this;
    const { state: { user: { openid } } } = ctx;
    const sql = `delete from ${table} where openid = '${openid}' and type = ${1}`;
    return await app.mysql.query(sql)
  }
}
