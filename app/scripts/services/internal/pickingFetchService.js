'use strict';

var movieAngularApp = angular.module('movieAngularApp');

movieAngularApp.service('PickingFetchService', function($http) {

    this.getMoviesAndVotes = function(selectionId){
      return $http.get('http://nielsjani-movieangular.rhcloud.com/api/pickings/'+selectionId);
    };

});
