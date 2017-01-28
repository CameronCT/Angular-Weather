
app.controller('City', ['$rootScope', '$scope', '$routeParams', '$http', '$location', 'toastr', function($rootScope, $scope, $routeParams, $http, $location, toastr) {

    $scope.limit        = 5;
    $scope.page         = 1;

    $scope.getCity = function() {

        Query = $routeParams.name;
        URI = 'http://api.openweathermap.org/data/2.5/forecast/daily?units=metric&cnt=16&appid=' + $rootScope.config.api + '&q=';
        $http.get(URI + Query).then(
        	function(result) {
                $scope.days 		= result.data;
                $scope.data         = result.data.list.sort(function(a, b) {
                    return parseInt(a.dt) - parseInt(b.dt);
                });

                $scope.$watch("page + limit", function() {
                    var begin = (($scope.page - 1) * $scope.limit);
                    var end = begin + $scope.limit;
                    $scope.zData = $scope.data.slice(begin, end);
                });

                console.log($scope.data);
        	},
            function(result) {
                $location.url('/');
                toastr.error('The city you have entered could not be found, please try again!');
            }
        );
    };
    $scope.getCity();
}]);