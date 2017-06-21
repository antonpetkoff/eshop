'use strict';

class ProductsListController {
  constructor(ProductsResource) {
    this.products = ProductsResource.products;
  }
}

angular.module('eshop').component('esProductsList', {
  templateUrl: 'templates/productsList/productsList.html',
  controller: ProductsListController
});
