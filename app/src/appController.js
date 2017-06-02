'use strict';

class AppController {
  constructor($scope, $state) {
    this.$scope = $scope;
    this.$state = $state;
    console.log($state, $state.$current);
    // TODO: make currentNavItem dynamic
    this.$scope.currentNavItem = 'login';
  }
}

angular.module('eshop').controller('AppController', AppController);
