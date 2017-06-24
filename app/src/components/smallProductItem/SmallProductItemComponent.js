'use strict';

class SmallProductItemController {
  get imageUrl() {
    return `url('${this.item.image}')`;
  }
}

angular.module('eshop').component('esSmallProductItem', {
  templateUrl: 'templates/smallProductItem/smallProductItem.html',
  bindings: {
    item: '<'
  },
  controller: SmallProductItemController
});
