'use strict';

angular
.module('movieAngularApp')
.directive('checkUser', ['$rootScope', '$location', 'UserService',
                 function ($r, $location, UserService) {
                   return {
                     link: function () {
                       $r.$on('$routeChangeStart', function(e, curr){
                       var hasCorrectRole = false;
                       if(curr.access!==undefined){
                         for(var role in curr.access.roles){
                          if(curr.access.roles[role] === UserService.roles[0].name){
                              hasCorrectRole = true;
                            }
                         }
                       }
                         if (!hasCorrectRole) {
                            $location.path('/');
                         }
                       });
                     }
                   };
                 }]);
