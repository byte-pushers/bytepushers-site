class scrollTopDirective {
  constructor() {}

  controller($scope, $rootScope) {
      $scope.$rootScope = $rootScope;
  }

  link(scope, element, attrs, ctrl) {
    scope.$rootScope.$on('$stateChangeSuccess', function() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
  }
}

scrollTopDirective.$inject = ['$scope', '$rootScope'];

export default scrollTopDirective;
