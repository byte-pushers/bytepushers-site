import 'tether';
import 'jquery';
import 'bootstrap';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routes from './routes';
import controllers from './components/controllerModule';
import services from './components/serviceModule';
import directives from './shared/directives/directiveModule.js';

angular.module('app', [uiRouter, controllers.name, services.name, directives.name])
    .config(routes);
