import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.post('/api/login', controller.user.login);
  router.post('/api/home/voice', controller.home.voice);

  router.get('/auth/rubbish/initData', controller.rubbish.initData);
  router.get('/api/rubbish/name', controller.rubbish.getByName);
  router.get('/api/rubbish/category', controller.rubbish.getByCategory);
};
