define([
    'require',
    'angular',
    'app',
    'states'
], function (require, angular) {
    require(['domReady!'], function (document) {
        angular.bootstrap(document, ['app']);
    });
});