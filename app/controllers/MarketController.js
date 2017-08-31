// Mock.mock(rurl, template)    ajax拦截及数据生成
var data=Mock.mock("http://z.cn/getIteams.php?category=热销榜", {
    'data|30': [{
        'type': /(热销榜|天天特价|优选水果|牛奶面包|卤味熟食|酒水饮料|休闲零食|方便素食|生活用品|料油调味|肉蛋时蔬|冰冻冷鲜)/,
        'data|1': [{
            'id|+1': 1,
            'img': "@DataImage(200x200,phone)",
            'market_price|1-100.1-10': 1,
            'name': /(特仑苏|百事可乐|青海老酸奶|福建杨梅|海南香蕉|山西水蜜桃|油麦菜|青瓜|买包条)[A-Z]/,
            'pm_desc|0-1': {
                'val': '买一送一',
            },
            'price|1-100.1-10': 1,
            'specifics|10-500': 500
        }]
    }]
});
var data=Mock.mock("http://z.cn/getIteams.php?category=天天特价", {
    'data|5': [{
        'type': '天天特价',
        'data|1': [{
            'id|+1': 1,
            'img': "@DataImage(200x200,phone)",
            'market_price|1-100.1-10': 1,
            'name': /(特仑苏|百事可乐|青海老酸奶|福建杨梅|海南香蕉|山西水蜜桃|油麦菜|青瓜|面包条)[A-Z]/,
            'pm_desc|1': {
                'val': '天天特价'
            },
            'price|1-100.1-10': 1,
            'specifics|10-500': 500
        }]
    }]
});
var data=Mock.mock("http://z.cn/getIteams.php?category=优选水果", {
    'data|15': [{
        'type': '优选水果',
        'data|1': [{
            'id|+1': 1,
            'img': "@DataImage(200x200,phone)",
            'market_price|1-100.1-10': 1,
            'name': /(福建杨梅|海南香蕉|山西水蜜桃|西瓜|大枣|苹果)[A-Z]/,
            'pm_desc|0-1': {
                'val': '买一送一'
            },
            'price|1-100.1-10': 1,
            'specifics|10-500': 500
        }]
    }]
});
var data=Mock.mock("http://z.cn/getIteams.php?category=牛奶面包", {
    'data|10': [{
        'type': '牛奶面包',
        'data|1': [{
            'id|+1': 1,
            'img': "@DataImage(200x200,phone)",
            'market_price|1-100.1-10': 1,
            'name': /(特仑苏|伊利优酸乳|青海老酸奶|奶酪|提拉米苏|菠萝包|面包条)[A-Z]/,
            'pm_desc|0-1': {
                'val': '买一送一'
            },
            'price|1-100.1-10': 1,
            'specifics|10-500': 500
        }]
    }]
});
var data=Mock.mock("http://z.cn/getIteams.php?category=肉蛋时蔬", {
    'data|10': [{
        'type': '肉蛋时蔬',
        'data|1': [{
            'id|+1': 1,
            'img': "@DataImage(200x200,phone)",
            'market_price|1-100.1-10': 1,
            'name': /(农家鸡蛋|油麦菜|有机菠菜|福建竹笋|海南青瓜|进口牛肉)[A-Z]/,
            'pm_desc|0-1': {
                'val': '买一送一'
            },
            'price|1-100.1-10': 1,
            'specifics|10-500': 500
        }]
    }]
});
angular.module("myApp");
    app.controller("MarketController", ["$rootScope","$scope","MarketService","$stateParams","CartService",function ($rootScope,$scope,MarketService,$stateParams,CartService) {
        console.log($stateParams);
        $scope.marketData = [];   //商品数据
        $scope.type=$stateParams.type==0 ? "热销榜":$stateParams.type;

        $scope.getMarketData=function () {
            MarketService.getMarketData($scope.type)
                .then(function (res) {
                    console.log(res);
                    $scope.marketData =res.data.data;
                });
        };
        $scope.getMarketData();
        $scope.changeType=function (type) {
            console.log(type);
            $scope.type=type;
            $scope.getMarketData()
        };
        $scope.addToCart = function (item, e) {
            //console.log(item);
            var end = $(".footer_cart").offset();
            var img = $("<img/>").attr("src", item.data.img).css({width: 30, height: 30});
            img.fly({
                start: {
                    left: e.clientX - 20,  //开始位置（必填）#fly元素会被设置成position: fixed
                    top: e.clientY  //开始位置（必填）
                },
                end: {
                    left: end.left + 30, //结束位置（必填）
                    top: end.top - 5,  //结束位置（必填）
                    width: 20, //结束时高度
                    height: 20 //结束时高度
                },
                onEnd: function () {
                    img.remove(); //销毁抛物体
                }
            });
            $rootScope.cartNum=$rootScope.cartNum ? $rootScope.cartNum+=1:1;
            CartService.addToCart(item)
        }

    }]);
