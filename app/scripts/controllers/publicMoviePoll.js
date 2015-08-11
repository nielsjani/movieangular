'use strict';


angular
  .module('movieAngularApp')
  .controller('PublicMoviePollCtrl', ['$scope', 'SelectionFetchService', 'PickingCreationService', 'UserService', function($scope, SelectionFetchService, PickingCreationService, UserService) {

$scope.username = UserService.username;

$scope.selection = {};
$scope.dateString = '';
$scope.movies = [];

$scope.hoveredId = '';
$scope.remainingChoices = 2;
var selectedMovies = [];
$scope.showPickingsSubmitted = false;

var getActiveSelection = function(){
  SelectionFetchService.getActiveSelection()
    .success(function(data){
      $scope.selection = data;
      var date = new Date(data.date);
      $scope.dateString =date.getDate() + '/' + (Number(date.getMonth())+1) +'/' + date.getFullYear();
      $scope.movies = data.movies;
    }

);};

$scope.mouseOver = function(id){
  if(!$scope.isSelected(id)){
    $scope.hoveredId=id;
  }
};

$scope.mouseLeave = function(){
  $scope.hoveredId = -1;
};

$scope.isSelected = function(id){
  return selectedMovies.indexOf(id) > -1;
};

$scope.selectMovie = function(id){
  if(!$scope.isSelected(id) && $scope.remainingChoices >0){
    selectedMovies.push(id);
    $scope.remainingChoices--;
  } else {
    if($scope.isSelected(id)){
      $scope.remainingChoices++;
      selectedMovies.splice(selectedMovies.indexOf(id), 1);
    }
    $scope.hoveredId=id;
  }
};

$scope.showSubmitButton = function(){
  return selectedMovies.length > 0;
};

$scope.submitPicks = function(){
  var pickingForSelection = {'selectionId':$scope.selection.id, 'movieIds': selectedMovies};
  PickingCreationService.addPicking(pickingForSelection)
    .success(function(){
      $scope.remainingChoices = 2;
      selectedMovies = [];
      $scope.showPickingsSubmitted = true;

    });

};

$scope.loggedIn = function(){
  return UserService.isLogged;
};

getActiveSelection();

}]);
