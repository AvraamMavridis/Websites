'use strict';
// Declare app level module which depends on filters, and services
var Artist = angular.module('Artist', ['ngRoute']);

 Artist.config(['$routeProvider',
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

 // Artist.directive('myCustomer', function() {
 //    return {
 //      restrict: 'A',
 //      replace:true,
 //      template: "<li><img></li>",
 //      link: function($scope, element, attrs) {
 //          var observed = element[0].children;
 //          console.log(observed[0]);
 //            attrs.$observe(observed, function(value) {
 //            //element.find('img').attr('src', "images/facebook.png")
 //          })
 //      }
 //    };
 // });



