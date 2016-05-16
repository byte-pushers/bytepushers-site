define(['./../controllerModule', './../../js/Inquiry.js'], function(controllers, inquire) {
    controllers.controller('contactController', ['$scope', function ($scope) {
        $scope.img = 'http://www.hdwallpapera.com/wp-content/uploads/2015/06/nature-image-mountain-home-ar.jpg';
        $scope.inquiryUIObject = new inquire.Inquiry().toUIObject();

        $scope.click = function(isValid) {
            console.log($scope.inquiryUIObject);
        }
    }]);
});

