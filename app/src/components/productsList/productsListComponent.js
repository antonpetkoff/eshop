'use strict';

class ProductsListController {
  constructor(ProductsResource, ProductsFilter) {
    this.products = ProductsResource.products;
    this.filterCriteria = ProductsFilter.criteria;
  }
}

angular.module('eshop').component('esProductsList', {
  templateUrl: 'templates/productsList/productsList.html',
  controller: ProductsListController
});
