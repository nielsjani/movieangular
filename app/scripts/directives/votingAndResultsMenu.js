'use strict';

angular
.module('movieAngularApp')
.directive('votingAndResultsMenu', [function () {
  return {
    templateUrl: 'views/directives/votingAndResults.html',
    restrict: 'E'
  };
}]);
