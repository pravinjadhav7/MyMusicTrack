angular.module('app', ['lbServices','ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('page1', {
      url: '/page1',
      templateUrl: 'views/page1.html',
      controller: ''
    }),

      $stateProvider
      .state('musiclist', {
      url: '/musiclist',
      templateUrl: 'views/musiclist.html',
      controller: 'musiclistController'
    }),
    $stateProvider
      .state('page3', {
      url: '/page3',
      templateUrl: 'views/page3.html',
      controller: 'generesController'
    }),
    $stateProvider
      .state('addnewmusic', {
      url: '/addnewmusic',
      templateUrl: 'views/addnewmusic.html',
      controller: 'addMusicController'
    })
    ;

    $urlRouterProvider.otherwise('index');

  }]);