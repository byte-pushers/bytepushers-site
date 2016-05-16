import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routes from './routes';
import controllers from './components/controllerModule';
import directives from './shared/directives/directiveModule.js';

angular.module('app', [uiRouter, controllers.name, directives.name])
    .config(routes);
