import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import { vx, mysql, jwt } from '../userConfig';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1584117536042_4683';

  // add your egg config in here
  config.middleware = [ 'payload', 'jwtHandler', 'jwt', 'errorHandler' ];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  const userConfig = {
    cors: {
      origin: ctx => ctx.get('origin'), // '*'
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    },
    security: {
      csrf: {
        enable: false,
      },
    },
    mysql: {
      client: {
        ...mysql,
      },
      // 是否加载到 app 上，默认开启
      app: true,
      // 是否加载到 agent 上，默认关闭
      agent: false,
    },
    vx,
    jwt: {
      ...jwt,
      unless: { path: [ '/', '/login' ] },
    },
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...userConfig,
    ...bizConfig,
  };
};
