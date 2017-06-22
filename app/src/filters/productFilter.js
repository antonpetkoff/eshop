'use strict';

angular.module('eshop').filter('productFilter', function() {
  return function(products, criteria) {
    return _.filter(products, (product) => {
      return _.inRange(product.price, criteria.price.lower, criteria.price.upper) &&
        _.isMatch(product, _.omit(criteria, 'price'));
    });
  };
});
