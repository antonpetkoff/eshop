'use strict';

class RegisterController {
  constructor() {
    this.items = [1, 2, 3, 42];
  }
}

angular.module('eshop').component('esRegister', {
  templateUrl: 'templates/register/register.html',
  controller: RegisterController
});
