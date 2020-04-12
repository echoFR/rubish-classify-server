import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  // /api 不需要携带 token
  router.get('/', controller.home.index);
  router.post('/api/login', controller.user.login);
  router.post('/api/home/voice', controller.home.voice);

  router.get('/auth/rubbish/initData', controller.rubbish.initData);
  router.get('/api/rubbish/name', controller.rubbish.getByName);
  router.get('/api/rubbish/nameOne', controller.rubbish.getByNameOne);
  router.get('/api/rubbish/category', controller.rubbish.getByCategory);

  router.get('/collect/all', controller.collect.getCollect);
  router.post('/collect/add', controller.collect.addCollect);
  router.post('/collect/delete', controller.collect.delectCollect);
  router.post('/collect/deleteAll', controller.collect.delectCollectAll);

  router.get('/history/all', controller.history.getHistory);
  router.post('/history/update', controller.history.updateHistory);
  router.post('/history/deleteAll', controller.history.delectHistoryAll);

  router.get('/api/search/gethot', controller.search.getHotSearch);
  router.post('/api/search/add', controller.search.addSearch);
};
