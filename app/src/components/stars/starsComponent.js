'use strict';

class StarsController {
  $onInit() {
    this.solid = _.range(0, this.count);
    this.empty = _.range(0, 5 - this.count);
  }
}

angular.module('eshop').component('esStars', {
  templateUrl: 'templates/stars/stars.html',
  bindings: {
    count: '<'
  },
  controller: StarsController
});
