'use strict';

describe('Controller: homeCtrl', function () {

  // load the controller's module
  beforeEach(module('myApp'));

  var scope, homeCtrl;

  beforeEach(inject(function($rootScope, $controller/* rest services to inject here */) {
    // TODO delete content and write here ...
    scope = $rootScope.$new();
    homeCtrl = $controller('homeCtrl', {$scope: scope});

  }));

  // Initialize the controller and a mock scope
  it('should match inital message', function () {
      // TODO delete content and write here ...
      expect(scope.message).toBe('Welcome to angular starter');
  });

});
