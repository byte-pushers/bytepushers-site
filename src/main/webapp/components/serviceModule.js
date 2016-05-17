import angular from 'angular';
import contact from './contact/contactService';

export default angular.module('app.services', [])
    .service('ConctactService', contact);
