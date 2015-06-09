'use strict';

var movieAngularApp = angular.module('movieAngularApp');

movieAngularApp.controller('LoginCtrl', ['$scope', 'UserService', 'AccountFetchService', function($scope, UserService, AccountFetchService) {

$scope.loginFailed = false;

$scope.tryToLogIn = function(){
  AccountFetchService.login({'username':$scope.username, 'password':$scope.password})
                            .success(function(data) {
                              UserService.isLogged = true;
                              UserService.roles = data.roles;
                              UserService.username = data.username;
                              $scope.loginFailed = false;
                            })
                            .error(function(data){
                              $scope.loginFailed = true;
                            });
};

}]);
