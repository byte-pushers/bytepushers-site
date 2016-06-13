import 'tether';
import 'jquery';
import 'bootstrap';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import JSData from 'js-data';
import angularJSData from 'js-data-angular'
import controllers from './components/controllerModule';
import services from './components/serviceModule';
import directives from './shared/directives/directiveModule';
import routes from './routes';
import store from './store';

angular.module('app', [uiRouter, angularJSData, controllers.name, services.name, directives.name])
    .config(routes)
    .run(store);
