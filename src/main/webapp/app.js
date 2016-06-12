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

import Address from './assets/js/Address';

angular.module('app', [uiRouter, angularJSData, controllers.name, services.name, directives.name])
    .config(routes)
    .run((DS) => {
      /*really easy to put in controller, look at worksPorfolio for example. Next: configure resources*/

      // DS is the result of `new JSData.DS()`

      // We don't register the "User" resource
      // as a service, so it can only be used
      // via DS.<method>('user', ...)
      // The advantage here is that this code
      // is guaranteed to be executed, and you
      // only ever have to inject "DS"
      DS.defineResource({
        name: 'address',
        useClass: Address
      });
      DS.defineResource('inquiry');
      DS.defineResource('work');
    });
