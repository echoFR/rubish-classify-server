import { Service } from 'egg';
const practice_table = 'practice'
const result_table = 'practice_list'

export default class PracticeService extends Service {
  public async getAll () {
    const { app } = this;
    return await app.mysql.query(`select * from ${practice_table}`);
  }

  public async getById (id) {
    const { app } = this;
    let sql = `select * from ${practice_table} where id = ${id}`;
    return await app.mysql.query(sql);
  }

  public async addPractice (practice) {
    const { ctx, app } = this;
    const { state } = ctx;
    const { list, ...newRest } = practice
    let newRow = { ...newRest }
    if (state && state.user) {
      const { openid } = state.user
      newRow = Object.assign({}, newRow, { openid })
    }
    const newList = list.map(item => ({
      ...item,
      practice_id: newRest.id
    }))
    Promise.all([
      app.mysql.insert(practice_table, {
        ...newRow,
      }), app.mysql.insert(result_table, newList)
    ])
    return {
      newRow,
      newList,
      app,
    }
  }
  public async delectPractice (id) {
    const { ctx, app } = this;
    const { state: { user: { openid } } } = ctx;
    const sql = `delete from ${practice_table} where openid = '${openid}' and id = ${id}`;
    return await app.mysql.query(sql)
  }
}
