'use strict';

class ProductsListController {
  constructor(ProductsResource, ProductsFilter) {
    this.products = ProductsResource.products;
    this.filterCriteria = ProductsFilter.criteria;
    this.orders = [{
      label: 'Цена (нарастващ ред)',
      key: '+price'
    }, {
      label: 'Цена (намаляващ ред)',
      key: '-price'
    }];
  }
}

angular.module('eshop').component('esProductsList', {
  templateUrl: 'templates/productsList/productsList.html',
  controller: ProductsListController
});
