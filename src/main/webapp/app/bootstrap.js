define([
    'require',
    'angular',
    'app',
    'routes'
], function (require, angular) {
    require(['domReady!'], function (document) {
        angular.bootstrap(document, ['app']);
    });
});