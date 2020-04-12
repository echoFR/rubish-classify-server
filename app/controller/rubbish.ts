import { Controller } from 'egg';
import * as path from 'path';
import * as fs from 'fs';
export default class RubbishController extends Controller {
  public async initData() {
    const { ctx, app } = this;
    const filePath =  path.join(__dirname, '..', 'garbage.json');
    const res = fs.readFileSync(filePath, 'utf8' )
    const data = res && JSON.parse(res)
    const result = await app.mysql.insert('rubbish', data);
    ctx.body = {
      result,
      data
    }
  }
  public async getByName(){
    const { ctx, service: { rubbish } } = this;
    const { payload: { name } } = ctx;
    const data = await rubbish.getByName(name);
    ctx.body = {
      success: true,
      code: 200,
      data,
      msg: '按名称模糊查找垃圾'
    }
  }
  public async getByNameOne(){
    const { ctx, service: { rubbish } } = this;
    const { payload: { name } } = ctx;
    const data = await rubbish.getByNameOne(name);
    ctx.body = {
      success: true,
      code: 200,
      data,
      msg: '按名称查找垃圾'
    }
  }
  public async getByCategory(){
    const { ctx, service: { rubbish } } = this;
    const { payload: { category } } = ctx;
    const data = await rubbish.getByCategory(category);
    ctx.body = {
      success: true,
      code: 200,
      data,
      msg: '按分类查找垃圾'
    }
  }
}
