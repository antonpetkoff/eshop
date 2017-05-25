/**
 * Main Home Controller for the Angular Material Starter App
 * @param UsersDataService
 * @param $mdSidenav
 * @constructor
 */
class HomeController {
  constructor($scope, UsersDataService, $mdSidenav) {
    this.$scope = $scope;
    this.UsersDataService = UsersDataService;
    this.$mdSidenav = $mdSidenav;

    this.selected     = null;
    this.users        = [ ];

    this.UsersDataService.loadAllUsers()
      .then(users => {
        this.users = [].concat(users);
        this.selected = users[0];
      });
  }

  /**
   * Hide or Show the 'left' sideNav area
   */
  toggleUsersList() {
    this.$mdSidenav('left').toggle();
  }

  /**
   * Select the current avatars
   * @param menuId
   */
  selectUser(user) {
    this.selected = angular.isNumber(user) ? this.$scope.users[user] : user;
  }
}

angular.module('eshop').component('esHome', {
  templateUrl: 'src/components/home/home.html',
  controller: HomeController
});
