'use strict';

angular
.module('movieAngularApp')
.service('MovieInfoService', function($http) {

    this.getData = function(movieName) {
        return $http.get('http://www.omdbapi.com/?t='+movieName+'&y=&plot=short&r=json');
    };
});
