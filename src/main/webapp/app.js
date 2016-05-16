import angular from 'angular';
import uiRouter from 'angular-ui-router';
import controllers from './components/controllerModule';
import directives from './shared/directives/directiveModule.js';

/*working on directives, troubleshooting bug. TODO: finish debugging directives, then continue working on contact page and send data to service*/

angular.module('app', [uiRouter, controllers.name, directives.name])
    .config(($urlRouterProvider, $stateProvider) => {
        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state('home',{
                url: '/home',
                templateUrl: './components/home/homeView.html',
                controller:'HomeController'
            })
            .state('services',{
                url: '/services',
                templateUrl: './components/services/servicesView.html',
                controller:'ServicesController'
            })
            .state('works',{
                url: '/works',
                templateUrl: './components/works/worksView.html',
                controller:'WorksController'
            })
            .state('about',{
                url: '/about',
                templateUrl: './components/about/aboutView.html',
                controller:'AboutController'
            })
            .state('contact',{
                url: '/contact',
                templateUrl: './components/contact/contactView.html',
                controller:'ContactController'
            });
    });