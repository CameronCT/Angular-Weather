var app = angular.module('WeatherApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'toastr']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'Home', 
            templateUrl: 'views/home.html'
        })
        .when('/about', {
            templateUrl: 'views/about.html'
        })
        .when('/city/:name', {
            controller: 'City', 
            templateUrl: 'views/city.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.run(['$rootScope', function($rootScope) {
    $rootScope.config = {
        'name':       'Angular Weather',
        'year':       '2017',
        'api':        'da2bde4d69fd8ce1c5159125e2152faf', 
    };
}]);
