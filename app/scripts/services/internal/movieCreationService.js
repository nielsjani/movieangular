'use strict';

angular
.module('movieAngularApp')
.service('MovieCreationService', function($http) {

    this.addMovie = function(movie){

    return $http({
                       url: 'http://nielsjani-movieangular.rhcloud.com/api/addmovie',
                       method: "POST",
                       data: movie,
                       headers: {'Content-Type': 'application/json'}
                   });
    };

});
