app.controller('City', ['$rootScope', '$scope', '$route', '$routeParams', '$http', '$location', 'toastr', function($rootScope, $scope, $route, $routeParams, $http, $location, toastr) {

    $scope.getCity = function() {
        Query = $routeParams.name;
        URI = 'http://api.openweathermap.org/data/2.5/forecast/daily?units=metric&cnt=7&appid=' + $rootScope.config.api + '&q=';
        $http.get(URI + Query).then(
        	function(result) {
                $scope.days 		= result.data;
        	},
            function(result) {
                $location.url('/');
                toastr.error('The city you have entered could not be found, please try again!');
            }
        );
    };
    $scope.getCity();

}]);
