'use strict';

class AppController {
  constructor($state, $scope) {
    this.$state = $state;
    this.$scope = $scope;
  }

  $onInit() {
    this.$scope.$watch('$ctrl.$state.$current.name', (name) => {
      this.currentNavItem = name;
    });
  }

  openMenu($mdMenu, event) {
    $mdMenu.open(event);
  }
}

angular.module('eshop').controller('AppController', AppController);
