'use strict';

var movieAngularApp = angular.module('movieAngularApp');

movieAngularApp.service('CriticismCreationService', function($http) {

    this.addCriticism = function(criticism){

    return $http({
                       url: 'http://nielsjani-movieangular.rhcloud.com/api/addCriticism',
                       method: "POST",
                       data: criticism,
                       headers: {'Content-Type': 'application/json'}
                   });
    };

});
