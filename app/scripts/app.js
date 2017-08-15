'use strict';

/**
 * @ngdoc overview
 * @name angularTreeApp
 * @description
 * # angularTreeApp
 *
 * Main module of the application.
 */
angular
  .module('angularTreeApp', [
    'ngRoute',
    'ngTouch'
  ])
  .config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/addElement', {
        templateUrl: 'views/addElement.html',
        controller: 'AddElementCtrl',
        controllerAs: 'addElement'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
