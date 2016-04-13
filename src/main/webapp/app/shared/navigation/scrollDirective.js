define(['./../directiveModule'], function(directives) {
    directives.directive("scroll", function($window) {
        return function(scope, element, attrs) {
            angular.element($window).bind("scroll", function() {
                if (!scope.scrollPosition) {
                    scope.scrollPosition = 0
                }

                /*todo: right now, navbar shifts up an absolute value. modified to fit dynamically based on screen size*/
                if (this.pageYOffset > 600) {
                    scope.boolChangeClass = true;
                    element.addClass('navbarModified');
                } else {
                    scope.boolChangeClass = false;
                    element.removeClass('navbarModified');
                }

                scope.scrollPosition = this.pageYOffset;
                scope.$apply();
            });
        };
    });
});