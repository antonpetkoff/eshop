'use strict';

class ProductController {
  constructor(ProductsResource, $stateParams) {
    const productId = parseInt($stateParams.id);
    this.product = _.find(ProductsResource.products, {id: productId});
  }
}

angular.module('eshop').component('esProduct', {
  templateUrl: 'templates/product/product.html',
  controller: ProductController
});
