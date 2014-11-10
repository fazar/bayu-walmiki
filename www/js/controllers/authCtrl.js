angular.module('lookats.controllers')

.controller('authCtrl', function($scope, $stateParams, $ionicNavBarDelegate, $state) {
	$scope.registerNext = function() {
		alert('user has been registered now');
		$state.go('interest');
	}

	$scope.registerBack = function() {
		$ionicNavBarDelegate.back();
	}
});