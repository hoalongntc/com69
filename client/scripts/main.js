angular.module('App', ['angular-meteor']);

angular
	.module('App')
	.config(function() {

	});

angular
	.module('App')
	.controller('MainCrtl', function($scope) {
		$scope.data = 'Hello world!';
	});