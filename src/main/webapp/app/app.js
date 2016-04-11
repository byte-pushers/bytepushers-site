define([
    'angular',
    'uiRouter',
    'index'
], function (angular) {
    return angular.module('app', ['app.controllers', 'app.directives', 'ui.router']);
});