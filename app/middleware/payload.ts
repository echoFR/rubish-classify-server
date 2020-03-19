// get/post 请求数据整合 payload
export default () => {
  return async (ctx, next) => {
    const payload = { ...ctx.query, ...ctx.params, ...ctx.request.body };
    ctx.payload = payload;
    await next();
  };
};
