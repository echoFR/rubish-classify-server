import { Controller } from 'egg';
export default class PracticeController extends Controller {

  public async getAll(){
    const { ctx, service: { practice } } = this;
    const data = await practice.getAll();
    ctx.body = {
      success: true,
      code: 200,
      data,
      msg: '用户答题记录'
    }
  }

  public async getById(){
    const { ctx, service: { practice } } = this;
    const { payload: { id } } = ctx
    const data = await practice.getById(id);
    ctx.body = {
      success: true,
      code: 200,
      data,
      msg: '通过id获取答题记录'
    }
  }

  public async addPractice(){
    const { ctx, service: { practice } } = this;
    const { payload: { data: newPractice } } = ctx
    const data = await practice.addPractice(newPractice);
    ctx.body = {
      success: true,
      code: 200,
      data,
      msg: '添加用户答题记录'
    }
  }

  public async addVisitPractice(){
    const { ctx, service: { practice } } = this;
    const { payload: { data: newPractice } } = ctx
    const data = await practice.addPractice(newPractice);
    ctx.body = {
      success: true,
      code: 200,
      data,
      msg: '添加访客答题记录'
    }
  }
}
