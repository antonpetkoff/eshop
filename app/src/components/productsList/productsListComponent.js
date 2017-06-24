'use strict';

class ProductsListController {
  constructor(ProductsResource, ProductsFilter) {
    this.products = ProductsResource.products;
    this.filterCriteria = ProductsFilter.criteria;
    this.orders = {
      'Цена (нарастващ ред)': '+price',
      'Цена (намаляващ ред)': '-price',
      'Оценка (нарастващ ред)': '+stars',
      'Оценка (намаляващ ред)': '-stars'
    };
    this.orderLabels = _.keys(this.orders);
  }
}

angular.module('eshop').component('esProductsList', {
  templateUrl: 'templates/productsList/productsList.html',
  controller: ProductsListController
});
