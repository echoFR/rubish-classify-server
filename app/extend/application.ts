import * as jwt from 'jsonwebtoken';
const JWT = Symbol('Application#jwt');

module.exports = {
  get jwt() {
    if (!this[JWT]) {
      const { config: { jwt: { secret: secret_config, expiresIn, verify = {} } } } = this;
      this[JWT] = {};
      this[JWT].sign = (
        payload,
        secret = secret_config,
        options = { expiresIn },
      ) => {
        return jwt.sign(payload, secret, options);
      };

      this[JWT].verify = (
        token,
        secret = secret_config,
        options = { expiresIn },
      ) => {
        return jwt.verify(token, secret, {
          ...verify,
          ...options,
        });
      };
    }
    return this[JWT];
  },
};
