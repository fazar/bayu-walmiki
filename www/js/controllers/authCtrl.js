angular.module('lookats.controllers')

.controller('authCtrl', function($scope, $stateParams, $ionicNavBarDelegate, $state, 
								$location, $http, $window, $rootScope, $ionicPopup) {

	$scope.register = {};
	$scope.login = {};

	$scope.doRegister = function() {
		$http.post(lookats.baseUrl + 'api/register', $scope.register)
			.success( function( data, status, headers, config ) {								
				login($scope.register.username, $scope.register.password, true);				
			})
			.error( function( data, status, headers, config ) {
				alert('register gagal');
				delete $window.sessionStorage.token;
				//$scope.loginMessage = 'Error: Invalid user or password';
			})
	}

	

	$scope.doLogin = function() {
		login($scope.login.username, $scope.login.password, false);	
	} 

	$scope.registerBack = function() {
		$ionicNavBarDelegate.back();
	}

	/*$rootScope.logouts = function() {
			alert('sini a');
			delete $window.sessionStorage.token;
			alert($window.sessionStorage.token);
			$state.go('auth.welcome');
		}*/

	var login = function(username, password, isFromRegister) {
		console.log(username + " - " + password);
		var userData = {username : username, password : password};
		$http.post(lookats.baseUrl + 'api/authenticate', userData)
			.success( function( data, status, headers, config ) {
				$window.sessionStorage.token = data.token;
				(isFromRegister) ? $state.go('interest') : $state.go('home.timeline');
				alert('sukses login ' + data.token);
				console.log(data.token);
			})
			.error( function( data, status, headers, config ) {
				delete $window.sessionStorage.token;
				var alertPopup = $ionicPopup.alert({
			     title: 'Error',
			     template: 'Invalid user or password'
			   });
				//$scope.loginMessage = 'Error: Invalid user or password';
			})
		;
	}
});