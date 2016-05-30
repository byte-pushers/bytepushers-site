import angular from 'angular';
import about from './about/aboutController';
import contact from './contact/contactController';
import home from './home/homeController';
import services from './services/servicesController';
import worksPortfolio from './works/portfolio/worksPortfolioController';
import worksNew from './works/new/worksNewController';

export default angular.module('app.controllers', [])
    .controller('AboutController', about)
    .controller('ContactController', contact)
    .controller('HomeController', home)
    .controller('ServicesController', services)
    .controller('WorksPortfolioController', worksPortfolio)
    .controller('WorksNewController', worksNew);
