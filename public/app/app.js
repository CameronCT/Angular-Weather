var app = angular.module('WeatherApp', ['ngRoute', 'ngAnimate']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'Home', 
            templateUrl: 'views/home.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});
app.run(['$http', '$rootScope', function($http, $rootScope) {
    $rootScope.config = {
        'name':       'Weather App',
        'year':       '2017',
        'api':        'da2bde4d69fd8ce1c5159125e2152faf', 
    };
}]);
