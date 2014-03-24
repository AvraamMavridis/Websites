'use strict';


// Declare app level module which depends on filters, and services
var MyCompany = angular.module('MyCompany', ['ngRoute']);

MyCompany.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/news', {
        templateUrl: 'templates/news.html',
        controller: 'NewsController'
      }).
      when('/portofolio', {
        templateUrl: 'templates/portofolio.html',
        controller: 'PortofolioController'
      }).
      when('/contact', {
        templateUrl: 'templates/contact.html',
        controller: 'PortofolioController'
      }).
      otherwise({
        redirectTo: '/news'
      });
  }]);
