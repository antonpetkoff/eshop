'use strict';

class PaymentController {
  constructor(ProductsResource) {
  	this.products = ProductsResource.cart;
   	this.methods = ["Дебитна карта", "Кредитна карта", "Наложен платеж"];
 	}

 	/**
   *  Calculate the price of all the items in the basket
 	 */
	totalSum() {
	  var total=0;
		for(var i in this.products) { total += this.products[i].price; }
		return total;
	};
}



angular.module('eshop').component('esPayment', {
  templateUrl: 'templates/payment/payment.html',
  controller: PaymentController
});
