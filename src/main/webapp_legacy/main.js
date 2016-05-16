requirejs.config({
    paths: {},

    shim: {
        angular: {
            exports: 'angular'
        },
        uiRouter : {
            deps : ['angular']
        },
        bytepushers_core: {
            exports: 'BytePushers'
        },
        bytepushers_messaging: {
            deps : ['bytepushers_core', 'angular']
        },
        bytepushers_restful: {
            deps : ['bytepushers_core', 'bytepushers_messaging']
        }
    },

    deps: [""]
});