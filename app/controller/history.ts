import { Controller } from 'egg';
export default class HistoryController extends Controller {

  public async getHistory () {
    const { ctx, service: { history } } = this;
    const data = await history.getHistory();
    ctx.body = {
      success: true,
      code: 200,
      data,
      msg: '用户历史记录'
    }
  }

  public async updateHistory () {
    const { ctx, service: { history } } = this;
    const { payload: { list } } = ctx
    const data = await history.updateHistory(list);
    ctx.body = {
      success: true,
      code: 200,
      data,
      msg: '更新用户历史记录'
    }
  }

  public async delectHistoryAll () {
    const { ctx, service: { history } } = this;
    const data = await history.delectHistoryAll();
    ctx.body = {
      success: true,
      code: 200,
      data,
      msg: '删除用户历史记录'
    }
  }
}
