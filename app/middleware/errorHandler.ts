// 错误处理
export default () => {
  return async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      // 下级的中间件执行报错之后，在这里将错误捕获出来
      // ctx.app.emit('error', err, ctx); // 所有的异常都在 app 上触发一个 error 事件，框架会记录一条错误日志
      const status = err.status || 500;
      // 生产环境时 500 错误的详细错误内容不返回给客户端，因为可能包含敏感信息
      let error = status === 500 && ctx.app.config.env === 'prod' ?
        'Internal Server Error' :
        err.message;
      if (status === 413) {
        error = '请求数据过大';
      }
      // 从 error 对象上读出各个属性，设置到响应中
      ctx.body = {
        success: false,
        code: status,
        data: null,
        msg: error,
      };
    }
  };
};
