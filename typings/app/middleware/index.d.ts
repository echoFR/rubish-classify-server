// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportErrorHandler from '../../../app/middleware/errorHandler';
import ExportJwt from '../../../app/middleware/jwt';
import ExportJwtHandler from '../../../app/middleware/jwtHandler';
import ExportPayload from '../../../app/middleware/payload';

declare module 'egg' {
  interface IMiddleware {
    errorHandler: typeof ExportErrorHandler;
    jwt: typeof ExportJwt;
    jwtHandler: typeof ExportJwtHandler;
    payload: typeof ExportPayload;
  }
}
