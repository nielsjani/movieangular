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
        $scope.hours = [
        {hour:'19h30', pickedBy:[]},
        {hour:'19h30 (3D)', pickedBy:[]},
        {hour:'19h45', pickedBy:[]},
        {hour:'19h45 (3D)', pickedBy:[]},
        {hour:'22h15', pickedBy:[]},
        {hour:'22h15 (3D)', pickedBy:[]}
        ];
        $scope.hoursForMovie = [];

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

        $scope.addOrRemoveHour = function(movieId, hour){
          for(var i = 0; i < $scope.hours.length; i++) {
            if($scope.hours[i].hour === hour){
              var index = $scope.hours[i].pickedBy.indexOf(movieId);
              if(index === -1){
                $scope.hours[i].pickedBy.push(movieId);
              } else {
                $scope.hours[i].pickedBy.splice(index,1);
              }
            }
          }
        };


        //TODO: directive for selection
        $scope.selection = [];
        $scope.selId= 0;

        $scope.goToConfirmationScreen =function(){
          var movieIds = extractIdsFromSelection();
          SelectionCreationService.addSelection({movieIdsAndShowingHours: movieIds})
                          .success(function(data) {
                            $scope.selId = data.id;
                            $location.path('/confirmSelection/'+data.id);
                          });
        };

        var extractIdsFromSelection = function(){
          var movieIds = [];
          for(var movie in $scope.selection){
            var movieId = $scope.selection[movie].id;
            movieIds.push({movieId:$scope.selection[movie].id, showingHours:createShowingHoursForId(movieId)});
          }
          return movieIds;
        };

        var createShowingHoursForId = function(movieId){
          var showingHoursString = '';
          for(var i = 0; i < $scope.hours.length; i++) {
            if($scope.hours[i].pickedBy.indexOf(movieId) !== -1){
              showingHoursString += $scope.hours[i].hour + ' / ';
            }
          }
          return showingHoursString === '' ? 'No showing hours known' : showingHoursString;
        };

}]);
