import { Controller } from 'egg';
export default class CollectController extends Controller {

  public async getCollect(){
    const { ctx, service: { collect } } = this;
    const { payload: { name } } = ctx
    const data = await collect.getCollect(name);
    ctx.body = {
      success: true,
      code: 200,
      data,
      msg: '用户收藏'
    }
  }

  public async addCollect(){
    const { ctx, service: { collect } } = this;
    const { payload: { data: newCollect } } = ctx
    const data = await collect.addCollect(newCollect);
    ctx.body = {
      success: true,
      code: 200,
      data,
      msg: '添加收藏'
    }
  }

  public async delectCollect () {
    const { ctx, service: { collect } } = this;
    const { payload: { name } } = ctx
    const data = await collect.delectCollect(name);
    ctx.body = {
      success: true,
      code: 200,
      data,
      msg: '删除收藏'
    }
  }
  
  public async delectCollectAll () {
    const { ctx, service: { collect } } = this;
    const data = await collect.delectCollectAll();
    ctx.body = {
      success: true,
      code: 200,
      data,
      msg: '删除所有收藏'
    }
  }
}
