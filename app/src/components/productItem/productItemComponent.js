'use strict';

class ProductItemController {
  get imageUrl() {
    return `url('${this.item.image}')`;
  }
}

angular.module('eshop').component('esProductItem', {
  templateUrl: 'templates/productItem/productItem.html',
  bindings: {
    item: '<'
  },
  controller: ProductItemController
});
