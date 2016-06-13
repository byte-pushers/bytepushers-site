import angular from 'angular';
import contact from './contact/contactService';
import works from './works/worksService';

export default angular.module('app.services', [])
    .service('ContactService', contact)
    .service('WorksService', works);
