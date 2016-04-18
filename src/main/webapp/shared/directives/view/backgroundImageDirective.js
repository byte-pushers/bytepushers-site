define(['./../directiveModule'], function(directives) {
    directives.directive('backgroundImage', function(){
        return function(scope, element, attrs){
            attrs.$observe('backgroundImage', function(value) {
                element.css({
                    'background': 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(' + value +')',
                    'background-size' : 'cover',
                    'padding-bottom': '60%',
                    'background-attachment': 'fixed'
                });
            });
        };
    });
});