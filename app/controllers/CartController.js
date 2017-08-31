angular.module("myApp");
app.controller("CartController", ["$scope","CartService",function ($scope,CartService) {
    $scope.cartItems = [];
    $scope.cartItems=CartService.getCartData();
    //console.log($scope.cartItems)
    $scope.totalPrice=function () {
        var total=0;
        for(var key in $scope.cartItems){
            var item=$scope.cartItems[key];
            total+=item.data.specifics*item.data.count;
        }
        return total+"元"
    }
}]);