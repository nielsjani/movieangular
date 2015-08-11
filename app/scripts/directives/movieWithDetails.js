'use strict';

angular
.module('movieAngularApp')
.directive('movieWithDetails', [function () {
  return {
    templateUrl: 'views/directives/movieWithDetails.html',
    restrict: 'AEC',
    scope: {
      movieInfo: '='
    },
  };
}]);
