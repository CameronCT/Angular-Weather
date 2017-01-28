var app = angular.module('WeatherApp', ['ngRoute', 'ngAnimate', 'toastr']);

app.config(function ($routeProvider, toastrConfig) {
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

    angular.extend(toastrConfig, {
        timeOut: 99999999,
        autoDismiss: false,
        containerId: 'toast-container',
        maxOpened: 0,    
        newestOnTop: true,
        positionClass: 'toast-top-right',
        preventDuplicates: false,
        preventOpenDuplicates: false,
        target: 'body'
    });
});

app.run(['$http', '$rootScope', function($http, $rootScope) {
    $rootScope.config = {
        'name':       'Angular Weather',
        'year':       '2017',
        'api':        'da2bde4d69fd8ce1c5159125e2152faf', 
    };
}]);
