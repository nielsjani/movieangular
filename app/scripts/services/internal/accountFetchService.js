'use strict';

angular
.module('movieAngularApp')
.service('AccountFetchService', function($http) {

    this.login = function(userdata){

    return $http({
                       url: 'http://nielsjani-movieangular.rhcloud.com/api/account/login',
                       method: "POST",
                       data: userdata,
                       headers: {'Content-Type': 'application/json'}
                   });
    };

});
