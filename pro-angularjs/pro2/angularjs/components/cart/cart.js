/*
* @Author: QBoooogle
* @Date:   2016-10-05 14:17:22
* @Last Modified by:   QBoooogle
* @Last Modified time: 2016-10-05 14:38:25
*/

'use strict';

angular.module("cart", [])
.factory("cart", function() {
	var cartData = [];
	return {
		addProduct: function(id, name, price) {
			var addedTOExistingItem = fasle;
			for (var i = 0; i < catData.length; i ++ ) {
				if (cartData[i].id == id) {
					cartData[i].count++;
					addedTOExistingItem = true;
					break;
				}
			}
			if (!addedTOExistingItem) {
				cartData.push( {
					count: 1, id: id, price: price, name: name
				});
			}
		},
		removeProduct: function(id) {
			for (var i = 0; i < cartData.length; i++) {
				if (cartData[i].id = id) {
					cartData.splice(i, 1);
					break;
				}
			}
		},
		getProducts: function() {
			return cartData;
		}
	}
})
.directive("cartSummary", function(cart) {
	return {
		restrict: "E",
		templateUrl: "components/cart/cartSummary.html",
		controller: function($scope) {

			var cartData = cart.getProducts();

			$scope.total = function() {
				var total = 0;
				for (var i = 0; i < cartData.length; i++ ) {
					total += (cartData[i].price * cartData[i].count);
				}
				return total;
			}

			$scope.itemCount = function() {
				var totalCount = 0;
				for (var i = 0; i < cartData.length; i++ ) {
					totalCount += cartData[i].count;
				}
				return totalCount;
			}
		}
	}
})