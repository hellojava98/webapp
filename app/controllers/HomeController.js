angular.module("myApp");
    app.controller("HomeController", ["$scope", "HomeService","$state", function ($scope, HomeService,$state) {
        $scope.bannerData = [];   //轮播图数据
        HomeService.getBannerData()
            .then(function (res) {
                console.log(res.data.data.slide);
                $scope.bannerData = res.data.data.slide;
            });
        $scope.jump=function (type) {
            console.log(type);
            $state.go("market",{
                type:type
            })
        }
    }]);