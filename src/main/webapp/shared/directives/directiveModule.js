import angular from 'angular';
import BackgroundImageDirective from './view/backgroundImageDirective'
import ScrollNavbarDirective from './navigation/scrollNavbarDirective'
import ScrollTopDirective from './navigation/scrollTopDirective'

export default angular.module('app.directives', [])
    .directive('backgroundImage', () => new BackgroundImageDirective)
    .directive('scrollNavbar', () => new ScrollNavbarDirective)
    .directive('scrollTop', () => new ScrollTopDirective);
