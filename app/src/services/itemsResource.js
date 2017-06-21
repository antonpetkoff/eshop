'use strict';

class ProductsResource {
  constructor() {
    this.products = [{
      id: 1,
      image: '/assets/laptop-1.jpg',
      label: 'ASUS ProBook',
      price: 1600,
      properties: ['16 GB RAM', '256 GB SDD', 'Intel Core i7', 'Full HD IPS'],
      stars: 5,
      favorite: true
    }];
  }
}

angular.module('eshop').service('ProductsResource', ProductsResource);
