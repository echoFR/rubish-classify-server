import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.home.sayHi('egg');
  }
  public async voice() {
    const { ctx, service: { home } } = this;
    const data = await home.voice_identify();
    ctx.body = {
      code: 200,
      success: true,
      data,
    };
  }
}
