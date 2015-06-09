'use strict';

var movieAngularApp = angular.module('movieAngularApp');

movieAngularApp.directive('checkUser', ['$rootScope', '$location', 'UserService',
                 function ($r, $location, UserService) {
                   return {
                     link: function (scope, elem, attrs, ctrl) {
                       $r.$on('$routeChangeStart', function(e, curr, prev){
                       var hasCorrectRole = false;
                       for(var role in curr.access.roles){
                        if(curr.access.roles[role] === UserService.roles[0].name){
                            hasCorrectRole = true;
                          }
                       }
                         if (!hasCorrectRole) {
                            $location.path('/');
                         }
                       });
                     }
                   };
                 }]);
