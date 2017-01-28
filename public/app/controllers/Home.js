app.controller('Home', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {

    $scope.getCity = function() {
        Query = $scope.city;
        URI = 'http://api.openweathermap.org/data/2.5/forecast/daily?units=metric&cnt=7&appid=' + $rootScope.config.api + '&q=';
        $http.get(URI + Query).then(
        	function(result){
            	$scope.days = result.data;
        	}
        );
    };
}]);
