'use strict';

angular
.module('movieAngularApp')
.controller('MenuCtrl', ['$scope', 'UserService', function($scope, UserService) {
  $scope.getLoginTab = function(){
  if(UserService.isLogged){
    return {'url':'#/', 'text':'Hello, '+UserService.username};
  }
    return {'url':'#/login', 'text':'Login'};
  };

  $scope.getCritisismTab = function(){
    if($scope.isAdmin()){
      return {'url':'#/loggedCriticisms', 'text':'Why your site sucks'};
    }
      return {'url':'#/yoursitesucks', 'text':'Your site sucks!'};
  };

  $scope.isAdmin = function(){
    return UserService.roles[0].name === 'admin';
  };

  $scope.isLoggedIn = function(){
    return UserService.isLogged;
  };

}]);
