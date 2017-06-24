'use strict';

class OrdersResource {
  constructor() {
    const addresses = _.times(50, () => _.random(100, 5000));
    const contacts = ['/assets/laptop-1.jpg'];
    const items = ['ASUS ProBook'];
    // const properties = ['16 GB RAM', '256 GB SDD', 'Intel Core i7', 'Full HD IPS'];
    const deliveryDates = ['02.12.1233', '02.12.1233', '02.12.1233', '02.12.1233', '12.02.2233'];

    this.orders = _.times(10, (id) => ({
      id,
      address: _.sample(addresses),
      contact: _.sample(contacts),
      item: _.sample(items),
      deliveryDate: _.sample(deliveryDates), 
    }));
  }
}

angular.module('eshop').service('OrdersResource', OrdersResource);
