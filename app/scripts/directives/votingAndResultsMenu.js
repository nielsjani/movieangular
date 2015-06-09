'use strict';

var movieAngularApp = angular.module('movieAngularApp');

movieAngularApp.directive('votingAndResultsMenu', [function () {
  return {
    templateUrl: 'views/directives/votingAndResults.html',
    restrict: 'E'
  };
}]);
