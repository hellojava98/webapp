//引用依赖angular-ui-router   http://www.jb51.net/article/78895.htm       http://blog.csdn.net/ligang2585116/article/details/50380343      http://www.cnblogs.com/haogj/p/4885928.html

angular.module("myApp")     
.config([
    "$stateProvider",
    "$urlRouterProvider",
    function ($stateProvider,$urlRouterProvider) {
        $stateProvider.state("home",{
            url:"/home",
            templateUrl:"./views/home.html",
            controller:"HomeController"
        }).state("market",{
            url:"/market/{type}",
            templateUrl:"./views/market.html",
            controller:"MarketController"
        }).state("cart",{
            url:"/cart",
            templateUrl:"./views/cart.html",
            controller:"CartController"
        }).state("mine",{
            url:"/mine",
            template:"<p>个人中心</p>"
        }).state("serch",{
            url:"/serch",
            templateUrl:"./views/serch.html"
        });
        $urlRouterProvider.otherwise("home");     //重定向
        //$urlRouterProvider.when("","/serch.html");
    }
]);