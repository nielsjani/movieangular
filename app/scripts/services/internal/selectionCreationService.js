'use strict';

 angular
 .module('movieAngularApp')
 .service('SelectionCreationService', function($http) {

    this.addSelection = function(movieIds){

    return $http({
                       url: 'http://nielsjani-movieangular.rhcloud.com/api/addselection',
                       method: "POST",
                       data: movieIds,
                       headers: {'Content-Type': 'application/json'}
                   });
    };

    this.completeSelection = function(selection){

    return $http({
                       url: 'http://nielsjani-movieangular.rhcloud.com/api/addselection/full',
                       method: "POST",
                       data: selection,
                       headers: {'Content-Type': 'application/json'}
                   });
    };

});
