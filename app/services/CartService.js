angular.module("myApp");
app.service("CartService",function () {
    this.items={};
    this.addToCart=function (item) {
        //console.log(item);
        var _item=this.items[item.data.id];
        if(_item){
            _item.data.count+=1
        }else {
            item.data.count=1;
            this.items[item.data.id]=item
        }
        //console.log(this.items);
    };
    this.getCartData=function () {
        return this.items
    }
});
