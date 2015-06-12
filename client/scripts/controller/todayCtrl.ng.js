angular
    .module('App')
    .controller('TodayCtrl', function($scope, $meteor) {
    	$scope.products = $meteor.collection(Product).subscribe('productForToday');
    });