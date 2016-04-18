define([
    'angular',
    'uiRouter',
    'modules'
], function (angular) {
    return angular.module('app', ['app.controllers', 'app.directives', 'ui.router']);
});