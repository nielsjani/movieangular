'use strict';

var movieAngularApp = angular.module('movieAngularApp');

movieAngularApp.controller('AddMovieCtrl', ['$scope', function($scope) {
  $scope.showOriginalImplementation = true;
  $scope.movieInfo = {};

}]);
