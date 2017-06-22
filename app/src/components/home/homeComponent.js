/**
 * Main Home Controller for the Angular Material Starter App
 * @param $mdSidenav
 * @constructor
 */
class HomeController {
  constructor($mdSidenav) {
    this.$mdSidenav = $mdSidenav;
  }

  /**
   * Hide or Show the 'filter' sideNav area
   */
  toggleFilter() {
    this.$mdSidenav('filter').toggle();
  }
}

angular.module('eshop').component('esHome', {
  templateUrl: 'templates/home/home.html',
  controller: HomeController
});
