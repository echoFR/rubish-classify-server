import { Service } from 'egg';
const practice_table = 'practice'
const result_table = 'practice_list'

export default class PracticeService extends Service {
  public async getAll () {
    const { ctx, app } = this;
    const { state: { user: { openid } } } = ctx;
    const sql = `select * from ${practice_table} where openid='${openid}'`
    const data = await app.mysql.query(sql);
    return data.map(({ openid, ...rest }) => rest)
  }

  public async getById (id) {
    const { app } = this;
    const sql = `select * from ${result_table} where practice_id = '${id}'`;
    const [data, list] = await Promise.all([
      app.mysql.get(practice_table, { id }),
      app.mysql.query(sql)
    ]);
    const { openid, ...info } = data
    return {
      ...info,
      list
    }
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
    await Promise.all([
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
}
