'use strict';

class ProductsResource {
  constructor() {
    const prices = _.times(20, () => _.random(100, 5000));
    const images = ['/assets/laptop-1.jpg'];
    const labels = ['ASUS ProBook'];
    const properties = ['16 GB RAM', '256 GB SDD', 'Intel Core i7', 'Full HD IPS'];
    const manufacturers = ['ASUS', 'Samsung', 'Apple', 'HP', 'Sony'];

    this.products = _.times(100, (id) => ({
      id,
      image: _.sample(images),
      label: _.sample(labels),
      price: _.sample(prices),
      properties: _.sampleSize(properties, 4),
      stars: _.sample([1, 2, 3, 4, 5]),
      favorite: _.sample([true, false]),
      manufacturer: _.sample(manufacturers)
    }));
  }
}

angular.module('eshop').service('ProductsResource', ProductsResource);
