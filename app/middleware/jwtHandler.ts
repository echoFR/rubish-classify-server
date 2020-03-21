// token 处理
export default () => {
  return async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      // koa-jwt2 中间件验证不通过，会返回 401
      if (err.status === 401 && ctx) {
        ctx.body = {
          success: false,
          code: 401,
          data: null,
          msg: err.message,
        };
      } else {
        throw err;
      }
    }
  };
};
