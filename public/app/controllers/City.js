app.controller('City', ['$rootScope', '$scope', '$route', '$routeParams', '$http', function($rootScope, $scope, $route, $routeParams, $http) {

    $scope.getCity = function() {
        Query = $routeParams.name;
        URI = 'http://api.openweathermap.org/data/2.5/forecast/daily?units=metric&cnt=7&appid=' + $rootScope.config.api + '&q=';
        $http.get(URI + Query).then(
        	function(result){
            	$scope.days 		= result.data;
        	}
        );
    };
    $scope.getCity();

}]);
