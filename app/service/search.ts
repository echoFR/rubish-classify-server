import { Service } from 'egg';

export default class SearchService extends Service {
  // 获取用户搜索记录
  public async getHotSearch () {
    const { app } = this;
    const sql = `select * from search order by count desc limit 10`;
    return await app.mysql.query(sql);
  }

  public async addSearch (name) {
    const { app } = this;
    const cur = await app.mysql.get('search', { name });
    if (cur) {
      const newRow = {
        ...cur,
        count: ++cur.count
      };
      return await app.mysql.update('search', newRow);
    }
    return await app.mysql.insert('search', {
      name,
      count: 1
    });
  }
}
