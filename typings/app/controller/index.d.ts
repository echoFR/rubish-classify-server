// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCollect from '../../../app/controller/collect';
import ExportHistory from '../../../app/controller/history';
import ExportHome from '../../../app/controller/home';
import ExportPractice from '../../../app/controller/practice';
import ExportRubbish from '../../../app/controller/rubbish';
import ExportSearch from '../../../app/controller/search';
import ExportUser from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    collect: ExportCollect;
    history: ExportHistory;
    home: ExportHome;
    practice: ExportPractice;
    rubbish: ExportRubbish;
    search: ExportSearch;
    user: ExportUser;
  }
}
