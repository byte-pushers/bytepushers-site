const Routes = ($urlRouterProvider, $stateProvider) => {
    $urlRouterProvider.otherwise("/home");

    $stateProvider
      .state('home',{
          url: '/home',
          templateUrl: './components/home/homeView.html',
          controller:'HomeController',
          controllerAs: 'ctrl'
      })
      .state('services',{
          url: '/services',
          templateUrl: './components/services/servicesView.html',
          controller:'ServicesController',
          controllerAs: 'ctrl'
      })
      .state('works',{
          url: '/works',
          templateUrl: './components/works/worksView.html',
          controller:'WorksController',
          controllerAs: 'ctrl'
      })
      .state('about',{
          url: '/about',
          templateUrl: './components/about/aboutView.html',
          controller:'AboutController',
          controllerAs: 'ctrl'
      })
      .state('contact',{
          url: '/contact',
          templateUrl: './components/contact/contactView.html',
          controller:'ContactController',
          controllerAs: 'ctrl'
      });
}

Routes.$inject = ['$urlRouterProvider', '$stateProvider'];

export default Routes;
