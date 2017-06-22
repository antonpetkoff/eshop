'use strict';

class ProductsFilter {
  constructor() {
    this.criteria = {
      price: {
        lower: 0,
        upper: 1000
      },
      properties: []
    };
  }
}

angular.module('eshop').service('ProductsFilter', ProductsFilter);
