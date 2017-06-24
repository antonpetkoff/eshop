'use strict';

class LargeProductItemController {
  get imageUrl() {
    return `url('${this.item.image}')`;
  }
}

angular.module('eshop').component('esLargeProductItem', {
  templateUrl: 'templates/largeProductItem/largeProductItem.html',
  bindings: {
    'item': '<'
  },
  controller: LargeProductItemController
});
