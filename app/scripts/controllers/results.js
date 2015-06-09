'use strict';

var movieAngularApp = angular.module('movieAngularApp');

movieAngularApp.controller('ResultsCtrl', ['$scope', 'SelectionFetchService', 'PickingFetchService', function($scope, SelectionFetchService, PickingFetchService) {

$scope.selection={};
$scope.moviesAndVotes = {};
$scope.mostVotedMovies = [];

$scope.hasMostVotes = function(movie){
  return $scope.mostVotedMovies.indexOf(movie) > -1;
};

var activeSelection =  function(){
                        SelectionFetchService.getActiveSelection()
                          .success(function(data){
                            $scope.selection = data;
                              PickingFetchService.getMoviesAndVotes(data.id)
                                .success(function(data){
                                  $scope.moviesAndVotes = data;
                                  $scope.mostVotedMovies = findMostVotedMovies(data.movieAndVotes);
                                 });

                          });
};


var findMostVotedMovies = function(moviesAndVotes){
  var mostVoted = [];
  for(var movie in moviesAndVotes){
    if(mostVoted.length === 0 || moviesAndVotes[movie].amountOfVotes === mostVoted[0].amountOfVotes){
      mostVoted.push(moviesAndVotes[movie]);
    }
    if(moviesAndVotes[movie].amountOfVotes > mostVoted[0].amountOfVotes){
      mostVoted=[];
      mostVoted.push(moviesAndVotes[movie]);
    }
  }
  return mostVoted;
};

activeSelection();

}]);
