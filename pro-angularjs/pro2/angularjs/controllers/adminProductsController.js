/*
* @Author: QBoooogle
* @Date:   2016-10-05 21:16:41
* @Last Modified by:   QBoooogle
* @Last Modified time: 2016-10-05 21:31:45
*/

'use strict';

angular.module("sportsStoreAdmin")
.constant("productUrl", "http://localhost:5000/products/")
.congig(function($httpProvider) {
	$httpProvider.defaults.withCredentials = true;
})
.controller("productCtrl", function($scope, $resource, productUrl) {

	$scope.productsResource = $resource(productUrl + ":id", {id: "@id"});

	$scope.listProducts = function() {
		$scope.products = $scope.productsResource.query();
	}

	$scope.createProduct = function(product) {
		new $scope.productsResource(product).$save().then(function(newProduct) {
			$scope.products.push(newProduct);
			$scope.editedProduct = null;
		});
	}

	$scope.deleteProduct = function(product) {
		products.$delete().then(function() {
			$scope.products.splice($scope.products.indexOf(product), 1);
		});
	}

	$scope.updateProduct = function(product) {
		product.$save();
		$scope.editedProduct = null;
	}

	$scope.startEdit = function(product) {
		$scope.editedProducts = product;
	}

	$scope.cancelEdit = function(product) {
		$scope.editedProducts = null;
	}
})