angular.module('App', ['angular-meteor', 'ui.router']);

angular
	.module('App')
	.config(function($urlRouterProvider, $stateProvider, $locationProvider){
		$locationProvider.html5Mode(true);
		$urlRouterProvider.otherwise('/today');

		$stateProvider
			.state('today', {
				url: '/today',
				templateUrl: 'client/views/today.ng.html',
				controller: 'TodayCtrl'
			})
			.state('order', {
				url: '/order',
				templateUrl: 'parties-list.ng.html',
				controller: 'PartiesListCtrl'
			});
	});

angular
	.module('App')
	.controller('MainCtrl', function($scope) {

	});