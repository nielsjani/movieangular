'use strict';

var movieAngularApp = angular.module('movieAngularApp');

movieAngularApp.service('PickingCreationService', function($http) {

    this.addPicking = function(pickingsForSelection){

    return $http({
                       url: 'http://nielsjani-movieangular.rhcloud.com/api/addpicking',
                       method: "POST",
                       data: pickingsForSelection,
                       headers: {'Content-Type': 'application/json'}
                   });
    };

});
