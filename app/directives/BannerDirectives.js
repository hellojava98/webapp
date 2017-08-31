angular.module("myApp")
    .directive("banner", function () {
        return {
            templateUrl: "./views/banner.html",
            $scope: {
                $bannerData: "="   //双向绑定
            },
            link: function ($scope, el, attrs) {
                console.log($scope.bannerData);
                $scope.$watch("bannerData", function (nVal,oVal) {
                    console.log("nVal-->"+nVal,"oVal-->"+oVal);
                    $scope.mySwiper = new Swiper('.swiper-container', {
                        autoplay: 5000,
                        paginationClickable: true
                    });
                })
            }
        }
    });
