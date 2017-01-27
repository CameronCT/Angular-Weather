var app = angular.module('WeatherApp', ['ngRoute', 'ngAnimate']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});
app.run(['$http', '$rootScope', function($http, $rootScope) {
    $rootScope.config = {
        'name':       'Weather App',
        'year':       '2017'
    };
}]);
