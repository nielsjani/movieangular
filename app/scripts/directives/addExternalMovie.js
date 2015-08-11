'use strict';

 angular
 .module('movieAngularApp')
 .directive('addExternalMovie', [function () {
  return {
    templateUrl: 'views/directives/addExternalMovie.html',
    restrict: 'E',
    controller: 'MainCtrl',
    scope: {
      showAddButton: '=',
      movieInfo: '='
    },
  };
}]);
