// Create the application
var app = angular.module('app', ['ngRoute', 'mgcrea.ngStrap']);
// For more information about ngStrap, see http://mgcrea.github.io/angular-strap/

// Setup routing
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/views/home.html"
        })
        .when("/about", {
            templateUrl: "app/views/about.html"
        })
        .when("/services-and-pricing", {
            templateUrl: "app/views/services-and-pricing.html"
        })
        .when("/calendar", {
            templateUrl: "app/views/calendar.html"
        })
        .otherwise({
            redirectTo: '/'
        });
});

// Angular 1.6 added a hash-prefix. We don't want that.
app.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
}]);