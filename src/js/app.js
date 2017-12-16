import angular from 'angular';
import 'angular-route';

const app = angular.module('billplease', ['ngRoute']);

app.controller('mainCtrl', ['$scope', '$route', '$routeParams', '$location', ($scope, $route, $routeParams, $location) => {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
}]);

app.config(($routeProvider, $locationProvider) => {
    $routeProvider
    .when('/:param', {
        templateUrl: 'index.html',
        controller: 'mainCtrl'
    });

    $locationProvider.html5Mode(true);
});
