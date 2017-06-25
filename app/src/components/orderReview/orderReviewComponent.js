'use strict';

class OrderReviewController {
  constructor(OrdersResource, ProductsResource) {
    this.orders = _.map(OrdersResource.orders, (order) => {
      return _.merge(order, {
        product: _.find(ProductsResource.products, {id: order.productId})
      });
    });
  }
}



angular.module('eshop').component('esOrderReview', {
  templateUrl: 'templates/orderReview/orderReview.html',
  controller: OrderReviewController
});
