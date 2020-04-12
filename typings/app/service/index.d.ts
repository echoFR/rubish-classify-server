// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportCollect from '../../../app/service/collect';
import ExportHistory from '../../../app/service/history';
import ExportHome from '../../../app/service/home';
import ExportRubbish from '../../../app/service/rubbish';
import ExportSearch from '../../../app/service/search';
import ExportUser from '../../../app/service/user';

declare module 'egg' {
  interface IService {
    collect: AutoInstanceType<typeof ExportCollect>;
    history: AutoInstanceType<typeof ExportHistory>;
    home: AutoInstanceType<typeof ExportHome>;
    rubbish: AutoInstanceType<typeof ExportRubbish>;
    search: AutoInstanceType<typeof ExportSearch>;
    user: AutoInstanceType<typeof ExportUser>;
  }
}
