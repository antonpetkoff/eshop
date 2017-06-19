'use strict';

class ProductFilterController {
  constructor() {
    this.specialFilters = [{
      id: 'all',
      label: 'Всички',
      selected: false
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
      selected: false
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
  }
}

angular.module('eshop').component('esProductFilter', {
  templateUrl: 'templates/productFilter/productFilter.html',
  controller: ProductFilterController
});
