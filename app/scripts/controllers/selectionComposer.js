'use strict';

var movieAngularApp = angular.module('movieAngularApp');

movieAngularApp.controller('SelectionComposerCtrl', ['$scope', '$location', 'MovieFetchService', 'MovieCreationService', 'SelectionCreationService',
 function($scope, $location, MovieFetchService, MovieCreationService,SelectionCreationService) {

        $scope.movies = [];
        $scope.selectedMovie = {};
        $scope.movieFilter='';
        $scope.filteredMovies = [];
        $scope.showOriginalAddImplementation = false;
        $scope.movieToSave = undefined;
        $scope.showAddButton = true;

        $scope.getAllMovies = function(updateFilter){
          MovieFetchService.getAllStoredMovies()
                .success(function(data) {
                  $scope.movies = [];
                  for (var retrievedMovie in data) {
                      var movie = {};
                      movie.title = data[retrievedMovie].title;
                      movie.posterUrl = data[retrievedMovie].posterUrl;
                      movie.id = data[retrievedMovie].id;
                      $scope.movies.push(movie);
                  }

                  if(updateFilter){
                      $scope.selectedMovie = {};
                      $scope.movieFilter = '';

                      $scope.movieToSave = {};
                  }

              });
         };

         $scope.getPosterUrl = function(movie){
           if(movie.posterUrl !== undefined){
              return movie.posterUrl;
           }

          return 'http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder.png';

         };

         $scope.selectMovie = function(movie){
          $scope.selectedMovie = movie;
         };

        $scope.getAllMovies(false);

        $scope.isSelected = function(movie){
          var isChecked =  $scope.selectedMovie.title === movie.title;
          if(isChecked && $scope.selection.indexOf(movie) === -1){
            $scope.selection.push(movie);
            delete $scope.movies[$scope.movies.indexOf(movie)];
          }
          return isChecked;
        };

        $scope.addMovieToInternalDBAndSetSelectionText = function(){
          MovieCreationService.addMovie($scope.movieToSave).success(function(){
            $scope.getAllMovies(true);
          });
        };


        //TODO: directive for selection
        $scope.selection = [];
        $scope.selId= 0;

        $scope.goToConfirmationScreen =function(){
          var movieIds = extractIdsFromSelection();
          SelectionCreationService.addSelection({movieIds: movieIds})
                          .success(function(data) {
                            $scope.selId = data.id;
                            $location.path('/confirmSelection/'+data.id);
                          });


        };

        var extractIdsFromSelection = function(){
          var movieIds = [];
          for(var movie in $scope.selection){
            movieIds.push($scope.selection[movie].id);
          }

          return movieIds;
        };

}]);
