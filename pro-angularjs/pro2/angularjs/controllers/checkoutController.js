/*
* @Author: QBoooogle
* @Date:   2016-10-05 15:38:24
* @Last Modified by:   QBoooogle
* @Last Modified time: 2016-10-05 16:08:12
*/

'use strict';

angular.module("sportsStore")
.controller("cartSummaryController", function($scope, cart) {

	$scope.cartData = cart.getProducts();

	$scope.total = function() {
		var total = 0;
		for (var i = 0; i < $scope.cartData.length; i++) {
			total += ($scope.cartData[i].price * $scope.cartData[i].count);
		}
		return total;
	}

	$scope.remove = function(id) {
		cart.removeProduct(id);
	}
})