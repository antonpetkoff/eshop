'use strict';

class SimilarItemsController {
  constructor(ProductsResource) {
    this.items = ProductsResource.similarItems;
  }
}

angular.module('eshop').component('esSimilarItems', {
  templateUrl: 'templates/similarItems/similarItems.html',
  controller: SimilarItemsController
});
