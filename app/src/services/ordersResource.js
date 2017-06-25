'use strict';

class OrdersResource {
  constructor(ProductsResource) {
    const productIds = _.map(ProductsResource.products, 'id');
    const addresses = [
      '1111 София 11 ул. "Гео Милев" № 18',
      '1113 София 13 бул. "Цариградско шосе" № 85 бл.109',
      '1123 София 23 Президентство - бул. "Дондуков" №1',
      '1124 София 124 ул. "Хан Омуртаг" №84',
      '1125 София 125 бул. "Г.М.Димитров" №54'
    ];
    const contacts = ['Иван Петров', 'Катерина Димитрова', 'Огнян Димов', 'Борис Гаврилов'];
    const deliveryDates = ['16.12.2012', '02.10.2009', '19.08.2017', '02.09.2017', '12.05.2015'];

    this.orders = _.times(10, (id) => ({
      id,
      productId: _.sample(productIds),
      address: _.sample(addresses),
      contact: _.sample(contacts),
      deliveryDate: _.sample(deliveryDates)
    }));
  }
}

angular.module('eshop').service('OrdersResource', OrdersResource);
