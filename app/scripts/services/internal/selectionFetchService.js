'use strict';

var movieAngularApp = angular.module('movieAngularApp');

movieAngularApp.service('SelectionFetchService', function($http) {

    this.getSelection = function(selectionId){
      return $http.get('http://nielsjani-movieangular.rhcloud.com/api/selection/'+selectionId);
    };

    this.getActiveSelection = function(){
      return $http.get('http://nielsjani-movieangular.rhcloud.com/api/selection/active');
    };

});
