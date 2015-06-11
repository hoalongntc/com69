angular
    .module('App')
    .controller('TodayCtrl', function($scope, $meteor) {
        Meteor.setTimeout(function() {
            $scope.products = $meteor.collection(Product).subscribe('PRD');
        }, 0);
    });