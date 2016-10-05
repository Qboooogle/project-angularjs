/*
* @Author: QBoooogle
* @Date:   2016-10-05 19:42:04
* @Last Modified by:   QBoooogle
* @Last Modified time: 2016-10-05 20:18:39
*/

'use strict';

angular.module("sportsStoreAdmin")
.constant("authUrl", "http://localhost:5000/users/login")
.controller("authCtrl", function($scope, $http, $location, authUrl) {
	$scope.authenticate = function (user, pass) {
		$http.post(authUrl, {
			username: user,
			password: pass
		}, {
			withCredentials: true
		})
		.success(function(data) {
			$location.path("/main");
		})
		.error(function(error) {
			$scope.authenticateError = error;
		});
	}
})
.controller("mainCtrl", function($scope) {

	$scope.screens = ["Prodects", "Orders"];
	$scope.current = $scope.screens[0];

	$scope.setScreen = function(index) {
		$scope.current = $scope.screens[index];
	};

	$scope.getScreen = function() {
		return $scope.current == "Prodects"?"/views/adminProducts.html":"/views/adminOrders.html"
	}
});