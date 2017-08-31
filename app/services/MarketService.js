angular.module("myApp");
    app.service("MarketService",["$http",function ($http) {
        this.getMarketData=function (type) {
            return $http.get("http://z.cn/getIteams.php?category="+type)
        }
    }]);