import angular from 'angular';
import 'angular-route';
import 'angular-base64-upload';

const app = angular.module('billplease', ['ngRoute', 'naif.base64']);

import mainCtrl from './controllers/main.controller';
import panelCtrl from './controllers/panel.controller';

app.controller('mainCtrl', mainCtrl);
app.controller('panelCtrl', panelCtrl);

import routeCfg from './configs/route.config';

app.config(routeCfg);
