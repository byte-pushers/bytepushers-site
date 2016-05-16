const Routes = ($urlRouterProvider, $stateProvider) => {
    $urlRouterProvider.otherwise("/home");

    $stateProvider
      .state('home',{
          url: '/home',
          templateUrl: './components/home/homeView.html',
          controller:'HomeController'
      })
      .state('services',{
          url: '/services',
          templateUrl: './components/services/servicesView.html',
          controller:'ServicesController'
      })
      .state('works',{
          url: '/works',
          templateUrl: './components/works/worksView.html',
          controller:'WorksController'
      })
      .state('about',{
          url: '/about',
          templateUrl: './components/about/aboutView.html',
          controller:'AboutController'
      })
      .state('contact',{
          url: '/contact',
          templateUrl: './components/contact/contactView.html',
          controller:'ContactController'
      });
}

Routes.$inject = ['$urlRouterProvider', '$stateProvider'];

export default Routes;
