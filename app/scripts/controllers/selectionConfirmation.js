'use strict';

var movieAngularApp = angular.module('movieAngularApp');

movieAngularApp.controller('SelectionConfirmationCtrl', ['$scope', '$location', '$routeParams', 'SelectionFetchService', 'SelectionCreationService',
function($scope, $location, $routeParams, SelectionFetchService, SelectionCreationService) {

  $scope.cinemas = ['Kinepolis', 'Utopolis'];
  $scope.date = new Date();
  $scope.selectionTitle='';

  var getSelection = function(){
  $scope.selectionId = $routeParams.selectionId;

   SelectionFetchService.getSelection($routeParams.selectionId)
    .success( function(data){
      $scope.selection = data;
    }

  );};

  $scope.postFullSelection = function(){
    $scope.selection.date = $scope.date;
    $scope.selection.name = $scope.selectionTitle;
    $scope.selection.location = $scope.location;

    SelectionCreationService.completeSelection($scope.selection)
      .success( function(data){
        $location.path('/');
      }
  );};

  getSelection();

}]);
