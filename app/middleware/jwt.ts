import * as jwt from 'koa-jwt2';
// options - app.config[${middlewareName}]
module.exports = options => {
  return jwt(options).unless(options.unless);
};
