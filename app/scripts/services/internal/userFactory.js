'use strict';

var movieAngularApp = angular.module('movieAngularApp');

movieAngularApp.factory('UserService', [function() {
  var user = {
    isLogged: false,
    username: '',
    roles: [{'name':'visitor'}]
  };
  return user;
}]);
