'use strict';

 angular
 .module('movieAngularApp')
 .service('CriticismCreationService', function($http) {

    this.addCriticism = function(criticism){

    return $http({
                       url: 'http://nielsjani-movieangular.rhcloud.com/api/addCriticism',
                       method: "POST",
                       data: criticism,
                       headers: {'Content-Type': 'application/json'}
                   });
    };

});
