'use strict';

angular
.module('movieAngularApp')
.controller('SelectionConfirmationCtrl', ['$scope', '$location', '$routeParams', 'SelectionFetchService', 'SelectionCreationService',
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
    var completeSelection = {
      id : $scope.selection.id,
      date : $scope.date,
      name : $scope.selectionTitle,
      location : $scope.location,
      movies : turnDTOIntoMovies($scope.selection.movies)
    };

    SelectionCreationService.completeSelection(completeSelection)
      .success( function(){
        $location.path('/');
      }
  );};

  var turnDTOIntoMovies = function(movies){
    var restoredMovies = [];
    for(var movie in movies){
      delete movies[movie].showingHours;
      restoredMovies.push(movies[movie]);
    }
    return restoredMovies;
  };

  getSelection();

}]);
