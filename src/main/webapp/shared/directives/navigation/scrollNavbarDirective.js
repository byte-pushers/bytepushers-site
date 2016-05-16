import angular from 'angular';

class scrollNavbarDirective {
  constructor() {}

  controller($scope, $window) {
    $scope.$window = $window;
  }

  link(scope, element, attrs, ctrl) {
    angular.element(scope.$window).bind("scroll", function() {
        /*todo: right now, navbar shifts up an absolute value. modified to fit dynamically based on screen size?*/
        if (this.pageYOffset > 600) {
            element.addClass('navbarModified');
        } else {
            element.removeClass('navbarModified');
        }
        scope.$apply();
    });
  }
}

scrollNavbarDirective.$inject = ['$scope', '$window'];

export default scrollNavbarDirective;
