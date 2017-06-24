'use strict';

class OrderItemController {
  constructor() {

  }
}

angular.module('eshop').component('esOrderItem', {
  templateUrl: 'templates/orderItem/orderItem.html',
  bindings: {
  	item: '<'
  },
  controller: OrderItemController
});
