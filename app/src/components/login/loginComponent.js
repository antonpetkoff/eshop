'use strict';

class LoginController {
  constructor() {
    this.items = [1, 2, 3, 42];
  }
}

angular.module('eshop').component('esLogin', {
  templateUrl: 'templates/login/login.html',
  controller: LoginController
});
