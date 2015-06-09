'use strict';

var movieAngularApp = angular.module('movieAngularApp');

movieAngularApp.directive('movieWithDetails', [function () {
  return {
    templateUrl: 'views/directives/movieWithDetails.html',
    restrict: 'AEC',
    scope: {
      movieInfo: '='
    },
  };
}]);
