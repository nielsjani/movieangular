'use strict';

angular
  .module('movieAngularApp')
  .controller('AccountCreationCtrl', ['$scope', 'AccountCreationService', 'UserService', function($scope, AccountCreationService, UserService) {

$scope.problems = [];
$scope.problemsPresent = false;
$scope.accountCreated = false;

$scope.tryToCreateAccount = function(){
  validate();
  if(!$scope.problemsPresent){
    $scope.problemsPresent = false;
    AccountCreationService.createAccount({'username':$scope.username,'password':$scope.password})
                                        .success(function(data) {
                                          $scope.accountCreated = true;
                                          UserService.isLogged = true;
                                          UserService.roles = data.roles;
                                          UserService.username = data.username;
                                        })
                                        .error(function(){
                                          $scope.problems.push('Username already taken');
                                          $scope.problemsPresent = true;
                                        });
  }

};

var validate = function(){
  $scope.problems = [];
  $scope.accountCreated = false;
  if(!$scope.username){
    $scope.problems.push('No username was inserted');
  }
  if(!$scope.password){
      $scope.problems.push('No password was inserted');
  }
  if($scope.password !== $scope.passwordConfirmed){
      $scope.problems.push('Passwords did not match');
  }
  if($scope.problems.length > 0){
    $scope.problemsPresent = true;
  }
};

}]);
