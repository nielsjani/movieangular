'use strict';

angular
.module('movieAngularApp')
.controller('LoggedCriticismsCtrl', ['$scope', 'CriticismFetchService', function($scope, CriticismFetchService) {

$scope.criticisms = [];

var getCriticisms = function(){

CriticismFetchService.getCriticisms()
  .success(function(data){
    $scope.criticisms = data;
  });

};

getCriticisms();

}]);
