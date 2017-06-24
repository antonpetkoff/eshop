'use strict';

class CartController {
  constructor(ProductsResource) {
    this.items = ProductsResource.cart;
  }
}

angular.module('eshop').component('esCart', {
  templateUrl: 'templates/cart/cart.html',
  controller: CartController
});
