'use strict';

angular
.module('movieAngularApp')
.service('PickingFetchService', function($http) {

    this.getMoviesAndVotes = function(selectionId){
      return $http.get('http://nielsjani-movieangular.rhcloud.com/api/pickings/'+selectionId);
    };

});
