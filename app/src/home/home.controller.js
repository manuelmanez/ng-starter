'use strict';

angular
  .module('==ng-starter==')
  .controller('homeCtrl', ['$scope', homeCtrl]);

function homeCtrl($scope) {
  // TODO delete content and write here...
  $scope.message = "Welcome to angular starter";
}
