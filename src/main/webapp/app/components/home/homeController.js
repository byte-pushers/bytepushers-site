define(['./../controllerModule'], function(controllers) {
    controllers.controller('homeController', ['$scope', function ($scope) {
        $scope.backgroundImg = 'http://everystockphoto.s3.amazonaws.com/california_cityscape_82108_o.jpg';
        $scope.img1 = 'https://upload.wikimedia.org/wikipedia/commons/6/67/Hoffl%C3%B6th(T%C3%B6Vo-Cl%C3%B6rath)-2(400x400).jpg';
        $scope.img2 = 'https://cdn.tutsplus.com/vector/uploads/2014/01/howtodrawbears-400x400.jpg';
        $scope.img3 = 'http://cdn-img.health.com/sites/default/files/styles/400x400/public/migration/img/web/2013/02/slides/breakfast-foods-400x400.jpg?itok=1h7iFRNF';
        $scope.contactImg = 'http://thumbs.dreamstime.com/z/technology-banner-2416704.jpg';
    }]);
});

