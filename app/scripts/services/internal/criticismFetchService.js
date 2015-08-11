'use strict';

angular
.module('movieAngularApp')
.service('CriticismFetchService', function($http) {

this.getCriticisms = function(){

    return $http({
                       url: 'http://nielsjani-movieangular.rhcloud.com/api/criticisms',
                       method: "GET",
                       headers: {'Content-Type': 'application/json'}
                   });
    };

});
