requirejs.config({
    paths: {
        angular : '../assets/lib/angular/angular.min',
        uiRouter: '../assets/lib/angular-ui-router/angular-ui-router.min',
        domReady: '../assets/lib/domReady/domReady',
        bytepushers_core: '../assets/lib/bytepushers/bytepushers-js-core.min',
        bytepushers_messaging: '../lib/bytepushers/bytepushers-js-messaging.min',
        bytepushers_restful: '../assets/lib/bytepushers/bytepushers-js-restful.min'
    },

    shim: {
        angular: {
            exports: 'angular'
        },
        uiRouter : {
            deps : ['angular']
        },
        bytepushers: {
            exports: 'BytePushers',
            deps: ['bytepushers_core', 'bytepushers_messaging', 'bytepushers_restful']
        },
        bytepushers_core: {
            exports: 'BytePushers'
        }
    },

    deps: ["./bootstrap"]
});