define(['app'], function(app) {
    'use strict';
    return app.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state('home',{
                url: '/home',
                templateUrl: 'components/home/homeView.html',
                controller:'homeController'
            })
            .state('services',{
                url: '/services',
                templateUrl: 'components/services/servicesView.html',
                controller:'servicesController'
            })
            .state('works',{
                url: '/works',
                templateUrl: 'components/works/worksView.html',
                controller:'worksController'
            })
            .state('about',{
                url: '/about',
                templateUrl: 'components/about/aboutView.html',
                controller:'aboutController'
            })
            .state('contact',{
                url: '/contact',
                templateUrl: 'components/contact/contactView.html',
                controller:'contactController'
            });
    });
});