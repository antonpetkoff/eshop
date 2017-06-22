'use strict';

class ProductsFilter {
  constructor() {
    this.criteria = {
      price: {
        lower: 0,
        upper: Number.MAX_VALUE
      },
      properties: []
    };
  }
}

angular.module('eshop').service('ProductsFilter', ProductsFilter);
