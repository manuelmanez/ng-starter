"use strict";

angular.module('myApp').config(routes);

function routes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl : 'src/home/home.html',
      controller  : 'homeCtrl'
    })
    .state('view1', {
      url: '/view1',
      template: '<h1>view1</h1>'
    });
  $urlRouterProvider
    .otherwise('/');
    $locationProvider.hashPrefix('');
}
