'use strict';

angular
  .module('myApp')
  .controller('homeCtrl', ['$scope', homeCtrl]);

function homeCtrl($scope) {
  // TODO delete content and write here...
  $scope.message = "Welcome to angular starter";
}
