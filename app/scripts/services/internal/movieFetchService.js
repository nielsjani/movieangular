'use strict';

var movieAngularApp = angular.module('movieAngularApp');

movieAngularApp.service('MovieFetchService', function($http) {

    this.getAllStoredMovies = function(){
      return $http.get('http://nielsjani-movieangular.rhcloud.com/api/movies');
    };

});
