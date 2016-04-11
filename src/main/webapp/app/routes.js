define(['app'], function(app) {
    'use strict';
    return app.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state('home',{
                url: '/home',
                templateUrl: 'app/components/home/homeView.html',
                controller:'homeController'
            })
            .state('services',{
                url: '/services',
                templateUrl: 'app/components/services/servicesView.html',
                controller:'servicesController'
            })
            .state('works',{
                url: '/works',
                templateUrl: 'app/components/works/worksView.html',
                controller:'worksController'
            })
            .state('about',{
                url: '/about',
                templateUrl: 'app/components/about/aboutView.html',
                controller:'aboutController'
            })
            .state('contact',{
                url: '/contact',
                templateUrl: 'app/components/contact/contactView.html',
                controller:'contactController'
            });
    });
});