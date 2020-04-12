import { Controller } from 'egg';
export default class CollectController extends Controller {

  public async getCollect(){
    const { ctx, service: { collect } } = this;
    // const data = await collect.getCollect(name);
    ctx.body = {
      success: true,
      code: 200,
      // data,
      collect,
      msg: '用户收藏'
    }
  }

  public async addCollect(){
    const { ctx, service: { collect } } = this;
    // const data = await collect.addCollect(name);
    ctx.body = {
      success: true,
      code: 200,
      // data,
      collect,
      msg: '添加收藏'
    }
  }

  public async delectCollect () {

  }
  
  public async delectCollectAll () {
    
  }
}
