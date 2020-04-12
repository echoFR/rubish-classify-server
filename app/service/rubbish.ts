import { Service } from 'egg';

export default class RubbishService extends Service {
  // 名称模糊查询
  public async getByName (name: string) {
    const { app } = this;
    const sql = `select * from rubbish where name like '%${name}%'`;
    return await app.mysql.query(sql);
  }
  
  public async getByNameOne (name: string) {
    const { app } = this;
    const sql = `select * from rubbish where name = '${name}'`;
    return await app.mysql.query(sql);
  }
  public async getByCategory (category: number) {
    const { app } = this;
    const sql = `select * from rubbish where category = ${category}`;
    return await app.mysql.query(sql);
  }
}
