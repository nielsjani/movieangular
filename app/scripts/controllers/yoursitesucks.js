'use strict';

var movieAngularApp = angular.module('movieAngularApp');

movieAngularApp.controller('YourSiteSucksCtrl', ['$scope', 'CriticismCreationService', function($scope, CriticismCreationService) {

$scope.types = ['Bug', 'Visual annoyance', 'New feature', 'Other'];
$scope.showSuccess = false;

$scope.postCriticism = function(){
  var criticism = {};
  criticism.type = $scope.typeCategory;
  criticism.comment = $scope.comment;
  CriticismCreationService.addCriticism(criticism)
    .success(function(data){
      $scope.showSuccess = true;
    });
};

}]);
