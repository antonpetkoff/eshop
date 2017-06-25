'use strict';

class ProductFilterController {
  constructor(ProductsFilter) {
    this.filter = ProductsFilter.criteria;

    this.specialFilters = [{
      id: 'all',
      label: 'Всички',
      selected: true
    }, {
      id: 'sale',
      label: 'Промоция',
      selected: false
    }, {
      id: 'favorite',
      label: 'Любими',
      selected: false
    }];

    this.categories = [{
      id: 'laptop',
      label: 'Лаптопи',
      selected: true
    }, {
      id: 'smart-phone',
      label: 'Смартфони',
      selected: false
    }, {
      id: 'tv',
      label: 'Телевизори',
      selected: false
    }, {
      id: 'big',
      label: 'Големи електроуреди',
      selected: false
    }, {
      id: 'small',
      label: 'Малки електроуреди',
      selected: false
    }, {
      id: 'photo',
      label: 'Фотоапарати',
      selected: false
    }];

    this.price = {
      lowerBound: 0,
      upperBound: 1000
    };

    this.manufacturers = [{
      id: 'HP',
      label: 'HP',
      selected: true
    }, {
      id: 'Lenovo',
      label: 'Lenovo',
      selected: false
    }, {
      id: 'Apple',
      label: 'Apple',
      selected: false
    }, {
      id: 'Samsung',
      label: 'Samsung',
      selected: false
    }, {
      id: 'ASUS',
      label: 'ASUS',
      selected: true
    }, {
      id: 'LG',
      label: 'LG',
      selected: false
    }];
  }
}

angular.module('eshop').component('esProductFilter', {
  templateUrl: 'templates/productFilter/productFilter.html',
  controller: ProductFilterController
});
