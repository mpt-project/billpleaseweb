import angular from 'angular';
import '@uirouter/angularjs';
import 'angular-base64-upload';
import 'babel-core/register';
import 'babel-polyfill';

const app = angular.module('billplease', ['ui.router', 'naif.base64']);

import runFunc from './configs/run';

app.run(runFunc);

/** Services */
import userService from './services/user.service';

app.factory('userService', userService);

/** Controllers */
import mainCtrl from './controllers/main.controller';
import panelCtrl from './controllers/panel.controller';

app.controller('mainCtrl', mainCtrl);
app.controller('panelCtrl', panelCtrl);

/** Configs */
import routeCfg from './configs/route.config';

app.config(routeCfg);
