'use strict';

/**
 * Main module of the application.
 */
angular
  .module('movieAngularApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'PublicMoviePollCtrl',
        access: {
          roles: ['visitor','regular','admin']
        }
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        access: {
          roles: ['visitor','regular','admin']
        }
      })
      .when('/createAccount', {
        templateUrl: 'views/createAccount.html',
        controller: 'AccountCreationCtrl',
        access: {
          roles: ['visitor', 'regular', 'admin']
        }
      })
      .when('/results', {
        templateUrl: 'views/results.html',
        controller: 'ResultsCtrl',
        access: {
          roles: ['visitor','regular', 'admin']
        }
      })
      .when('/addMovie', {
        templateUrl: 'views/addMovie.html',
        controller: 'AddMovieCtrl',
        access: {
          roles: ['admin']
        }
      })
      .when('/createSelection', {
        templateUrl: 'views/createSelection.html',
        controller: 'SelectionComposerCtrl',
        access: {
          roles: ['admin']
        }
      })
      .when('/confirmSelection/:selectionId', {
        templateUrl: 'views/selectionConfirmation.html',
        controller: 'SelectionConfirmationCtrl',
        access: {
          roles: ['admin']
        }
      })
      .when('/loggedCriticisms', {
        templateUrl: 'views/loggedCriticisms.html',
        controller: 'LoggedCriticismsCtrl',
        access: {
          roles: ['admin']
        }
      })
      .when('/yoursitesucks', {
        templateUrl: 'views/yoursitesucks.html',
        controller: 'YourSiteSucksCtrl',
        access: {
          roles: ['visitor', 'regular', 'admin']
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
