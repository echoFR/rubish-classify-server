import { Controller } from 'egg';
export default class SearchController extends Controller {

  public async getHotSearch () {
    const { ctx, service: { search } } = this;
    const data = await search.getHotSearch();
    ctx.body = {
      success: true,
      code: 200,
      data,
      msg: '热搜'
    }
  }

  public async addSearch () {
    const { ctx, service: { search } } = this;
    const { payload: { name } } = ctx;
    await search.addSearch(name)
    ctx.body = {
      success: true,
      code: 200,
      msg: '添加搜索',
    }
  }
}
