angular.module('eshop').component('esUsersList', {
  bindings: {
    users: '<',
    selected: '<',
    showDetails: '&onSelected'
  },
  templateUrl: 'templates/usersList/usersList.html'
});
