angular.module('lookats.controllers')

.controller('authCtrl', function($scope, $stateParams, $ionicNavBarDelegate, $state, $location) {
	/*$scope.register = {
		username : '',
		fullname : ''
	};*/
	$scope.register = {};

	$scope.doRegister = function() {
		console.log($scope.register);
		//alert($scope.register.username);
		$state.go('interest');
		//$location.path('/auth/login');
	}

	$scope.registerBack = function() {
		$ionicNavBarDelegate.back();
	}
});