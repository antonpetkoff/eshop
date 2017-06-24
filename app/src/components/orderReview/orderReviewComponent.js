'use strict';

class OrderReviewController {
  constructor(OrdersResource) {
  	this.orders = OrdersResource.orders;
 	}
}



angular.module('eshop').component('esOrderReview', {
  templateUrl: 'templates/orderReview/orderReview.html',
  controller: OrderReviewController
});
