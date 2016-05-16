define(['./../directiveModule'], function(directives) {
    directives.directive("scroll", function($rootScope) {
        return function(scope, element, attrs) {
            $rootScope.$on('$stateChangeSuccess', function() {
                document.body.scrollTop = document.documentElement.scrollTop = 0;
            });
        };
    });
});