angular.module('eshop', ['ngMaterial', 'ui.router'])
  .config(($mdIconProvider, $mdThemingProvider, $stateProvider, $urlRouterProvider) => {
    // Register the user `avatar` icons
    $mdIconProvider
      .defaultIconSet("./assets/svg/avatars.svg", 128)
      .icon("menu", "./assets/svg/menu.svg", 24)
      .icon("share", "./assets/svg/share.svg", 24)
      .icon("google_plus", "./assets/svg/google_plus.svg", 24)
      .icon("hangouts", "./assets/svg/hangouts.svg", 24)
      .icon("twitter", "./assets/svg/twitter.svg", 24)
      .icon("phone", "./assets/svg/phone.svg", 24)
      .icon("magnifier", "./assets/svg/magnifier.svg", 24)
      .icon("solid-star", "./assets/svg/star-solid.svg", 240)
      .icon("empty-star", "./assets/svg/star-empty.svg", 24)
      .icon("cart", "./assets/svg/cart.svg", 24)
      .icon("user", "./assets/svg/user-shape.svg", 24)
      .icon("heart-solid", "./assets/svg/heart-solid.svg", 24)
      .icon("money", "./assets/svg/money.svg", 24)
      .icon("heart-empty", "./assets/svg/heart-empty.svg", 24)
      .icon("shield", "./assets/svg/shield.svg", 24)
      .icon("credit-card", "./assets/svg/credit-card.svg", 24)
      .icon("choice", "./assets/svg/choice.svg", 24)
      .icon("register", "./assets/svg/register.svg", 24)
      .icon("login", "./assets/svg/login.svg", 24);

    $mdThemingProvider.theme('default')
      .primaryPalette('blue', {
        default: '900'
      })
      .accentPalette('blue')
      .warnPalette('red')
      .dark();

    $stateProvider
      .state({
        name: 'home',
        url: '/home',
        component: 'esHome'
      })
      .state({
        name: 'product',
        url: 'product/:id',
        component: 'esProduct'
      })
      .state({
        name: 'login',
        url: '/login',
        component: 'esLogin'
      })
      .state({
        name: 'cart',
        url: '/cart',
        component: 'esCart'
      })
      .state({
        name: 'register',
        url: '/register',
        component: 'esRegister'
      })
      .state({
        name: 'payment',
        url: '/payment',
        component: 'esPayment'
      })
      .state({
        name: 'orderReview',
        url: '/orderReview',
        component: 'esOrderReview'
      });

    // $urlRouterProvider.otherwise('/home'); // TODO: why did this mess up?
    $urlRouterProvider.when('/', '/home');
  });
