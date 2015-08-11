'use strict';

angular
.module('movieAngularApp')
.controller('MainCtrl', ['$scope', '$http', 'MovieInfoService', 'MovieCreationService', function($scope, $http, MovieInfoService, MovieCreationService) {
    $scope.movieInfo = {};
    $scope.loaded = false;
    $scope.testRunSuccess = false;
    $scope.movieTitleInput = '';
    $scope.movieAdded = false;
    $scope.findMovie = function(){

      MovieInfoService.getData($scope.movieTitleInput)
            .success(function(data) {
              $scope.loaded = false;
              $scope.movieAdded = false;

              $scope.movieInfo.title = data.Title;
              $scope.movieInfo.posterUrl = data.Poster;
              $scope.movieInfo.description = data.Plot;
              $scope.movieInfo.minutes = parseInt(data.Runtime);
              $scope.movieInfo.metascore = parseInt(data.Metascore);
              $scope.movieInfo.year = parseInt(data.Year);
              $scope.movieInfo.genre = data.Genre;
              $scope.movieInfo.imdbId = data.imdbID.substring(2);

              $scope.loaded = true;
              $scope.testRunSuccess = true;
          });
    };

    $scope.addMovieToInternalDB = function(){
      MovieCreationService.addMovie($scope.movieInfo)
        .success(function(){
          $scope.movieAdded = true;
        })
        .error(function(){
          $scope.movieAdded = false;
        });
    };

}]);

