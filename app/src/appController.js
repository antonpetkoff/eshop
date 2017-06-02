'use strict';

class AppController {
  constructor($state) {
    this.$state = $state;
    console.log($state, $state.$current);
    // TODO: make currentNavItem dynamic
    this.currentNavItem = 'login';
  }
}

angular.module('eshop').controller('AppController', AppController);
