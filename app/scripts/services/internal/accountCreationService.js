'use strict';

angular
.module('movieAngularApp')
.service('AccountCreationService', function($http) {

    this.createAccount = function(userdata){

    return $http({
                       url: 'http://nielsjani-movieangular.rhcloud.com/api/createAccount',
                       method: "POST",
                       data: userdata,
                       headers: {'Content-Type': 'application/json'}
                   });
    };

});
