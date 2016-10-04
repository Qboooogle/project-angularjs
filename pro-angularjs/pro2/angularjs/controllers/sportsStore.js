angular.module("sportsStore")
.controller("sportsStoreCtrl", function ($scope) {

    $scope.data = {
        products: [
            {
                name: "产品 #1", description: "一件运动产品",
                category: "类型 #1", price: 100
            },
            {
                name: "产品 #2", description: "一件运动产品",
                category: "类型 #1", price: 110
            },
            {
                name: "产品 #3", description: "一件运动产品",
                category: "类型 #2", price: 210
            },
            {
                name: "产品 #4", description: "一件运动产品",
                category: "类型 #3", price: 202
            }]
    };
});
