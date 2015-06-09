'use strict';

var movieAngularApp = angular.module('movieAngularApp');

movieAngularApp.service('MovieCreationService', function($http) {

    this.addMovie = function(movie){

    return $http({
                       url: 'http://nielsjani-movieangular.rhcloud.com/api/addmovie',
                       method: "POST",
                       data: movie,
                       headers: {'Content-Type': 'application/json'}
                   });
    };

});
