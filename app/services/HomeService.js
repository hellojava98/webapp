angular.module("myApp")
.service("HomeService",["$http",function ($http) {
    this.getBannerData=function () {
        return $http.get("././ServerPhp/serverjson.php")
    }
}]);