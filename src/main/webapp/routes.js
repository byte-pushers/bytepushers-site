export default ($urlRouterProvider, $stateProvider) => {
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
          template: '<ui-view></ui-view>'
      })
      .state('works.portfolio',{
          parent:'works',
          url: '/portfolio',
          templateUrl: './components/works/portfolio/worksPortfolioView.html',
          controller:'WorksPortfolioController',
          controllerAs: 'ctrl'
      })
      .state('works.new',{
          parent:'works',
          url: '/new',
          templateUrl: './components/works/new/worksNewView.html',
          controller:'WorksNewController',
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
